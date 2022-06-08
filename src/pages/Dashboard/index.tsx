import { useEffect } from 'react';
import { usePost } from '../../providers/Posts';
import Header from '../../components/Header';
import { PostList, UserContent, PostSettings } from './style';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const Dashboard = () => {
  const { posts, getAllPosts } = usePost();
  //   console.log(posts)

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Header />
      <PostList>
        {posts.map(({ id, owner, post }) => (
          <>
            <li key={id}>
              <section>
                <UserContent>
                  <img src={owner.avatarUrl} />
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
