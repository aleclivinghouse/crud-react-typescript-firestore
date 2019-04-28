import React, {Component} from 'react';
import Form from './Form.tsx';
import NotesList from './NotesList.tsx'

class Main extends Component{
  render(){
    return(
      <div>
      <h1>Main Rendered</h1>
      <Form />
      <NotesList />
      </div>
    );
  }
}

export default Main;
