import { toNamespacedPath } from 'node:path/win32';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';
import { text } from 'stream/consumers';

interface PostProviderProps {
  children: ReactNode;
}

interface Owner {
  id: string;
  username: string;
  avatarUrl: string;
}

interface Post {
  id: string;
  post: string;
  owner: Owner;
}
interface PostContextData {
  posts: Post[];
  getAllPosts: () => Promise<void>;
  textValue: string;
  setTextValue: (active: string) => void;
  createPost: () => Promise<void>;
  setPostId: (active: string) => void;
  deletePost: (postId: string) => Promise<void>;
  newTextValue: string;
  setNewTextValue: (active: string) => void;
  updatePost: () => Promise<void>;
}

const info = JSON.parse(localStorage.getItem('@blog:token') || '{}');

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [textValue, setTextValue] = useState<string>('');

  const [newTextValue, setNewTextValue] = useState<string>('');

  const [postId, setPostId] = useState<string>('');

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const { data } = await api.get('/post?page=1', {
      headers: {
        Authorization: `Bearer ${info.token}`,
      },
    });

    setPosts(data.data);
  };

  const createPost = async () => {
    await api
      .post(
        '/post',
        { content: `${textValue}` },
        {
          headers: {
            Authorization: `Bearer ${info.token}`,
          },
        }
      )
      .then((_) => {
        getAllPosts();
        toast.success('boa, post legal!');
      })
      .catch((_) => toast.error('algo deu errado ):'));
  };

  const updatePost = async () => {
    await api
      .patch(
        `/post/${postId}`,
        {
          newContent: `${newTextValue}`,
        },
        {
          headers: {
            Authorization: `Bearer ${info.token}`,
          },
        }
      )
      .then((_) => {
        getAllPosts();
        toast.success('post atualizado (:');
      })
      .catch((err) => console.log(err));
  };

  const deletePost = async (postId: string) => {
    console.log(postId);
    await api
      .delete(`/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${info.token}`,
        },
      })
      .then((_) => {
        getAllPosts();
        toast.success('post excluído!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getAllPosts,
        textValue,
        setTextValue,
        createPost,
        setPostId,
        deletePost,
        newTextValue,
        setNewTextValue,
        updatePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => {
  const context = useContext(PostContext);

  return context;
};

export { PostProvider, usePost };
