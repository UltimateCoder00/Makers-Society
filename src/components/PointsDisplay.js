import React from 'react'
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
    };
  }

  loadPoints() {
    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const makersToken = contract(MakersTokenContract)
    makersToken.setProvider(provider)

    var makersTokenInstance

      makersToken.deployed().then(function(instance) {
        makersTokenInstance = instance;
        return makersTokenInstance.getBalance.call()
      }).then(function(result) {
        return self.setState({ accountPoints: result.c[0] })
      });
    }


  render() {
    this.loadPoints();
    return (
      <div>
        <h1>You have {this.state.accountPoints} MakerPoints!</h1>
      </div>
    );
  }
}
