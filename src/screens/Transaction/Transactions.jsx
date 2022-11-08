import React from 'react'


import Transaction from '../../components/Transaction.jsx'


function Transactions(props) {
  props.user.transactions.sort((a, b) => b.date - a.date)

  return (
    <div className='transactions-screen'>
      <h2>Transaction History:</h2>
      <ul>
        {props.user &&
          props.user.transactions.map((transaction, index) => {
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
