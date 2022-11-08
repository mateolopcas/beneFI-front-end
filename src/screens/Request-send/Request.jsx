import { useState, useEffect } from 'react'

function Request() {
  const [request, setRequest] = useState(false)


  return (
    <div className={`send-screen ${request ? `request`: `send`}`}>
      <h1>hi</h1>
    </div>
  )
}

export default Request
