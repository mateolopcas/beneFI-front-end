import { useState } from 'react'
import { updateUser, deleteUser, getUser } from "../../services/user"
import { useNavigate } from "react-router-dom"
import ProfileData from '../../components/ProfileData'
import "./Profile.css"

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
      let updatedUser = await getUser(user._id)
      setUser(updatedUser)
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
          <label2>&nbsp;&nbsp;&nbsp;&nbsp;Email Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label2><input required
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          </div>
          <div>
          <label2>&nbsp;&nbsp;&nbsp;&nbsp;First Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label2><input required
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          /></div>
          <div>
          <label2>&nbsp;&nbsp;&nbsp;&nbsp;Last Name:&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label2><input required
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          /></div>
          <div><label2>&nbsp;&nbsp;&nbsp;&nbsp;Password: &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label2><input required
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
          /></div>
          <div><label2>&nbsp;&nbsp;&nbsp;&nbsp;Confirm Password:   &nbsp; </label2><input required
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          /></div>
          <div><label2>&nbsp;&nbsp;&nbsp;&nbsp;Avatar Image: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label2><input
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
