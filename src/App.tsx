//import React from 'react';
import * as React from 'react'
import { Component } from 'react';
import Form from './register/Forms'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { render } from 'react-dom';
 class App extends Component {
   render(){
    return (
      <div className="App">
        <Form/>
      </div>
    );

   }

  
}

export default App; 


