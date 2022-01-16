import React from 'react'
import './navbar.styles.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <div className='logo-wrapper'>
                    <div className='logo'></div>  
                </div>
                <div className='text-wrapper'>
                    <div className='about'>
                        <h1>About</h1>
                    </div>
                    <div className='contact'>
                        <h1>Contact</h1>
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