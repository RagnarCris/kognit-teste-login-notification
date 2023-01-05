import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
