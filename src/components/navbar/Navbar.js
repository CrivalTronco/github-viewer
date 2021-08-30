import React from 'react'
import { Link } from 'react-router-dom';

// github icon
import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
asdasd
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="content-center text-3xl">
                <AiFillGithub className="mx-2"/> GitHub Viewer
            </div>
            <ul className="nav-links text-2xl hidden md:flex">
                <li className="mx-4 hover:underline">
                    <Link to='/'>Home</Link>
                </li>
                <li className="mx-4 hover:underline">
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <button className="rounded p-2 md:hidden hover:bg-gray-400"><GiHamburgerMenu className="text-3xl cursor-pointer "/></button>
        </nav>
    )
}

export default Navbar
