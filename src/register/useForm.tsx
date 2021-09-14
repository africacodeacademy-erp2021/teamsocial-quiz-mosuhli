import { useState, useEffect } from 'react';



const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    pin: ''
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setErrors(validate(values));
    setIsSubmitting(true);  
    
  };
  

  useEffect( () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors, callback, isSubmitting]
  );

  return {  handleChange, handleSubmit, values,  errors}; 
};

export default useForm;
