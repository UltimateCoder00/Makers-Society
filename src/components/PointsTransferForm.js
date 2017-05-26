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

  handleSubmit(event) {

    // const accountNumber = this.refs.accountNumber.value;
    // const transferAmount = this.refs.transferAmount.value;
    // console.log(accountNumber)
    // var self = this;
    //
    // const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    // const contract = require('truffle-contract')
    // const makersToken = contract(MakersTokenContract)
    // makersToken.setProvider(provider)
    //
    // const web3RPC = new Web3(provider)
    //
    // var makersTokenInstance
    //
    //   makersToken.deployed().then(function(instance) {
    //     makersTokenInstance = instance;
    //     console.log(self.refs.transferAmount.value);
    //     return makersTokenInstance.transfer(accountNumber,transferAmount);
    //   }).then(function() {
        console.log(this.refs.accountNumber.value)
        // return self.setState({ accountPoints: "Transaction successfull" })
      // })
    // })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Input
         hasLabel='true'
         placeholder='hiya'
         ref="accountNumber"
         htmlFor='textInput'
         label='Enter Address '
         required='true'
         type='text'
        />

        <Input
         hasLabel='true'
         placeholder='10'
         ref="transferAmount"
         htmlFor='textInput'
         label='Amount '
         required='true'
         type='number'
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
