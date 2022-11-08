import React from 'react'


import Transaction from '../../components/Transaction.jsx'

<<<<<<< HEAD
function Transactions({user}) {
  if (user.email.length > 0) {
    user.transactions.sort((a, b) => b.date - a.date)
  }
=======

function Transactions(props) {
  props.user.transactions.sort((a, b) => b.date - a.date)
>>>>>>> 6da678490655d29bd799408bc6baad01f47c8128

  return (
    <div className='transactions-screen'>
      <h2>Transaction History:</h2>
      <ul>
<<<<<<< HEAD
        {user.email.length > 0 &&
        user.transactions.map((transaction, index)=> {
          return (
=======
        {props.user &&
          props.user.transactions.map((transaction, index) => {
            return (
>>>>>>> 6da678490655d29bd799408bc6baad01f47c8128
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
