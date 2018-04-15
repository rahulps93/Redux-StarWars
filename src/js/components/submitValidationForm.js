import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Form,FormGroup,FormControl,Col,ControlLabel,Button,Grid,Row} from 'react-bootstrap';
import {getUserDetails} from '../utils/utils.js';
import { SubmissionError } from 'redux-form';

const submit= ({username,password})=>
{
 return getUserDetails(username).then(result=>
    {
      if (result.count==0)
      {
          throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' });
      }
        else if(password!=result.results[0].birth_year)
        {
          throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' });
        }
      
        else
        {
          let userfirstname=username.split(' ')[0];
          let url=`#/planets/${userfirstname}`;   
          window.location.href = url;
        }

    });
 {

 }
  
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
 <div>
    <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={4}>
        <FormControl {...input} type={type} placeholder={label}/>
          {touched && error && <span style={{color:'red'}}>{error}</span>}
      </Col>
      </div>

)

const SubmitValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <Form horizontal onSubmit={handleSubmit(submit)} role="form">
    <FormGroup controlId="username">      
      
       <Field name="username" type="text" component={renderField} label="Username"/>
      
    </FormGroup>

    <FormGroup controlId="password">
     
       <Field name="password" type="password" component={renderField} label="Password"/>
       
  
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit" disabled={submitting} >Sign in</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset} style={{marginLeft:'10px'}}>Clear Values</Button>
      </Col>
    </FormGroup>
     <div>
  <Grid>
    <Row className="show-grid">
    <Col xs={2} md={2}>
      </Col>
      <Col xs={6} md={6}>
     {error && <span style={{color:'red'}}><strong>{error}</strong></span>}
      </Col>
      </Row>
      </Grid>
   </div>
  </Form>
  )
}

export default reduxForm({
  form: 'submitValidation'  
})(SubmitValidationForm)