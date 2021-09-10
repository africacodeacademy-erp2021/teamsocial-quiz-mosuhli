import { useState, useEffect } from 'react';
import axios from "axios";
import { render } from '@testing-library/react';



const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    pin: Number
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStoring, setIsStoring] = useState(false);

  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    

    setErrors(validate(values));
    setIsSubmitting(true);  
    setIsStoring(true); 
    
  };
  

  useEffect( () => {
      if (Object.keys(errors).length === 0 && isSubmitting && isStoring) {
        callback();
      }
    },
    [errors]
  );

  return {  handleChange, handleSubmit, values, errors,  };
};

export default useForm;
