import React,{ Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import DropdownBox from './dropdownbox.js'
import * as searchboxActions from '../actions/searchboxActions';
import {connect } from 'react-redux';



const WAIT_INTERVAL=500;
 class SearchBox extends Component {
  constructor(props){
        
        super(props);
       
        this.handleChange=this.handleChange.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleKeyUp=this.handleKeyUp.bind(this);
        this.searchplanet=this.searchplanet.bind(this);
    }

  componentWillMount() {
        this.timer = null;
    }
    componentWillUnmount()
    {
    this.props.clearstate();
    }
    handleSelect(value)
    {
   
    this.props.handleChange(value,false);
    this.props.handleSelect(value);
    
    }
    handleKeyUp()
    {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.searchplanet, WAIT_INTERVAL);
    }
    handleChange(e)
    {  
     this.props.handleChange(e.target.value,this.props.isvisible);
    }
    searchplanet()
    {

    this.props.handleSubmit(this.props.inputvalue);
    }

    
 
  
   render() {
      
      return (
    <div>
    <Grid>
    <Row className="show-grid">
      <Col xs={12} md={12}>
      <input className="inputsearchbox" type="text" ref='planetname' onChange={this.handleChange} onKeyUp={this.handleKeyUp} placeholder="Search your star wars planet....." value={this.props.inputvalue}></input>
      </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={12} md={12}>
      <DropdownBox data={this.props.data} isVisible={this.props.isvisible} handleSelect={this.handleSelect}/>
      </Col>
      </Row>
      </Grid>
  </div>
      );
   
}
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.planet_searchbox.data,
    isvisible:state.planet_searchbox.isvisible,
    inputvalue:state.planet_searchbox.inputvalue
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (value) => dispatch(searchboxActions.submitRequestforPlanet(value)),
    handleChange: (value,isvisible) => dispatch(searchboxActions.handleChangeinputSearch(value,isvisible)),
     clearstate: () => dispatch(searchboxActions.clearstate())
  } 
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);




