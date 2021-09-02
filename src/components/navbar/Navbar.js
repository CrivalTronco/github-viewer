import React from 'react'
import { Link } from 'react-router-dom';

// github icon
import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

//css file
import '../../App.css';

const Navbar = () => {

    const onClick = () => {
        const navElement = document.querySelector(".nav-links");
        navElement.classList.toggle('nav-active');
    }

    return (
        <nav className="navbar">
            <div className="content-center text-3xl">
                <AiFillGithub className="mx-2"/> GitHub Viewer
            </div>
            <ul className="nav-links text-xl">
                <li className="mx-4 hover:underline">
                    <Link to='/'>Home</Link>
                </li>
                <li className="mx-4 hover:underline md:mt-8">
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <button id="burger-btn" onClick={ onClick } className="rounded p-2 hidden hover:bg-gray-400 md:flex"><GiHamburgerMenu className="text-3xl cursor-pointer "/></button>
        </nav>
    )
}

export default Navbar
