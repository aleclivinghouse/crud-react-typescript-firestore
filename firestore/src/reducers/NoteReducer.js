
import {ADD_NOTE, GET_NOTES, DELETE_NOTE} from '../actions/types';
const initialState = {
 notes: [],
};

export default (state=initialState, action) => {
  switch(action.type){
    case ADD_NOTE:
    return{
      ...state,
      notes:[action.payload, ...state.notes]
    }
    case GET_NOTES:
    return {
      notes: action.payload
    }
    case DELETE_NOTE:
    return {
      ...state,
      notes: state.notes.filter(note => note.id !== action.payload)
    }
    default:
      return state;
  }
};
