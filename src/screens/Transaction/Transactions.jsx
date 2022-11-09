import React from 'react'


import Transaction from '../../components/Transaction.jsx'

function Transactions({user}) {
  if (user.email.length > 0) {
    user.transactions.sort((a, b) => b.date - a.date)
  }

  return (
    <div className='transactions-screen'>
      <h2>Transaction History:</h2>
      <table>
        <tr>
          <th>USD</th>
          <th>Cryptocurrency</th>
          <th>From</th>
          <th>To</th>
          <th>Sent On</th>
        </tr>
        {user.email.length > 0 &&
        user.transactions.map((transaction, index)=> {
          return (
              <Transaction
                key={index}
                data={transaction}
              />
            )
          })
        }
      </table>
    </div>
  )
}

export default Transactions
