import React, { Component } from 'react'
import Web3 from 'web3'
import SocietyContract from '../../build/contracts/Society.json'
import Button from './Button'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class ManifestoAgreement extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  handleSubmit(event) {

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')

    const contract = require('truffle-contract')
    const society = contract(SocietyContract)
    society.setProvider(provider)

    const web3RPC = new Web3(provider)

    var societyInstance;

    var currentUserAddress = web3RPC.eth.accounts[0];

    society.deployed().then(function(instance) {
      societyInstance = instance;
      societyInstance.agreesToManifesto(currentUserAddress);
      console.log("Member agrees!");
      var agrees = societyInstance.getManifestoStatus.call(currentUserAddress);
      console.log(agrees);
    });

  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>
        <Button
          type='submit'
          value='submit'
          text='I Agree'
        />
      </form>
    )
  }

}
