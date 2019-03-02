import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNotes } from './actions/noteActions'
import NotesList from './components/NotesList'

class Notes extends Component {

  componentDidMount() {
    console.log('component did mount')
    this.props.fetchNotes()
  }

  render() {
    console.log(this.props.notes)
    return (
      <div className="container-fluid">
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {fetchNotes: () => dispatch(fetchNotes())}
}

function mapStateToProps(state){
  return {notes: state.notes.notes}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);