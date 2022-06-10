import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Signup />
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
