import './App.css';

import Home from './components/home/home'
import Sidebar from './components/sidebar/sidebar'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
