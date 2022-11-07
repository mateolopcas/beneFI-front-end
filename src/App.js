import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./screens/Home/Home"
import About from "./screens/About/About"
import Profile from "./screens/Profile/Profile"
import Request from "./screens/Request-send/Request"
import Transactions from "./screens/Transaction/Transactions"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"


function App() {
  return (
    <div>
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
