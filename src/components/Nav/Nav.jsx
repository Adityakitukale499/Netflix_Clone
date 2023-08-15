import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [show , setShow] = useState(false)
    const NavBarVisibility =()=>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", NavBarVisibility);
        return()=>{
            window.removeEventListener("scroll",NavBarVisibility)
        }
    },[])
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <Link to="/">
            <img src="/netflixLogo.png" alt="Logo" className='nav-logo' />
        </Link>
        <img src="/Netflix-avatar.png" alt="avtar" className='nav-avatar' />
    </div>
  )
}

export default Nav