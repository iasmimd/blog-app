import { toNamespacedPath } from 'node:path/win32';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';

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
}

const info = JSON.parse(localStorage.getItem('@blog:token') || '{}');

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  
  const getAllPosts = async () => {
    const { data } = await api.get('/post?page=1', {
      headers: {
        Authorization: `Bearer ${info.token}`,
      },
    });
    
    setPosts(data.data);
  };

  const updatePost = async () => {};

  const deletePost = async () => {};

  return (
    <PostContext.Provider value={{ posts, getAllPosts }}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => {
  const context = useContext(PostContext);

  return context;
};

export { PostProvider, usePost };
