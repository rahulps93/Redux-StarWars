
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/submitLogin.js';
import planet from './components/planetComp.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <div>

     
     <Route path="/login" component={LoginForm}/> 
      
     <Route path = "/planets/:user" component = {planet}/>


     </div>                                                                           
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
