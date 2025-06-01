import Home1 from './components/Home1/Home1'
import Navbar1 from './components/Navbar/Navbar1'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles1 from './components/Particles/Particles1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Project from './components/Project/Project';
import './App.css';
import Navbar2 from './components/Navbar/Navbar2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
      <div className="App" align="center">
        
        <Particles1/>
        <Navbar2/>
        <div className="app-content"> 
          
          <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home1/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<Project/>}/>
          </Routes>
          </BrowserRouter>
          <br/>
          <br/>
          <Footer/>
        </div>
        </div>
       
  );
}

export default App;
