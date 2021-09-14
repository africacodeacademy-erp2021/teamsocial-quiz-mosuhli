import React, { useState } from 'react';
//import './Form.css';
import FormSignup from './FormSignup';
import Category from '../components/Category'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>    

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Category /> 
        )}
        
      </div>
    </>

  );
};

export default Form;
