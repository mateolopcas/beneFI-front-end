function Transaction (props) {
  let { data } = props
  return (
    <li className='transaction'>
    {data.usdAmount}  {data.currency}  {data.from}  {data.to}  {data.sentOn}
    </li>
  )
}

export default Transaction
