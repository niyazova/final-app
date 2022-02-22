import Login from './components/Login'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
