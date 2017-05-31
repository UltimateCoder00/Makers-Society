import React from 'react'
import CongressContract from '../../build/contracts/Congress.json'
import Web3 from 'web3'
import Button from './Button'
import Input from './Input'
import TrueFalseSelect from './TrueFalseSelect'


import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class SubmitVoteForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      propId: 'null',
      decision: 'null'
    };
    this.handlePropIdChange = this.handlePropIdChange.bind(this);
    this.handleDecisionChange = this.handleDecisionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handlePropIdChange(event) {
    console.log(this.state.propId);

    this.setState({propId: event.target.value});
  }

  handleDecisionChange(event) {
    console.log(this.state.decision);

    this.setState({decision: event.target.value});
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
      <form className='input-form' onSubmit={this.handleSubmit}>

        <Input
         hasLabel='true'
         placeholder='Enter Proposal Number Here'
         htmlFor='textInput'
         label='Proposal Id'
         required='true'
         type='text'
         name='jobDescription'
         value={this.state.value}
         onChange={this.handlePropIdChange}
        />

        <TrueFalseSelect
          value={this.state.value}
          onSubmit={this.handleDecisionChange}
        />

        <Button
          type='submit'
          value='submit'
          text='Vote'
        />
      </form>
    );
  }
}
