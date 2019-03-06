import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class BeneficiariesList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }
  
  renderBeneficiariesList = () => {
    return this.props.beneficiaries.map((beneficiary, index) => 
    <div key={index}>
      <Panel >
        <Panel.Heading>
          <Panel.Title>
            {beneficiary.first_name}  Gender: {beneficiary.gender}  Nationality: {beneficiary.nationality}
            <Button className="pull-right">Add Note</Button>
          </Panel.Title>
          <Panel.Toggle componentClass="a"> Show/Unshow Notes</Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <ListGroup fill>
              {beneficiary.notes.map((note, index) =>
              <ListGroupItem>{note.date} {note.content}</ListGroupItem>)}
            </ListGroup>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    </div>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        {this.renderBeneficiariesList()}
      </div>
    );
  }
}

export default BeneficiariesList;