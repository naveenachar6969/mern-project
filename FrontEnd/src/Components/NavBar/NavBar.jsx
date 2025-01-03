//rafce <-- to get basic structure 
import React, { useState,useContext} from 'react'
import './NavBar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, Navigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const NavBar = ({setShowLogin}) => {
    //const token=useContext(StoreContext).token
    const [menu,setMenu] = useState('home')
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const logout =()=>{
      localStorage.removeItem("token")
      setToken("")
      Navigate("/")
    }
  return (
    <div className='NavBar' >
        <Link to='/'><img className='logo' src={assets.logo} alt="Don't know"/></Link>
        <ul className="NavBar-menu">
            <Link to='/' className={menu === 'home'? 'active':''} onClick={()=>setMenu('home')}>Home</Link>
            <a href='#Explore-Menu ' className={menu === 'menu'? 'active':''} onClick={()=>setMenu('menu')}>Menu</a>
            <a href='#app-download' className={menu === 'mobile-app'? 'active':''} onClick={()=>setMenu('mobile-app')}>Mobile-app</a>
            <a href='#footer' className={menu === 'contact-us'? 'active':''} onClick={()=>setMenu('contact-us')}>Contact-us</a>
        </ul>
        <div className="NavBar-right">
            <img src={assets.search_icon} alt="Search" />
            <div className="NavBar-cart-icon">
              <Link to='/cart'>
                <img src={ assets.basket_icon} alt="basket" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div> 
            {  
            !token          
             ? <button onClick={() => setShowLogin(true)}>Sign in</button>
             : <div className="navbar-profile">
               <img src={assets.profile_icon} alt="bag"/>
               <ul className='nav-profile-dropdown'>


                 <li onClick={()=>Navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> Orders</li><hr />
                 <li onClick={logout}> <img src={assets.logout_icon} alt="" />Logout </li>
               </ul>
             </div>           
            }
        </div>
     </div>    
  )
}

export default NavBar