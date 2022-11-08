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
import { useState} from "react"



function App() {
  const [user, setUser] = useState(null)
  

  return (
    <div>
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/request" element={<Request user={user}/>} />
          <Route path="/about" element={<About user={user}/>} />
          <Route path="/transactions" element={<Transactions user={user}/>} />
          <Route path="/sign-in" element={<SignIn setUser={setUser}/>} />
          <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
