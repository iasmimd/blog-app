import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';

const Signup = () => {
  return (
    <Container>
      <section>
      <Input  label='nome' register='register'/>
        <Input label='cpf' register='register'/>
        <Button>Cadastrar</Button>
        <p>Já possui uma conta? Faça login.</p>
      </section>
    </Container>
  );
};

export default Signup;
