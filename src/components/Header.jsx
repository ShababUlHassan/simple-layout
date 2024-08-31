import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="nav-wrapper bg-orange-300">
    <div className='header flex justify-between items-center w-[90%] mx-auto py-[12px]'>
        <div className="logo text-[30px]">
            Smart Web
        </div>
        <ul className='list-none flex gap-[18px] text-[18px] font-semibold'>
            <li>
                <NavLink to="/" className={({isActive}) => `text-white font-bold ${isActive ? "text-orange-600" : "text-white"}`}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => `text-white font-bold ${isActive ? "text-orange-600" : "text-white"}`}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={({isActive}) => `text-white font-bold ${isActive ? "text-orange-600" : "text-white"}`}>
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => `text-white font-bold ${isActive ? "text-orange-600" : "text-white"}`}>
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Header