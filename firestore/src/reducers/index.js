
import {combineReducers} from 'redux';
import NoteReducer from './NoteReducer';

export default combineReducers({
  note: NoteReducer
})
