import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class PointsDisplay extends React.Component {

  constructor() {
    super();
    this.state = {
      accountPoints: 'loading points...'
    };
  }

  loadPoints() {
    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const makersToken = contract(MakersTokenContract)
    makersToken.setProvider(provider)

    // Get Web3 so we can get our accounts.
    const web3RPC = new Web3(provider)

    // Declaring this for later so we can chain functions on MakersToken.
    var makersTokenInstance

    // // Get accounts.
    // web3RPC.eth.getAccounts(function(error, accounts) {
    //   // console.log(accounts)

      makersToken.deployed().then(function(instance) {
        makersTokenInstance = instance;
        return makersTokenInstance.getBalance.call()
      }).then(function(result) {
        return self.setState({ accountPoints: result.c[0] })
      })
    // })
  }

  render() {
    this.loadPoints();
    return (
      <div>
        <p>You have {this.state.accountPoints} MakerPoints!</p>
      </div>
    );
  }
}
