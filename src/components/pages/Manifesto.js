import React, { Component } from 'react'
import Web3 from 'web3'
import ManifestoText from '../ManifestoText';
import ManifestoAgreement from '../ManifestoAgreement';

import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import '../../App.css'

export default class Manifesto extends React.Component {
  render() {
    return (
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div className="main-block">
            <ManifestoText />
            <ManifestoAgreement />
            </div>
          </div>
        </div>
    );
  }
}
