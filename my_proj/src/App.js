
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import 'antd/dist/antd.css';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App" style={{ position:'relative'}}>
 <Navbar/>
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
