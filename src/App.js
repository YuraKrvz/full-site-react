import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/Signin';




function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
