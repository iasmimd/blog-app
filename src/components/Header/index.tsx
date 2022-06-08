import { Container } from './style';
import { usePost } from '../../providers/Posts';
import Button from '../Button';

const Header = () => {

  return (
    <Container>
      <img alt='profile photo' />
      <Button>clique</Button>
    </Container>
  );
};

export default Header;
