import { useEffect, useState } from 'react';
import { usePost } from '../../providers/Posts';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { PostList, UserContent, PostSettings, TextContainer } from './style';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useUser } from '../../providers/User';
import toast from 'react-hot-toast';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Dashboard = () => {
  const {
    posts,
    createPost,
    setTextValue,
    deletePost,
    setPostId,
    updatePost,
    setNewTextValue,
  } = usePost();

  const { getUser, userInfo } = useUser();

  const info = JSON.parse(localStorage.getItem('@blog:token') || '{}');

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
        >
          <textarea onChange={(event) => setNewTextValue(event.target.value)} />
          <Button
            onClick={() => {
              updatePost();
              onCloseModal();
            }}
          >
            Atualizar
          </Button>
        </Modal>
      )}
      <Header />
      <TextContainer>
        <textarea onChange={(event) => setTextValue(event.target.value)} />
        <div>
          <button
            onClick={() => {
              createPost();
            }}
          >
            +
          </button>
        </div>
      </TextContainer>
      <PostList>
        <hr />
        {posts.map(({ id, owner, post }) => (
          <>
            <li key={id}>
              <section>
                <UserContent>
                  <img src={owner.avatarUrl} alt='profile photo' />
                  <h3>{owner.username}</h3>
                </UserContent>
                <PostSettings>
                  {owner.id === info.userId && (
                    <>
                      <FaEdit
                        onClick={() => {
                          onOpenModal();
                          setPostId(id);
                        }}
                      />
                      <FaTrash onClick={() => deletePost(id)} />
                    </>
                  )}
                </PostSettings>
              </section>
              <p>{post}</p>
            </li>
            <hr />
          </>
        ))}
      </PostList>
    </>
  );
};

export default Dashboard;
