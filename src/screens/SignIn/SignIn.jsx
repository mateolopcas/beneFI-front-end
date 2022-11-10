import { useState } from "react"
import { getUsers } from "../../services/user"
import { useNavigate } from "react-router-dom"
import { getUser } from "../../services/user"


const SignIn = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let current


      const users = await getUsers()


      users.forEach((user) => {
        if ((user.email === form.email) && (user.password === form.password)) {
          current = user._id

        }
      })

      if (current !== undefined) {
      const response = await getUser(current)

      await props.setUser(response)

      navigate("/request-send", { replace: true })
      } else {
      alert(`Invalid information!`)
      setForm({
        isError: true,
        errorMsg: "invalid information",
        email: '',
        password: '',
      })
    }
  }  



  return (
    <div className="form-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Email:&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Password: &nbsp; &nbsp;&nbsp;</label>
          <input
            required
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default SignIn;


