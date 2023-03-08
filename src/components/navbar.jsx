import React from 'react'

const Navbar = () => {
    return (
    <header className='header'>
        <a href="#">
                <img src="../images/logo.png" alt="kitty board logo" className="logo"/>
        </a>

        <nav className="main-nav">
            <ul className="nav-list">
                <li><a className='nav-link' href="#">Home</a></li>
                <li><a className='nav-link' href="#all-products">All Products</a></li>
                <li><a className='nav-link' href="#contact">Contact Us</a></li>
                <li><a className='nav-link' href="#discord">Discord Server</a></li>
                <li><a className='nav-link' href="#updates">Updates</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar