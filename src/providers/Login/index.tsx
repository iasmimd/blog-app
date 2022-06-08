import { createContext, ReactNode, useContext, useState } from 'react';
import api from '../../services/api';

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
    userId: ''
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [userData, setUserData] = useState<UserData>(initialValue);

  const login = async (userLogin: UserLogin) => {
    await api
      .post('/user/login', userLogin)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
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
