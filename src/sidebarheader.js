import { Button, IconButton } from "@material-ui/core"
import { Chat, MoreVertOutlined, Refresh, Person } from "@material-ui/icons"
import "./sidebarheader.css"
import img from "./logo192.png"
import { useEffect } from 'react'
const Sidebarheader = () => {

  function logout() {
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    window.location.href = ("/login")
  }

  return <div className="leftheader">
    <Button onClick={logout}>Logout</Button>
    <IconButton>
      <Refresh />
    </IconButton>
    <IconButton>
      <Chat />
    </IconButton>
    <IconButton>
      <MoreVertOutlined />
    </IconButton>
  </div>
}

export default Sidebarheader