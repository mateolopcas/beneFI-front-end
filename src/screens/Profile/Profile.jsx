import { useState } from 'react'
import { updateUser } from "../../services/user"
import { useNavigate } from "react-router-dom"


function Profile(props) {
  const [profile, setProfile] = useState({
    email: props.email,
    firstName: props.firstName,
    lastName: props.lastName,
    password: props.password,
    avatarImg: props.avatarImg
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateUser(props._id, profile)
    navigate('/', { replace: true })
  }
  const { firstName, lastName, email, password, confirmPassword } = profile

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          placeholder="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Profile