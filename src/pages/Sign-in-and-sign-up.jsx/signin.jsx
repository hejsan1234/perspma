import React, { useState } from 'react';
import { db } from '../../firebase/firebaseconfig.js';
import { collection, addDoc, getDocs } from "firebase/firestore";
import './signin.styles.css'

export const Signin = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const setData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: 'Björn',
        middlename: 'karl-håkan',
        lastname: 'sundlei',
        birth: 1903
      })
      console.log('Added someone on id', docRef.id)
    } catch (e){
      console.log('there was an error', e)
    }
  }

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    })
  }

  const getEmail = (e) => {
    setEmail(e.target.value)
  }

  const getName = (e) => {
    setName(e.target.value)
  }

  const getMessage = (e) => {
    setMessage(e.target.value)
  }

  const contactSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'emails'), {
        name: Name,
        email: Email,
        message: Message
      })
      console.log('added user and email with id of: ', docRef.id)
      setEmail('')
      setMessage('')
      setName('')
    } catch(err) {
      console.log('there was an error', err)
    }
  }

  return (
    <div className='contact-container'>
      <div className='title-container'>
        <div className='title-wrapper'> 
          <p className='contact-title'>CONTACT</p>
          <p className='title-message'>Let's get in touch</p>
        </div>
      </div>
        <div className="form-container">
          <form onSubmit={contactSubmit} className='form'>
            <div className='Name-input'>
              <p className='Name-title'>NAME</p>
              <input type="text" onChange={getName} value={Name} className='input-type-1'></input>
            </div>
            <div className='Email-input'>
              <p className='Email-title'>EMAIL</p>
              <input type="text" onChange={getEmail} value={Email} className='input-type-1'></input>
            </div>
            <div className='Message-input'>
              <p className='Message-title'>MESSAGE</p>
              <input type="text" onChange={getMessage} value={Message}></input>
            </div>
            <div>
              <input type="submit"></input>
            </div>
          </form>
        </div>
    </div>
  );
};

