import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class NotesList extends Component {

  renderNotesList = () => {
    return this.props.notes.map((note, index) => 
    <div key={index}>
      <Panel>
        <Panel.Body>
          {note.beneficiary.first_name}: {note.date} {note.content}
          <Button className="pull-right">Add Note</Button>
        </Panel.Body>
      </Panel>
    </div>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        {this.renderNotesList()}
      </div>
    );
  }
}

export default NotesList;