import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Navigate from '../components/Navigate';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
  } from "react-router-dom"; 
import Category from '../components/Category';

type UserSubmitForm = {
    username: string;
  };


  const App: React.FC = () => {
    let history = useHistory();
    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<UserSubmitForm>({
      resolver: yupResolver(validationSchema)
    });
  
    const onSubmit = (data: UserSubmitForm) => {            
      console.log(JSON.stringify(data, null, 2));
    };
  
    return (
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
  
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              {...register('username')}
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            
          </div>
        </form>        
      </div>
    );
  };
  
  export default App;