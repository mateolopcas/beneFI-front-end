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
    setEdit(true)
  }
  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteUser(user._id)
    setUser({
      _id: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      avatarImg: "",
      transactions: []
    })
    navigate('/', { replace: true })

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (profile.password !== profile.confirmPassword) {
      alert("Passwords don't match")
    } else {
      await updateUser(user._id, profile)
      setUser(profile)
      setEdit(false)
      navigate('/profile', { replace: true })
    }
  }
  const { firstName, lastName, email, password, confirmPassword, avatarImg } = profile

  return (
    <div>
      
      {edit === false && <ProfileData user={user} />}
      {edit === true &&
        <form onSubmit={handleSubmit}>
          <div>
          <label>Email Address: </label><input required
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          </div>
          <div>
          <label>First Name: </label><input required
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          /></div>
          <div>
          <label>Last Name: </label><input required
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          /></div>
          <div><label>Password: </label><input required
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
          /></div>
          <div><label>Confirm Password: </label><input required
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          /></div>
          <div><label>Avatar Image: </label><input required
            placeholder="Avatar Image"
            name="avatarImg"
            value={avatarImg}
            onChange={handleChange}
          /></div>
          <button type="submit">Submit</button>
        </form>
      }
      <div>
        {!edit &&
        <div>
        <button onClick={handleEdit} >Edit Profile</button>
            <button onClick={handleDelete}>Delete Profile</button>
        </div>
        }
      </div>
      
    </div>
  )
}

export default Profile
