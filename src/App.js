import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';

//components
import Home from './components/home/Home'
import About from './components/about/About'

//css file
import './App.css';

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
            </Switch>
          </div>
        </div>
    </Router>
    </GithubState>
  );
}

export default App;
