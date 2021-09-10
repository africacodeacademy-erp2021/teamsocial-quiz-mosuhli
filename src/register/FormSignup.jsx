import React, {useState, useEffect, ReactNode} from 'react';
import validate from './validateInfo';
import useForm from './useForm';

import '../App.css';

/* interface Props{
  submitForm: ReactNode,
} */

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  
   const click = () => {
    localStorage.setItem("nickname", values.username)
  }; 
  
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}  className='form' noValidate>
      <h1>Log in to ACA Team Social App</h1>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='pin'
            placeholder='Enter your game pin'
            value={values.pin}
            onChange={handleChange}
          />
          {errors.pin && <p>{errors.pin}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={click}>
          Sign up
        </button>
      </form>
      
    </div>
    
  );
};

export default FormSignup;
