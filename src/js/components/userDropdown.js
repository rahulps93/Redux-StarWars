import React,{ Component } from 'react';
import {NavDropdown ,MenuItem} from 'react-bootstrap'


 class UserDropdown extends Component {
  constructor(props){
        
        super(props);
             
    }
    
 
  render()
  {

  return (
    <NavDropdown  title={this.props.Username} pullRight id="split-button-pull-right">
      <MenuItem eventKey="1" onClick={this.props.logout}>Logout</MenuItem>
    </NavDropdown  >
  );
  
}
}
export default UserDropdown;
