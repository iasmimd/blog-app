import { Container } from './style';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../../providers/User';

const Header = () => {
  const history = useHistory();

  const { userInfo, getUser, clearUserInfo } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Container>
        <img src={userInfo.avatarUrl} alt='profile photo' />
        {/* <span>{userInfo.username}</span> */}
        <Button onClick={clearUserInfo}>Sair</Button>
      </Container>
    </>
  );
};

export default Header;
