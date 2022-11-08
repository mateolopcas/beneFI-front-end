import { useState } from 'react'
import { updateUser, deleteUser } from "../../services/user"
import { useNavigate } from "react-router-dom"
import ProfileData from '../../components/ProfileData'

function Profile({user, setUser}) {
  const [profile, setProfile] = useState({
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    avatarImg: user.avatarImg,
    confirmPassword: user.password
  })

  const [remove, setRemove] = useState(false)
  const [edit, setEdit] = useState(false)
  
  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEdit = (e) => {
    e.target.style.display = "none"
    setEdit(true)

  }
  const handleDelete = async (e) => {
    e.preventDefault()
    setRemove(true)
    await deleteUser(user._id)

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateUser(user._id, profile)
    setUser(profile)
    navigate('/', { replace: true })
  }
  const { firstName, lastName, email, password, confirmPassword, avatarImg } = profile

  return (
    <div>
      
      {edit === false && <ProfileData user={user} />}
      {edit === true &&
        <form onSubmit={handleSubmit}>
          <div>
          <label>Email Address: </label><input
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          </div>
          <div>
          <label>First Name: </label><input
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          /></div>
          <div>
          <label>Last Name: </label><input
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          /></div>
          <div><label>Password: </label><input
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
          /></div>
          <div><label>Confirm Password: </label><input
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          /></div>
          <div><label>Avatar Image: </label><input
            placeholder="Avatar Image"
            name="avatarImg"
            value={avatarImg}
            onChange={handleChange}
          /></div>
          <button type="submit">Submit</button>
        </form>
      }

      <button onClick={handleEdit} >Edit Profile</button>
      <button onClick={handleDelete}>Delete Profile</button>
      
      
    </div>
  )
}

export default Profile