import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path = '/'>
        <Signup/>
      </Route>
    </Switch>
  );
};

export default Routes;
