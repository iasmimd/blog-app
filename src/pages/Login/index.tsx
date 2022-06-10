import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';
import { useUser } from '../../providers/User';
import {RiLockPasswordFill} from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'

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

  const {  login } = useUser();

  return (
    <Container>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <Input
            label='Email'
            name='email'
            register={register}
            icon={HiOutlineMail}
            error={errors.email?.message}
          />
          <Input
            label='Senha'
            name='password'
            register={register}
            icon={RiLockPasswordFill}
            error={errors.password?.message}
          />
        </div>
        <Button type='submit'>Logar</Button>
        <p>Ainda não possui uma conta? <Link to='/'>Cadastre-se</Link></p>
      </form>
    </Container>
  );
};

export default Login;
