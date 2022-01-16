import React from 'react'
import './homepage.styles.css'
import insta from './insta.png'
import twitterLogo from './twitter-logo.png'

const HomePage = ({ name, proffesion}) => {
    return (
        <div className='HomePage'>
            <div className='element-wrapper'>
                <div className='name'>
                    <h1 className='my-name'> {name} </h1>
                    <h1 className='proffesion'> {proffesion} </h1>
                </div>
                <div className='lorem'>
                    <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Fugit incidunt debitis 
                    dolores, porro, rerum eos nostrum eius 
                    esse cupiditate expedita autem accusantium. 
                    Vitae, sunt? Itaque a perspiciatis tempora 
                    optio tempore.</p>
                </div>
                <div className='socialmedia'>
                    <div className='insta-wrapper'>
                        <img className='insta' src={insta} alt=""  />
                    </div>
                    <div className='twitter-wrapper'>
                        <img className="twitterlogo" src={twitterLogo} alt="" />
                    </div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;