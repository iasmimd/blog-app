import { createContext, ReactNode, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import toast from 'react-hot-toast'

interface LoginProviderProps {
  children: ReactNode;
}

interface UserLogin {
  email: string;
  password: string;
}

interface UserData {
  token: string;
  userId: string;
}

interface LoginContextData {
  userData: UserData;
  login: (userLogin: UserLogin) => Promise<void>;
}

const initialValue = {
  token: '',
  userId: '',
};

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

const LoginProvider = ({ children }: LoginProviderProps) => {
  const history = useHistory<unknown>();

  const [userData, setUserData] = useState<UserData>(initialValue);

  const login = async (userLogin: UserLogin) => {
    await api
      .post('/user/login', userLogin)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
        localStorage.setItem('@blog:token', JSON.stringify(res.data));
        history.push('/dashboard');
        toast.success('bem-vindo user')
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginContext.Provider value={{ userData, login }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  const context = useContext(LoginContext);

  return context;
};

export { LoginProvider, useLogin };
