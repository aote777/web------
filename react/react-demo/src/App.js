import React, { useState } from 'react'
import Child from './Child'
export default function App() {
  const [msg, setMsg] = useState('')
  const handleMsg = (msg) => {
    setMsg(msg)
  }
  return (
    <div className="App">
      <h1>父{msg}</h1>
      <Child onSend={handleMsg}/>
    </div>
  )
}
