import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Courses from './components/Courses'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
