import { combineReducers } from 'redux';
import NotesReducer from './reducer_notes';

export default combineReducers({
  notes: NotesReducer
});
