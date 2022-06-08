import { Container } from './style';
import { usePost } from '../../providers/Posts';
import Button from '../Button';
import Card from '../Card';

const Header = () => {
  return (
    <>
      <Container>
        <img src='https://i.pinimg.com/564x/3f/87/7d/3f877d7f890d8e53839e739cff8d1a3b.jpg' alt='profile photo' />
        <Button>clique</Button>
      </Container>
      <Card username='ias' avatarUrl='https://i.pinimg.com/564x/3f/87/7d/3f877d7f890d8e53839e739cff8d1a3b.jpg' post='isso e um post de exemplo hahahgfdgdfjdfjdfjfgjfgjfjfgjgfjdfdjgjgfahha'></Card>
    </>
  );
};

export default Header;
