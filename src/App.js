import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './components/home/Home'
import About from './components/about/About'
import User from './components/home/users/User'

//css file
import './App.css';

//context
import GithubState from './context/github/GithubState';

function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content-page">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
    </Router>
    </GithubState>
  );
}

export default App;
