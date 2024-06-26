import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="*" element={<Pagenotfound />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
