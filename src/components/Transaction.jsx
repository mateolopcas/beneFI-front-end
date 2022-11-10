import "./Transaction.css"



function Transaction(props) {
  let { data } = props
  let shortDate = data.sentOn.substring(0, 10)
  return (
    <tr className='transaction'>
      <td>${data.usdAmount}</td>
      <td>{data.currency}</td>
      <td>{data.from}</td>
      <td>{data.to}</td>
      <td>{shortDate}</td>
    </tr>
  )
}

export default Transaction
