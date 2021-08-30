import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './components/home/Home';
import About from './components/about/About';
import User from './components/home/users/User';
import Alert from './components/alert/Alert'

//css file
import './App.css';

//state
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content-page">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
