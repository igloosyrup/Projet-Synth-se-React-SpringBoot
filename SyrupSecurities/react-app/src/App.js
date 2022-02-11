import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (
          <>
            <Home />
          </>
        )}/>
      </Switch>
    </Router>
  );
}

export default App;
