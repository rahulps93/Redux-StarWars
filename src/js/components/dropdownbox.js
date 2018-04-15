import React,{ Component } from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import classNames from 'classnames';



export default class DropdownBox extends Component {
  constructor(props){
        
        super(props);
        this.state={
      
       planets:[]
        }
        this.getnewdata=this.getnewdata.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
              
    }

handleSelect(e)
{
  this.props.handleSelect(e.target.id);

}
componentWillReceiveProps(nextProps)
{
if(nextProps.data.length==0)
{
  this.setState({
  planets:[{name:'No Results',fontsize:15}]
  });
}
else
{
  const newdata=this.getnewdata(nextProps.data);
  this.setState({
planets:newdata
  });
  }

}
getnewdata(data)
    {
    
    let r=[];
  if(data.length>0){
  let populationarray = data.map(planet => parseInt(planet.population));
  let populationarraynew=populationarray.filter(Boolean);
  let maxpopulation=Math.max(...populationarraynew);
  let minpopulation=Math.min(...populationarraynew);;
  let minscale=10;
  let maxscale=50;
   r = data.map( x => {
  x.fontsize = ((parseInt(x.population) - minpopulation) / (maxpopulation - minpopulation)) * (maxscale - minscale) + minscale;
  return x
  });
}
return r;
}

 
  
   render() {
 

const containerdivclass = classNames({ 
hidden:!(this.props.isVisible),
visible:this.props.isVisible
});
    
      return (
    
    <div className={containerdivclass}>

  <ul className="list-group ulgroup">
{this.state.planets.map(({name,fontsize,...rest}) => {  
    return <li className="list-group-item cursor" style={{fontSize:fontsize}} onClick={this.handleSelect} id={name}>{name}</li>
    })}
  </ul>
       

</div>
  
      );
   
}

}

