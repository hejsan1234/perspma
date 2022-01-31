import React, { useState } from 'react';
import { db } from '../../firebase/firebaseconfig.js';
import { collection, addDoc, getDocs } from "firebase/firestore";
import './signin.styles.css'

import swal from 'sweetalert'

export const Signin = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const [loader, setloader] = useState(false);

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
    if (Name === '' || Email === '' || Message === '') {
      setloader(true)
      swal("You can't leave any fields empty", '', 'warning')
      setloader(true)
    } else {
      setloader(true)
      try {
        const docRef = await addDoc(collection(db, 'emails'), {
          name: Name,
          email: Email,
          message: Message
        })
        .then(() => {
          setloader(false);
          swal("Your message has been submitted", '', 'success')
        })
      } catch(err) {
        swal("There has been an error", err.message, 'warning')
        setloader(true)
      }

      setEmail('')
      setMessage('')
      setName('')
    }
  }

  return (
      <div className="form-container">
        <form onSubmit={contactSubmit} className='container'>
          <div className='contact-box'>
            <div className="right">
              <h2>Contact Me</h2>
              <input type="text" className='field' placeholder='Name' value={Name} onChange={getName} />
              <input type="text" className='field' placeholder='Email' value={Email} onChange={getEmail} />
              <textarea className='field' placeholder='Message' value={Message} onChange={getMessage}></textarea>
              <input type="submit" value='Submit' className='submit' />
            </div>
          </div>
        </form>
      </div>
  );
};

