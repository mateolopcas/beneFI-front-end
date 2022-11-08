import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/user"



export default function SignUp() {
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
    console.log(e.target.value)
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUser(form)
    navigate("/request", { replace: true })
  }








  // const [form, setForm] = useState({
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  //   password: '',
  //   confirmPassword: '',
  //   isError: false,
  //   errorMsg: '',



  // })
  // let navigate = useNavigate()

  // const handleChange = (e) =>
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   })

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const { setUser } = props;
  //   try {
  //     const user = await createUser(form)
  //     setUser(user)
  //     navigate("/transactions", { replace: true })
  //   } catch (error) {
  //     console.error(error)
  //     setForm({
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       password: '',
  //       confirmPassword: '',
  //       isError: true,
  //       errorMsg: "Sign Up Details Invalid"
  //     })
  //   }
  // }

  // const renderError = () => {
  //   const toggleForm = form.isError ? 'danger' : '';
  //   if (form.isError) {
  //     return (
  //       <button type='submit' className={toggleForm}>
  //         {form.errorMsg}
  //       </button>
  //     )
  //   } else {
  //     return (
  //       <button type='submit'>Sign Up</button>
  //     )
  //   }
  // }

  // const { firstName, lastName, email, password, confirmPassword } = form
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
            value={form.firstName}
            onChange={handleChange}
          />
          <div className="label-input">
            <label>Last Name:</label>
            <input
              required
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Email Address:</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Password: </label>
            <input
              required
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Confirm Password:</label>
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



