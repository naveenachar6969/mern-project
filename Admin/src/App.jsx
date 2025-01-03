import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import {Routes, Route} from "react-router-dom"
import Add from './screens/Add/Add'
import List from './screens/List/List'  
import Order from './screens/Order/Order'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  const url = 'http://localhost:4000'
  return (
    <div className="app">
      <ToastContainer/>
      <NavBar/>
      <hr />
      <div className="app-component">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} ></Route>
          <Route path="/list" element={<List url={url}/>} ></Route>
          <Route path="/order" element={<Order url={url}/>} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
