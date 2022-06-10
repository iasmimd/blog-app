import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import toast from 'react-hot-toast';

interface UserProviderProps {
  children: ReactNode;
}

interface UserLogin {
  email: string;
  password: string;
}

interface UserInfo {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
}

interface UserContextData {
  userInfo: UserInfo;
  login: (userLogin: UserLogin) => Promise<void>;
  getUser: () => Promise<void>;
  clearUserInfo: () => void;
}

const initialValue = {
  id: '',
  username: '',
  email: '',
  avatarUrl: '',
  createdAt: '',
};

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider = ({ children }: UserProviderProps) => {
  const history = useHistory();

  const [userInfo, setUserInfo] = useState<UserInfo>(initialValue);

  const getUser = async () => {
    const info = JSON.parse(localStorage.getItem('@blog:token') || '{}');

    const { data } = await api.get(`/user/${info.userId}`, {
      headers: {
        Authorization: `Bearer ${info.token}`,
      },
    });

    setUserInfo(data);
    toast.success(`oie, ${data.username}`);
  };

  const login = async (userLogin: UserLogin) => {
    await api
      .post('/user/login', userLogin)
      .then((res) => {
        localStorage.setItem('@blog:token', JSON.stringify(res.data));
        getUser();

        return history.push('/dashboard');
      })
      .catch((_) => toast.error('algo deu errado ):'));
  };

  const clearUserInfo = () => {
    setUserInfo(initialValue);
    localStorage.clear();
    return history.push('/');
  };

  return (
    <UserContext.Provider value={{ login, getUser, userInfo, clearUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export { UserProvider, useUser };
