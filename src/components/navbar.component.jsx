import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.styles.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <Link className='text-link' to='/' className='logo-wrapper'>
                    <div className='logo'></div>  
                </Link>
                <div className='text-wrapper'>
                    <div className='about'>
                        <h1>
                            <Link className='text-link' to='/' >About</Link>
                        </h1>
                    </div>
                    <div className='contact'>
                        <h1>
                            <Link className='text-link' to='/contact'>Contact</Link>
                        </h1>
                    </div>
                    <div className='work'>
                        <h1>Work</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;