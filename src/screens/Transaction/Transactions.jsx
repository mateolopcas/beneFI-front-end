import React from 'react'


import Transaction from '../../components/Transaction.jsx'

function Transactions({user}) {
  if (user.email.length > 0) {
    user.transactions.sort((a, b) => b.date - a.date)
  }

  return (
    <div className='transactions-screen'>
      <h2>Transaction History:</h2>
      <ul>
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
      </ul>
    </div>
  )
}

export default Transactions
