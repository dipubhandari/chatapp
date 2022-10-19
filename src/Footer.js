import axios from 'axios'
import React from 'react'
import "./footer.css"
import { Location, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Footer = () => {
  const [message, setmsg] = React.useState("")
  const [sender, setSender] = React.useState("")
  const [receiverId, setReceiverId] = React.useState("")
  const [actualDataForBackend, setADFB] = React.useState([{}])
  const Location = useLocation();

  function chatData(e) {
    const senderUsername = localStorage.getItem("username")
    const senderName = localStorage.getItem("name")
    const path = Location.pathname.split('/')
    console.log(Location.pathname.split('/'))
    const pathLength = path.length;
    const getReceiverId = path[pathLength - 1]
    console.log("getReceiverId")
    console.log(getReceiverId)
    setReceiverId(getReceiverId)
    e.preventDefault()
    setADFB([{ message: message, receiverId: receiverId, senderName: senderName, senderUsername: senderUsername }])
    axios.post("http://localhost:5000/chat", actualDataForBackend[0]).then((res) => {
      const s = res.data
      console.log(s)
    })
  }
  return (
    <>
      <form action="" onSubmit={chatData} method="POST">
        <input type="text" placeholder="Type Message" name="message" className="msginput" onChange={(e) => setmsg(e.target.value)} />
        <input type="hidden" name="receiver_id" value={receiverId} />
        <input type="submit" className="sendBtn" value="Send ✔" />
      </form>

    </>
  )
}
export default Footer
