import { useState } from 'react'
import { updateUser } from "../../services/user"
import { useNavigate } from "react-router-dom"

function Profile({user}) {
  const [profile, setProfile] = useState({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    avatarImg: user.avatarImg
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
    await updateUser(user._id, profile)
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