export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }else if (values.username.length < 2) {
      errors.username = 'Username should not be less than two character';
    }
    if (!values.pin) {
      errors.pin = 'game pin is required';
    }
  
    return errors;
  }
  