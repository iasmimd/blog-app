import CreateGlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <>
      <CreateGlobalStyle />
      <Routes />
    </>
  );
};

export default App;
