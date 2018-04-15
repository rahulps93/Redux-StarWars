import React,{ Component } from 'react';
import {Form,FormGroup,FormControl,Col,ControlLabel,Button,Grid,Row} from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import classNames from 'classnames';

import {connect } from 'react-redux';
import Topbar from './topbar.js';
import SubmitValidationForm from './submitValidationForm.js';



 export default class LoginForm extends Component {
  constructor(props){
        
        super(props);
         
    }


   render() {
 
      return (
      <div>
      <Topbar Isvisible={false}   username=''/>
      <SubmitValidationForm />    
    </div>

);  
}   
}



