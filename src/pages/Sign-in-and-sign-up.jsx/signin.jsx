import React, { useState } from 'react';
import { db } from '../../firebase/firebaseconfig.js';
import { collection, addDoc, getDocs } from "firebase/firestore";


export const Signin = () => {

  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Message, setMessage] = useState(null);

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
    } catch(err) {
      console.log('there was an error', err)
    }
  }

  return (
    <div>
        <form onSubmit={contactSubmit}>
          <div>
            <input type="text" onChange={getName} ></input>
          </div>
          <div>
            <input type="text" onChange={getEmail} ></input>
          </div>
          <div>
            <input type="text" onChange={getMessage} ></input>
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </form>
    </div>
  );
};

