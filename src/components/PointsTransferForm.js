import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'
import Button from './Button'
import Input from './Input'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class PointsTransferForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      value: '',
      accountNumber: 'null',
      transferAmount: 'null'
    };
    this.handleAccountChange = this.handleAccountChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAccountChange(event) {
    console.log(this.state.accountNumber);

    this.setState({accountNumber: event.target.value});
  }

  handleAmountChange(event) {
    console.log(this.state.transferAmount);

    this.setState({transferAmount: event.target.value});
  }

  handleSubmit(event) {

    var self = this;



    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const web3RPC = new Web3(provider)
    const contract = require('truffle-contract')

    const makersToken = contract(MakersTokenContract)
    makersToken.defaults({from: web3RPC.eth.accounts[0]})
    makersToken.setProvider(provider)

    var makersTokenInstance

    web3RPC.eth.getAccounts(function(error, accounts) {
      console.log(accounts);

      makersToken.deployed().then(function(instance) {
        makersTokenInstance = instance;
        return makersTokenInstance.transfer(self.state.accountNumber,self.state.transferAmount, {from: accounts[0]});
      }).then(function() {
        return console.log('yay');
      });
    });
  }

  render() {
    return (
      <form className='input-form' onSubmit={this.handleSubmit}>
        <Input
         hasLabel='true'
         name="accountNumber"
         placeholder='Recipient address'
         htmlFor='textInput'
         label='Address '
         required='true'
         type='text'

         value={this.state.value}
         onChange={this.handleAccountChange}
        />

        <Input
         hasLabel='true'
         placeholder='Enter amount'
         ref='transferAmount'
         htmlFor='textInput'
         label='Amount '
         required='true'
         type='number'
         name='amount'
         value={this.state.value}
         onChange={this.handleAmountChange}
        />

        <Button
          type='submit'
          value='submit'
          text='Make Transaction'
        />
      </form>
    );
  }
}
