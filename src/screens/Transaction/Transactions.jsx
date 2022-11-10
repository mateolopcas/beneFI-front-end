import React from 'react'
import "./Transaction.css"


import Transaction from '../../components/Transaction.jsx'

function Transactions({user}) {
  if (user.transactions.length > 0) {
    user.transactions.sort((a, b) => b.date - a.date)
  }

  return (
    <div className='transactions-screen'>
      <space>&nbsp;</space>
      <h2>&nbsp; &nbsp;Transaction History:</h2>
      <p>&nbsp;</p>
      <table>
        <thead>
        <tr>
          <th>USD</th>
          <th>CRYPTO</th>
          <th>FROM</th>
          <th>TO</th>
          <th>SENT ON</th>
        </tr>
        </thead>
        <tbody>
        {user.transactions.length > 0 &&
        user.transactions.map((transaction, index)=> {
          return (
              <Transaction
                key={index}
                data={transaction}
              />
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
