import React, { Component } from 'react';

class BeneficiariesList extends Component {

  renderBeneficiariesList = () => {
    return this.props.beneficiaries.map((beneficiary, index) => 
    <div key={index}>Name: {beneficiary.first_name}</div>)
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