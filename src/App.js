import './App.css';
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <Navbar />
      <div className="Container">
        <Routes>

        </Routes>
      </div>
    </div>
  );
}

export default App;
