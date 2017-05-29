import React, { Component } from 'react'
import CongressContract from '../../build/contracts/Congress.json'
import Web3 from 'web3'
import Button from './Button'
import Input from './Input'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class VotingProposalForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      beneficiary: 'null',
      etherAmount: 0,
      jobDescription: 'null'
    };
    this.handleBeneficiaryChange = this.handleBeneficiaryChange.bind(this);
    this.handleJobDescriptionChange = this.handleJobDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBeneficiaryChange(event) {
    console.log(this.state.beneficiary);

    this.setState({beneficiary: event.target.value});
  }

  handleJobDescriptionChange(event) {
    console.log(this.state.jobDescription);

    this.setState({jobDescription: event.target.value});
  }

  handleSubmit(event) {

    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')

    const contract = require('truffle-contract')
    const congress = contract(CongressContract)
    congress.setProvider(provider)

    const web3RPC = new Web3(provider)

    var congressInstance;

    web3RPC.eth.getAccounts(function(error, accounts) {
      console.log(accounts);

      congress.deployed().then(function(instance) {
        congressInstance = instance;

        return congressInstance.newProposal(self.state.jobDescription);
      }).then(function() {
        return console.log('done');
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <Input
         hasLabel='true'
         placeholder='Enter Proposal Here'
         htmlFor='textInput'
         label='Proposal '
         required='true'
         type='text'
         name='jobDescription'
         value={this.state.value}
         onChange={this.handleJobDescriptionChange}
        />

        <Button
          type='submit'
          value='submit'
          text='Submit Proposal'
        />
      </form>
    );
  }
}
