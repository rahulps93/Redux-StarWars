import React,{ Component } from 'react';
import UserDropdown from './userDropdown.js';
import {Navbar,Nav} from 'react-bootstrap';



export default class Topbar extends Component {
  constructor(props){
        
        super(props);
       

              
    }

 
  
   render() {
   
     let content;   
     if (this.props.Isvisible) {
      content =(
       <UserDropdown User={this.props.Isvisible} Username={this.props.username} logout={this.props.logout}/>
      );
    } else {
    content=(
    <div></div>
    );
    }
      return (
    
    <div>
<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">StarWars-Find your planet!</a>
      </Navbar.Brand>
    </Navbar.Header>
   
  
<Nav pullRight>
   {content}
    </Nav>

      </Navbar>
</div>
  
      );
   
}

}

