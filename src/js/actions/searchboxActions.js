import * as actionTypes from './actionTypes';


export const clearstate = () => {
  return {
    type: actionTypes.CLEAR_STATE
    
  }
};
export const planet_request_success_searchbox = (data) => {
  return {
    type: actionTypes.PLANET_REQUEST_SUCCESS_SEARCHBOX,
    payload:data,
  }
};
export const handleChangeinputSearchsetvalue = (value,isvisble) => {
   return (dispatch) => {
    if(value=="")
      isvisble=false;

    dispatch(handleChangeinputSearch(value,isvisble));
   }
 };


export const handleChangeinputSearch = (value,isvisble) => {
   
  return {
    type: actionTypes.HANDLE_INPUT_SEARCHCHANGE,
    payload:{
      value,
      isvisble
    },
  }
};


export const submitRequestforPlanet = (planet) => {
  return (dispatch) => {
    if(planet=="")
    {
dispatch(handleChangeinputSearch("",false));
    }
    else
    {
    return fetch('https://swapi.co/api/planets/?search='+planet)
      .then(results  =>  results.json())
     .then(json => {
         dispatch(planet_request_success_searchbox(json.results));
        })

      .catch(error => {
        throw(error);
      });
  };
}
};
