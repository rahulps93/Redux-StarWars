import React,{ Component } from 'react';
import {Panel,Grid,Row,Col} from 'react-bootstrap';
import classNames from 'classnames';



export default class PlanetCard extends Component {
  constructor(props){
        
        super(props);

              
    }
  
   render() {
   const {name,rotation_period,orbital_period,diameter,climate,gravity,terrain,surface_water,population}=this.props.data;

var containerdivclass = classNames({ 
hidden:!(this.props.isVisible),
visible:this.props.isVisible,
planetcard:true
});
    
      return (
    
    <div className={containerdivclass}>
 <Grid>
    <Row className="show-grid">
      <Col xs={12} md={12}>
  <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">{name}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
      <Grid>
       <Row className="show-grid">
      <Col xs={6} md={4}>
      Name:{name}
      </Col>
       <Col xs={6} md={4}>
      Rotation Period:{rotation_period}
      </Col>
       <Col xs={6} md={4}>
      Orbital Period:{orbital_period}
      </Col>
       </Row>
       <Row className="show-grid">
      <Col xs={6} md={4}>
      Diameter:{diameter}
      </Col>
       <Col xs={6} md={4}>
      Climate:{climate}
      </Col>
       <Col xs={6} md={4}>
      Gravity:{gravity}
      </Col>
       </Row>
        <Row className="show-grid">
      <Col xs={6} md={4}>
      Terrain:{terrain}
      </Col>
       <Col xs={6} md={4}>
      Surface Water:{surface_water}
      </Col>
       <Col xs={6} md={4}>
      Population:{population}
      </Col>
       </Row>
    </Grid>
      </Panel.Body>
    </Panel>
    </Col>
    </Row>
    </Grid>
       

</div>
  
      );
   
}

}

