import './styles/App.css';
// import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <div id="top" className='App'>
      <Navbar />
      <div className="main--container">
        <div className="hero--container">
          <div className="hero">
            <h1>Solid Data Solutions</h1>
            <h2>Digitizing the World</h2>
            <div className="btn--container">
              <a className='btn' href="#services">Services</a>
              <a className='btn' href="#contact">Contact</a>
            </div>
          </div>  
        </div>
        <Services />
        <About />
        <Contact />
      </div>  
    </div>
  );
}

export default App;
