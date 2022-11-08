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
  const [user, setUser] = useState({
    _id: "6367eca3bb2dcda8facae549",
    email: "Priscilla_Weatcroft1245@sveldo.biz",
    firstName: "Priscilla",
    lastName: "Weatcroft",
    password: "123456",
    avatarImg: "",
    transactions: [
      {
        _id: "636ababe0a533886bb79a132",
      to: "Boris_Cunningham8660@tonsy.org",
      from: "Priscilla_Weatcroft1245@sveldo.biz",
      currency: "Ethereum",
      usdAmount: 75,
      sentOn: "2022-11-08T20:22:46.238Z",
        __v: 0
      }
    ]
  })


  return (
    <div>
      <Navbar user={user} />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/request-send" element={<Request user={user}/>} />
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
