import * as firebase from 'firebase';
import 'firebase/firestore';
import {ADD_NOTE, GET_NOTES, DELETE_NOTE} from './types';


export const addNote = (values) => {
  return (dispatch) => {
    console.log('these are the values', values);
    const firestore = firebase.firestore();
    const notesRef = firestore.collection('notes');
    notesRef.add(values);
    dispatch({type: ADD_NOTE, payload: values});
  }
}


export const getNotes = () =>{
  return (dispatch) => {
    const firestore = firebase.firestore();
    const notesRef = firestore.collection('notes');
    notesRef.get().then((querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        let map = {};
        map.note = doc.data().note;
        map.id = doc.id;
        arr.push(map);
      });
      dispatch({type: GET_NOTES, payload: arr})
    })
  }
}

export const deleteNote = (id) =>{
  return (dispatch) => {
    const firestore = firebase.firestore();
    const notesRef = firestore.collection('notes').doc(id);
    notesRef.delete();
    dispatch({type: DELETE_NOTE, payload: id})
  }
}
