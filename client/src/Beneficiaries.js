import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBeneficiaries } from './actions/beneficiaryActions'
import BeneficiariesList from '../src/BeneficiariesList'

class Beneficiaries extends Component {

  componentDidMount() {
    console.log('component did mount')
    this.props.fetchBeneficiaries()
  }

  render() {
    console.log(this.props.beneficiaries)
    return (
      <div className="container-fluid">
        <BeneficiariesList beneficiaries={this.props.beneficiaries} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {fetchBeneficiaries: () => dispatch(fetchBeneficiaries())}
}

function mapStateToProps(state){
  return {beneficiaries: state.beneficiaries.beneficiaries}
}

export default connect(mapStateToProps, mapDispatchToProps)(Beneficiaries);