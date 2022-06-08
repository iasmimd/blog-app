import { ReactNode } from 'react';
import { PostProvider } from './Posts';

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return <PostProvider>{children}</PostProvider>;
};

export default Provider;
