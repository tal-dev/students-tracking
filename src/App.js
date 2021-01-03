import {useState, useEffect} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { withRouter } from "react-router";

import './App.css';
import Login from './components/login/Login'
import Students from './components/students/Students'

const api = "https://rickandmortyapi.com/api/character"

function App(props) {

  const [students, setStudents] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [logged, setLogged] = useState(false)

  function setUser(userInfo) {
    setUserInfo(userInfo)
    setLogged(true)
  }

  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data => setStudents(data.results))
    .then(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      if(user) {
        setUserInfo(user)
        setLogged(true)
        console.log(props)
        props.history.push("students")
      }
    })
  }, [])

  function logout() {
    setLogged(false)
    localStorage.removeItem('user')
  }

  return (
    <div className="app">
      <div>
        {logged && <button className="logout" onClick={logout}>Logout</button>}
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/students">
            {!logged ? <Redirect to="/" /> : <Students students={students}/>}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
