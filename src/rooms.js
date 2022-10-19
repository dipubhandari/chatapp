import { Avatar } from "@material-ui/core"
import "./rooms.css"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { NavLink, Link } from 'react-router-dom'
import Chatbar from "./chatbar"

const Rooms = (props) => {
  const [alluser, setaluser] = useState([{ sender: "sender", receiver: "receiver" }])
  const [chatters, setChats] = useState({ sender: localStorage.getItem("sender"), receiver: localStorage.getItem("receiver") })
  const [message, setMessages] = useState([])
  useEffect(() => {
    async function getUser() {
      const user = await axios.get('http://localhost:5000/users')
      setaluser(user.data)
    }
    getUser()
  }, [])
  const Location = useLocation()
  const senderUsername = localStorage.getItem("username")
  const path = Location.pathname.split('/')
  const pathLength = path.length;
  const getreceivername = path[pathLength - 1]
  localStorage.setItem("sender", senderUsername)
  localStorage.setItem("receiver", getreceivername)
  async function chatter() {
    setChats({ sender: senderUsername, receiver: getreceivername })
    console.log(chatters)
    await axios.post('http://localhost:5000/msg', chatters).then((user) => {
      console.log(message)
      setMessages([user.data])
    })
  }
  return <>
    {alluser.map((item, i) => {
      return <div key={i} onClick={chatter}><NavLink to={"/chat/" + item.username} key={item.id}>
        <div className="room" >
          <Avatar className="roomImg" />
          <div className="right">
            <span className="roomName">
              <span className="name">  {item.name}</span> &nbsp;  {" "}
              <br /> <span className="username">  @{item.username}</span> &nbsp;  {" "}
              <p className="onlineSymbol">✔</p>
            </span>
          </div>
        </div>
      </NavLink>
      </div>
    })}
  </>
}

export default Rooms