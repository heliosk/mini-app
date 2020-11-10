import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={HomeScreen} />
    </BrowserRouter>
  );
};

export default App;
