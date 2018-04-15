export const planet = (state =[], action) => {
  switch (action.type) {
    case 'PLANET_REQUEST_SUCCESS':
      return Object.assign({}, state, {data:action.payload,isvisible:true,counter:state.counter+1});
       case 'SET_TIMER':
      return Object.assign({}, state, {timer:state.timer-1});
       case 'RESET_TIMER':
      return Object.assign({}, state, {timer:60,counter:0});
       case 'CLEAR_STATE':
      return Object.assign({}, state, {timer:60,counter:0,data:[],isvisible:false});
    default:
          return state;
  }
};
export const planet_searchbox = (state =[], action) => {
  switch (action.type) {
    case 'PLANET_REQUEST_SUCCESS_SEARCHBOX':
      return Object.assign({}, state, {data:action.payload,isvisible:true});
       case 'HANDLE_INPUT_SEARCHCHANGE':
      return Object.assign({}, state, {inputvalue:action.payload.value,isvisible:action.payload.isvisble});
       case 'CLEAR_STATE':
      return Object.assign({}, state, {inputvalue:'',isvisible:false,data:[]});

    default:
          return state;
  }
};


