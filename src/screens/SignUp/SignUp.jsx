import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/user"
import "./SignUp.css"



export default function SignUp({setUser}) {
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password === form.confirmPassword) {
        let newUser = await createUser(form)
        setUser(newUser)
        navigate("/request-send", { replace: true })
    } else {
        alert(`Passwords don't match!`)
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

  return (

    <div className="form-container">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; First Name:&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   </label>
          <input
            required
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          <div className="label-input">
            <label>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; Last Name:&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;  </label>
            <input
              required
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; Email Address:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Password:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
            <input
              required
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Confirm Password:&nbsp; &nbsp;&nbsp; &nbsp; </label>
            <input
              required
              name="confirmPassword"
              value={form.confirmPassword}
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )

}



