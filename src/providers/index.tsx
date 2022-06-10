import { ReactNode } from 'react';
import { UserProvider } from './User';
import { PostProvider } from './Posts';

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <UserProvider>
      <PostProvider>{children}</PostProvider>
    </UserProvider>
  );
};

export default Provider;
