import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/user"



const SignUp = (props) => {

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    isError: false,
    errorMsg: '',



  })
  let navigate = useNavigate()

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { setUser } = props;
    try {
      const user = await createUser(form)
      setUser(user)
      navigate("/transactions", { replace: true })
    } catch (error) {
      console.error(error)
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isError: true,
        errorMsg: "Sign Up Details Invalid"
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : '';
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return (
        <button type='submit'>Sign Up</button>
      )
    }
  }

  const { firstName, lastName, email, password, confirmPassword } = form
  return (

    <div className="form-container">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label>First Name:</label>
          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          <div className="label-input">
            <label>Last Name:</label>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Email Address:</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Password: </label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Confirm Password:</label>
            <input
              required
              name="confirmPassword"
              value={confirmPassword}
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
        {renderError()}
      </form>
    </div>
  )

}

export default SignUp;

