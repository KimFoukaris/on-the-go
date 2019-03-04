import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class BeneficiariesList extends Component {

  renderBeneficiariesList = () => {
    return this.props.beneficiaries.map((beneficiary, index) => 
    <div key={index}>
      <Panel bsStyle="danger">
        <Panel.Heading>
          <Panel.Title>
            {beneficiary.first_name}  Gender: {beneficiary.gender}  Nationality: {beneficiary.nationality}
            <Button className="pull-right">Add Note</Button>
          </Panel.Title>
        </Panel.Heading>
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