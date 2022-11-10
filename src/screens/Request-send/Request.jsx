import { useState, useEffect } from 'react'
import { createTransaction, linkProfile } from '../../services/transaction.js'
import { getUsers, getUser } from '../../services/user.js'
import { Link } from 'react-router-dom'
import "./Request.css"

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
    user.transactions.push(newTransaction)
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
      
      <button onClick={toggle}>Switch to
      {request === false && ` REQUEST`}
      {request === true && ` SEND`}
      </button>
      <h2>&nbsp;&nbsp;You're {request ? `REQUEST` : `SEND`}
      ING a transaction...</h2>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label1>&nbsp;&nbsp;To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label1>
          <input
            required
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
          />
          <div className="label-input">
            <label1>&nbsp;From:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label1>
            <input
              required
              type="text"
              name="from"
              value={form.from}
              onChange={handleChange}
            />
          </div>
          <div className="label-select">
            <label1>&nbsp;&nbsp;Currency:&nbsp;&nbsp; </label1>
            <select
            required
            name='currency'
            value={form.currency}
            onChange={handleChange}
            >
              <option value=''>select crypto</option>
              <option value='Bitcoin'>Bitcoin</option>
              <option value='Ethereum'>Ethereum</option>
              <option value='Binance'>Binance</option>
              <option value='Ada'>Ada</option>
            </select>
          </div>
          <div className="label-select">
            <label1>&nbsp;&nbsp;Amount:&nbsp;&nbsp;&nbsp;&nbsp; </label1>
            <select
            required
            name='usdAmount'
            value={form.usdAmount}
            onChange={handleChange}
            >
              <option value=''>select amount</option>
              <option value='25'>$25</option>               
              <option value='50'>$50</option>
              <option value='75'>$75</option>
              <option value='100'>$100</option>
            </select>
          </div>
        </div>
        <button type="submit">SEND</button>
      </form>
      <Link to='/'>
      
      </Link>
    </div>
  )
}

export default Request
