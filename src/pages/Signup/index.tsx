import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';
import api from '../../services/api';
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <Input
            label='Nome de usuário'
            name='username'
            register={register}
            errors={errors.username?.message}
          />
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
          <Input
            label='Foto de perfil'
            name='avatarUrl'
            register={register}
            errors={errors.avatarUrl?.message}
          />
          </div>
          <Button type='submit'>Cadastrar</Button>
          <p>Já possui uma conta? Faça login.</p>
        </form>
    </Container>
  );
};

export default Signup;
