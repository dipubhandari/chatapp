import { useState, useEffect } from "react"
import "./chatbar.css"
import info from "./msgdata"
import axios from "axios"
import { useLocation } from "react-router-dom"
import Sidebar from "./sidebar"
import Rooms from "./rooms"

const Chatbar = (props) => {
    const [currentLogger, setCurrentLogger] = useState("")
    const [chatterData, setChatterData] = useState(
        {
            sender: localStorage.getItem("sender"),
            receiver: localStorage.getItem("receiver")
        })


    const [alluser, setaluser] = useState([{ sender: "sender", receiver: "receiver" }])
    const [chatters, setChats] = useState({ sender: localStorage.getItem("sender"), receiver: localStorage.getItem("receiver") })
    const [message, setMessages] = useState([])


    useEffect(() => {
        const sender = localStorage.getItem('sender')
        const receiver = localStorage.getItem('receiver')
        axios.post('http://localhost:5000/msg', chatters).then((user) => {
            setMessages(user.data)
        })
    }, [])


    return <div className="chatbar">
        {message.map((itm) => {
            return <div className={(itm.sender !== localStorage.getItem("receiver")) ? "messages receiver" : "messages sender"} key={itm._id} >
                <i className="sendername">{itm.sender}</i>
                <h4>{itm.message}</h4> <span>{itm.time}</span>
            </div >
        })}
    </div>
}

export default Chatbar
