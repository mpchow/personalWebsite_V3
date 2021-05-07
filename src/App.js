import './App.css';

import Home from './components/home/home'
import Sidebar from './components/sidebar/sidebar'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Resume from './components/resume/resume'
import Loading from './components/loading/loading'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';

function App() {
  let [state, setState] = useState(true);
  setTimeout(() => {setState(false)}, 2500);
  return (
    <Router>  
      <div className="App">
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
              {
                state ? <Loading /> : <div>
                                        <Home />
                                        <Sidebar />
                                        <About />
                                        <Projects />
                                        <Footer /> 
                                      </div>
              }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
