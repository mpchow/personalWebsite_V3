import './App.css';

import Home from './components/home/home'
import Sidebar from './components/sidebar/sidebar'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Resume from './components/resume/resume'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>  
      <div className="App">
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <div>
              <Sidebar />
              <Home />
              <About />
              <Projects />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
