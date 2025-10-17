import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogOutIcon from "/icons/logout.svg"

const LogOut = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate ("/login")
    }
  return (

    <button className='icon-btn' onClick={handleLogout}>
            <img src={LogOutIcon} alt='Logo'/>
    </button>
  )
}

export default LogOut