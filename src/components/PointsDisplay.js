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
      accountPoints: 'loading points...',
      transactionHistory: 'loading points...'
    };
  }

  loadPoints() {
    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const makersToken = contract(MakersTokenContract)
    makersToken.setProvider(provider)

    const web3RPC = new Web3(provider)

    var makersTokenInstance

      makersToken.deployed().then(function(instance) {
        makersTokenInstance = instance;
        return makersTokenInstance.getBalance.call()
      }).then(function(result) {
        return self.setState({ accountPoints: result.c[0] })
      })
    // })

    makersToken.deployed().then(function(instance) {
      makersTokenInstance = instance;
      debugger;
      var transferEventAll = makersTokenInstance.Tranfser({_sender: '0x6630A2Af9f49c14C6beDeac703eb56316bd0e950'}, {fromBlock: 0, toBlock: 'latest'});
      transferEventAll.watch(function(err, result) {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result.args);
      });
    }
  )};


  render() {
    this.loadPoints();
    return (
      <div>
        <h1>You have {this.state.accountPoints} MakerPoints!</h1>
        <h1>You have {this.state.transactionHistory} MakerPoints!</h1>
      </div>
    );
  }
}
