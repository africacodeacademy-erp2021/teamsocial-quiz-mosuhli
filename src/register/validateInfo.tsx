export default function validateInfo(values) {
   let errors = {};
   
  
    if (!values.username.trim()) {
      errors["username"] = 'Username required';
    }else if (values.username.length < 2) {
      errors["username"]  = 'Username should not be less than two characters';
    }
    else if(values.username.length > 20){
      errors["username"]  = 'Username should not be more than 20 characters';
    }
    if (!values.pin) {
      errors["pin"] = 'game pin is required';
    }
  
    return errors;
  }
  