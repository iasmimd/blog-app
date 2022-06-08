import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';
import api from '../../services/api';
import { useLogin } from '../../providers/Login';

interface RegisterUser {
  email: string;
  password: string;
}

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({ resolver: yupResolver(schema) });

  const { userData, login } = useLogin();

  return (
    <Container>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <Input
            label='Email'
            name='email'
            register={register}
            errors={errors.email?.message}
          />
          <Input
            label='Senha'
            name='password'
            register={register}
            errors={errors.password?.message}
          />
        </div>
        <Button type='submit'>Logar</Button>
        <p>Já possui uma conta? Faça login.</p>
      </form>
    </Container>
  );
};

export default Login;
