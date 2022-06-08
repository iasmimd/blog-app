import { ReactNode } from 'react';
import { LoginProvider } from './Login';
import { PostProvider } from './Posts';

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <LoginProvider>
      <PostProvider>{children}</PostProvider>
    </LoginProvider>
  );
};

export default Provider;
