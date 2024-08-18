import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
