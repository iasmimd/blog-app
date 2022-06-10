import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';
import {HiOutlineMail, HiOutlinePhotograph} from 'react-icons/hi'
import {FaRegUser} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import toast from 'react-hot-toast';
interface RegisterUser {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
}

const Signup = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    avatarUrl: yup.string().required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({ resolver: yupResolver(schema) });

  const onSubmit = ({ username, email, password, avatarUrl }: RegisterUser) => {
    const user = { username, email, password, avatarUrl };
    api
      .post('user/register', user)
      .then((_) => {
        toast.success('boa! cadastro criado')
      })
      .catch((_) => toast.error('algo deu errado ):'));
  };

  return (
    <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <Input
            label='Nome de usuário'
            name='username'
            register={register}
            icon={FaRegUser}
            error={errors.username?.message}
          />
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
          <Input
            label='Foto de perfil'
            name='avatarUrl'
            register={register}
            icon={HiOutlinePhotograph}
            error={errors.avatarUrl?.message}
          />
          </div>
          <Button type='submit'>Cadastrar</Button>
          <p>Já possui uma conta? Faça <Link to='/login'>login</Link></p>
        </form>
    </Container>
  );
};

export default Signup;
