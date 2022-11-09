import { useState, useEffect } from 'react'
import { createTransaction, linkProfile} from '../../services/transaction.js'
import { getUsers } from '../../services/user.js'
import { Link } from 'react-router-dom'

function Request({user}) {
  const [request, setRequest] = useState(false)
  const [form, setForm] = useState({
    to: '',
    from: '',
    currency: '',
    usdAmount: ''
  })

  useEffect(()=> {
    if (request) {
      setForm({
        to: user.email,
        from: '',
        currency: form.currency,
        usdAmount: form.usdAmount
      })
    } else {
      setForm({
        from: user.email,
        to: '',
        currency: form.currency,
        usdAmount: form.usdAmount
      })
    }
  }, [request])

  const toggle = () => {
    setRequest(!request)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    form.sentOn = new Date()
    let newTransaction = await createTransaction(form)
    let users = await getUsers()
    users.forEach((user) => {
      if (user.email === newTransaction.to) {
        linkProfile(user._id, newTransaction._id)
      }
      if (user.email === newTransaction.from) {
        linkProfile(user._id, newTransaction._id)
      }
    })
    if (!request) {
      alert(`Transaction sent!`)
      setForm({
        to: '',
        from: user.email,
        currency: '',
        usdAmount: ''
      })
    } else {
      alert(`Request sent!`)
      setForm({
        to: user.email,
        from: '',
        currency: '',
        usdAmount: ''
      })
    }
  }


  return (
    <div className={`send-screen ${request ? `request`: `send`}`}>
      <h1>Send or Request a Transaction</h1>
      <button onClick={toggle}>Switch to
      {request === false && ` request`}
      {request === true && ` send`}
      </button>
      <h2>You are currently {request ? `request` : `send`}
      ing a transaction.</h2>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label>To:</label>
          <input
            required
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
          />
          <div className="label-input">
            <label>From:</label>
            <input
              required
              type="text"
              name="from"
              value={form.from}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>Currency:</label>
            <input
              required
              type="text"
              name="currency"
              value={form.currency}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label>USD Amount: </label>
            <input
              required
              type="text"
              name="usdAmount"
              value={form.usdAmount}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
      <Link to='/'>
      <button>Home</button>
      </Link>
    </div>
  )
}

export default Request
