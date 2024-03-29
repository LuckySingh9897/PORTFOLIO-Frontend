
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/Home/Home"
import Header from "./component/Header/Header";
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import  Login  from './component/Login/Login';
function App() {
  return (
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/account" element={<Login/>}/>
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
