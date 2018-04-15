import React,{ Component } from 'react';
import Topbar from './topbar.js';
import SearchBox from './searchbox.js';
import PlanetCard from './planetcard.js';
import {withRouter} from "react-router-dom";
import * as planetActions from '../actions/planetActions';
import {connect } from 'react-redux';




 class planet extends Component {
  constructor(props){
        
        super(props);
       
        this.handleSelect=this.handleSelect.bind(this);
        this.timerfunc=this.timerfunc.bind(this);
        this.logout=this.logout.bind(this) ;
        
              
    }
    componentWillMount() {
        this.timer = null;
    }


 componentDidMount()
    {
    this.timer= setInterval(() => {
    this.timerfunc();

  }, 1000);
    }

    componentWillUnmount()
    {
    clearInterval(this.timer);
    }
    timerfunc()
    {
    
    this.props.timerSet();
    if(this.props.timer==0)
    {
    this.props.timerReset();
    }
    }
 handleSelect(value)
 {
 if((this.props.match.params.user!='Luke')&&(this.props.counter==5)&&(this.props.timer>0))
 {
 alert("Only Luke has authority to make more than 15 searches in a minute!Seems the force is not strong with you,"+this.props.match.params.user);
 }
 else
 {
this.props.submitRequestforPlanet(value);
     
  }
  }
logout()
  {
 clearInterval(this.timer);
 this.props.clearstate();
 this.props.history.push('/login');
  }
  
   render() {
      let userprofilename=this.props.match.params.user;
      return (
    <div>
          <Topbar Isvisible={true}   username={userprofilename} logout={this.logout}/>
           <SearchBox username={userprofilename} handleSelect={this.handleSelect}/>
           <PlanetCard isVisible={this.props.isvisible} data={this.props.data}/>
     </div>

  
      );
   
}

}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.planet.data,
    isvisible:state.planet.isvisible,
    counter:state.planet.counter,
    timer:state.planet.timer
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitRequestforPlanet: (value) => dispatch(planetActions.submitRequestforPlanet(value)),
    timerSet: () => dispatch(planetActions.setTimer()),
    timerReset: () => dispatch(planetActions.resetTimer()),
    clearstate: () => dispatch(planetActions.clearstate())
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(planet));


