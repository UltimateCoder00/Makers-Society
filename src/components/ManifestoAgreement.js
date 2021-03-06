import React from 'react'
import Web3 from 'web3'
import SocietyContract from '../../build/contracts/Society.json'
import Button from './Button'
import { Link } from 'react-router-dom'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class ManifestoAgreement extends React.Component {

  constructor() {
    super();
    this.state = {
      agrees: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {


    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')

    const contract = require('truffle-contract')
    const society = contract(SocietyContract)
    society.setProvider(provider)

    var societyInstance;

    society.deployed().then(function(instance) {
      societyInstance = instance;
      societyInstance.agreesToManifesto();
      return self.setState({ agrees: true })
    });

  }

  render() {

    return (
        <div>
          <form className="input-form" onSubmit={this.handleSubmit}>
            <Link to='/Points'><Button
              type='submit'
              value='submit'
              text='I Agree'
            /></Link>
          </form>
        </div>

    )
  }

}
