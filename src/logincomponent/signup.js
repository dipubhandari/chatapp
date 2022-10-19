import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./login.css"
import { NavLink } from 'react-router-dom'

const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        password: "",
        year: "",
        month: "",
        day: ""
    })
    const [msg, setMsg] = useState("")
    function handleChange(e) {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }
    function formData(e) {
        e.preventDefault()
        const { name, username, password } = userData
        const signupPost = axios.post('http://localhost:5000/signup', userData).then((res) =>
            setMsg(res.data.message)
        )
    }
    return (<>

        <section class="container"> <br />
            <section class="content">
                <h1 class="login_title"><span>New Project</span> <span class="login_text"> Sign Up</span> </h1>
                <section>
                    <form action="" method="post" class="form_login" onSubmit={formData}>
                        <input type="text" name="name" value={userData.name} autoComplete="off" placeholder="Enter Full Name" onChange={handleChange} />
                        <input type="text" name="username" autoComplete='off' placeholder="Select Username" onChange={handleChange} />
                        <input type="text" name="password" autoComplete='off' placeholder="Enter Password" onChange={handleChange} />
                        <label for="age">Date Of Birth</label>
                        <br />
                        <span class="age">
                            <select name="year" onChange={handleChange}>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="20002">2002</option>
                                <option value="20003">2003</option>
                            </select>
                            <select name='month' onChange={handleChange}>
                                <option value="January">Jan</option>
                                <option value="febraury">feb</option>
                                <option value="March">Mar</option>
                                <option value="April">April</option>
                            </select>

                            <select name='day' onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="4">4</option>
                            </select>
                        </span>
                        <input class="login_btn" type="submit" value="Create" />
                        <span>{msg}</span>
                        <NavLink to="/login" class="login_text_signup">Login</NavLink>
                    </form>
                </section>
            </section>
        </section>


    </>
    )
}

export default Signup
