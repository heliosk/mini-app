import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/list' component={ListScreen} />
    </BrowserRouter>
  );
};

export default App;
