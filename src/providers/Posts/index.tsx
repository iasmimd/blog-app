import { createContext, ReactNode, useContext, useState } from 'react';
import api from '../../services/api';

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

interface PostProviderData {
  posts: Post[];
  getAllPosts: () => Promise<void>;
}

const PostContext = createContext<PostProviderData>({} as PostProviderData);

const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getAllPosts = async () => {
    const { data } = await api.get('/post?page=1', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZTQ0NTU4LWY0ZGQtNGQxMC05M2NhLWY5MjIyYzMyYmM5ZCIsImlhdCI6MTY1NDY1MzY2MywiZXhwIjoxNjU0NzQwMDYzfQ.bPjiLWNRipfKUbiq_cLIi---mrXLWywMIrGaMkDo57I',
      },
    });

    setPosts(data.data);
  };

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
