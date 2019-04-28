import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getNotes, deleteNote} from './actions/noteAction';

interface INote{
  note: string,
  id: string
}
class NotesList extends Component<IProps, any>{
  componentWillMount(){
    this.props.getNotes();
  }

  onDelete(id: string){
    console.log('ondelete fired');
    console.log(id);
    this.props.deleteNote(id)
  }

  render(){
    console.log(this.props.notes);
      let notes = this.props.notes;
    return(
      <div>
      <ul>
        {notes.map((note: any) => {
          return (
            <div>
              <li>{note.note}</li>
              <li>{note.id}</li>
              <button onClick={() =>this.onDelete(note.id)}></button>
            </div>
          );
        })}
      </ul>
      </div>
    );
  }
}

interface IProps{
  getNotes: any,
  deleteNote: any,
  notes: Array<string>
}

const mapStateToProps = (state: any) => {
  return {
    notes: state.note.notes
  }
}

export default connect(mapStateToProps, {getNotes, deleteNote})(NotesList);
