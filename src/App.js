import './App.css';
import Episodes from './components/Episodes';
import Header from './components/Header';
import Podcast from './components/Podcast';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup';
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path='episodes' element={<Episodes/>} />
      </Routes>
      {/* <Episodes /> */}
    </>
    

  );
}

export default App;
