import React from 'react'
import "./login.css"
import Signup from './signup'
import { NavLink, useNavigate } from 'react-router-dom'
import MainChat from '../main'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Login = () => {
    const [msg, setMsg] = useState("")
    const redirect = useNavigate()
    const [currentUser, setUser] = useState("")
    const [loginData, setLoginData] = useState(
        {
            username: "",
            password: ""
        }
    )
    function handleLoginForm(e) {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    function getLoginData(e) {
        e.preventDefault()
        const { username, password } = loginData
        axios.post("http://localhost:5000/login", loginData).then((res) => {
            const userExist = res.data.user
            setMsg(res.data.message)
            if (userExist != undefined) {
                const curr = res.data.username
                console.log(userExist.name)
                setUser(res.data.user.name)
                console.log(currentUser);
                localStorage.setItem('id', userExist._id)
                localStorage.setItem('username', userExist.username)
                localStorage.setItem('name', userExist.name)
                window.location.href = ('/chat')
            }
            else {
                setMsg(res.data.message)
                redirect('/login')
            }
        })
    }

    return (<>
        <section className="container"> <br />
            <section className="content">
                <h1 className="login_title"><span>Dipu-Chat</span> <span className="login_text"> Login</span> </h1>
                <section>
                    <form method="post" className=" form_login" onSubmit={getLoginData}>

                        <input type="text" name="username" placeholder=" Enter Username" autoComplete='off' onChange={handleLoginForm} />
                        <input type="text" name="password" placeholder="Enter Password" autoComplete='off' onChange={handleLoginForm} />
                        <input className="login_btn" onClick={() => { }} type="submit" value="Login" />
                        <span className='msg'>{msg}</span>
                        <NavLink to="/signup" className="signup_text">Create</NavLink>
                    </form>
                </section>
            </section>
        </section>
    </>
    )
}

export default Login
