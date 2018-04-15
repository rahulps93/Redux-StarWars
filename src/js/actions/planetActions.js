import * as actionTypes from './actionTypes';



const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

// export const createBook = (book) => {
//   return {
//     type: actionTypes.CREATE_BOOK,
//     book
//   }
// };
export const clearstate = () => {
  return {
    type: actionTypes.CLEAR_STATE
    
  }
};
export const planet_request_success = (data) => {
  return {
    type: actionTypes.PLANET_REQUEST_SUCCESS,
    payload:data,
  }
};
export const planet_request_failure = () => {
  return {
    type: actionTypes.LOGIN_AUTHENTICATION_FAILURE,
    
  }
};

export const setTimer = () => {
  return {
    type: actionTypes.SET_TIMER
    
  }
};
export const resetTimer = () => {
  return {
    type: actionTypes.RESET_TIMER
    
  }
};
export const submitRequestforPlanet = (planet) => {
  return (dispatch) => {
    return fetch('https://swapi.co/api/planets/?search='+planet)
      .then(results  =>  results.json())
      .then(json => {
         dispatch(planet_request_success(json.results[0]))
        })

      .catch(error => {
        throw(error);
      });
  };
};
