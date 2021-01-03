import React, { useState } from 'react'
import { withRouter } from "react-router";

import './Login.scss'

function Login(props) {
    const [userInfo, setUserInfo] = useState({
        username:"tal",
        password:"1"
    })
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function saveUsername(e) {
        setUsername(e.target.value)
    } 

    function savePassword(e) {
        setPassword(e.target.value)
    } 

    function signIn() {
        if(username === userInfo.username && password === userInfo.password) {
            localStorage.setItem('user', JSON.stringify(userInfo))
            props.setUser(userInfo)
            props.history.push("/students")
        }
    }

    return (
        <div className="log-container">
            <div className="login-container">
                <input type="text" placeholder="Username" autoFocus onChange={saveUsername} value={username}/>
                <input type="password" placeholder="Password" onChange={savePassword} value={password}/>
                <button type="submit" onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
}

const LoginWithRouter = withRouter(Login);
export default LoginWithRouter
