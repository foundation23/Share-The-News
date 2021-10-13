import React from 'react';
import Navigation from './Navigation';
import nb from './Navbar.module.css'

const Navbar = () => {
    return <nav className={nb.Navbar}>
        <Navigation />

    </nav>
}


export default Navbar;