import React from 'react'
import Login from "./logincomponent/login"
import Signup from "./logincomponent/signup"
import MainChat from './main'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TramOutlined } from '@material-ui/icons'
import Chatbar from './chatbar'



const App = () => {
    // usestate for user is login in or not 
    const [login, setIt] = useState(true)
    const logged_id = useState("")

    const current_username = localStorage.getItem('username')
    const current_name = localStorage.getItem('name')
    useEffect(() => {
        if (current_username && current_name) {
            setIt(true)
        }
        else {
            setIt(false)
        }
    })


    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/chat/" element={(login == true) ? <MainChat /> : <Login />} />
                    <Route path="/chat/:id" element={(login == true) ? <MainChat/> : <Login />} />
                   
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App




