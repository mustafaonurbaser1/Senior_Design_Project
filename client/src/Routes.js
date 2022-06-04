import React, {useState} from 'react'
import {Route,Routes} from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { ListTodo } from './pages/ListTodo';
import { AddTodo } from './pages/AddTodo';
import ShowEvents from './pages/ShowEvents';
import Settings from './pages/Settings';
import { Login } from './Login and Register Pages/Login/Login';
import Register from './Login and Register Pages/Register/Register';
import { Layout } from './components/Layout';
export const RouteS = () => {

  const [isLogin,setIsLogin] = useState(true)

  
  return (
    
 
    <Routes>

        <Route exact path = "/" element = {<Login/>}></Route>
        <Route  path = "/Register" element = {<Register/>}></Route>
        
        
        {isLogin && <Route  path = "/HomePage" element = {<HomePage/>}></Route>}
        {isLogin &&<Route  path = "/listtodo" element = {<ListTodo/>}></Route>}
        {isLogin &&<Route  path = "/addtodo" element = {<AddTodo/>}></Route>}
        {isLogin &&<Route  path = "/showevents" element = {<ShowEvents/>}></Route>}
        {isLogin &&<Route  path = "/settings" element = {<Settings/>}></Route>}
        
        

    </Routes>
          
  
  )
}
