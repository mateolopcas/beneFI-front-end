import { useState } from "react"
import { getUsers } from "../../services/user"
import { useNavigate } from "react-router-dom"
import { getUser } from "../../services/user"


const LogIn = (props) => {
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

    try {
      const users = await getUsers()


      users.forEach((user) => {
        if ((user.email === form.email) && (user.password === form.password)) {
          current = user._id

        }

      }

      )
      const response = await getUser(current)

      await props.setUser(response)

      navigate("/request-send", { replace: true })

    } catch (error) {

      console.error(error)
      setForm({
        isError: true,
        errorMsg: "invalid login information",
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>{form.errorMsg}</button>
      )
    } else {
      <button type="submit">Login</button>
    }
  }

  return (
    <div className="form-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label>email:</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label>Password:</label>
          <input
            required
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
        {renderError()}
      </form>
    </div>
  )
}

export default LogIn;



// getUsers
// loop through users checking email and password
// current = user_id 
// response = getUser(current)
// setUser (response.data)
