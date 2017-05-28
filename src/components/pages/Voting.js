import React, { Component } from 'react'
import MakersTokenContract from '../../../build/contracts/MakersToken.json'
import Web3 from 'web3'

import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import '../../App.css'

export default class Voting extends React.Component {
  render() {
    return (
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div>
            <h1>Show Your Appreciation and send some MKP to your friends!</h1>
            </div>
          </div>
        </div>
    );
  }
}
