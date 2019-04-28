import  React, {Component} from 'react';
import { addNote } from './actions/noteAction';
import { connect } from 'react-redux';

class Form extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      note: ''
    };
  }


  onSubmit(e: any){
    e.preventDefault();
    let obj = {
      note: this.state.note
    };
    this.props.addNote(obj);
  }

  render(){
    return(
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
      <input
          name="note"
          placeholder="note"
          value={this.state.note}
          onChange={(e) => this.setState({note: e.target.value})}
        />
       <input type="submit"/>
      </form>
      </div>
    );
  }
}

interface IState {
  note: string
}

interface IProps{
  addNote: any
}

// const mapDispatchToProps = (dispatch: any) => ({
//   addNote: (note: any) => dispatch(addNote(note))
// })
export default connect(null, {addNote})(Form);
