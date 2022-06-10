import { useEffect } from 'react';
import { usePost } from '../../providers/Posts';
import Header from '../../components/Header';
import { PostList, UserContent, PostSettings, TextContainer } from './style';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useUser } from '../../providers/User';

const Dashboard = () => {
  const { posts, getAllPosts } = usePost();

  const { getUser, userInfo } = useUser();

  const info = JSON.parse(localStorage.getItem('@blog:token') || '{}');

  if (info) {
    getAllPosts();
  }

  return (
    <>
      <Header />
      <TextContainer>
        <textarea />
        <button>+</button>
      </TextContainer>
      <PostList>
        {posts.map(({ id, owner, post }) => (
          <>
            <li key={id}>
              <section>
                <UserContent>
                  <img src={owner.avatarUrl} alt='profile photo' />
                  <h3>{owner.username}</h3>
                </UserContent>
                <PostSettings>
                  <FaEdit />
                  <FaTrash />
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
