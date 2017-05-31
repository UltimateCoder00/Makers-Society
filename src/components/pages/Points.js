import React, { Component } from 'react'
import MakersTokenContract from '../../../build/contracts/MakersToken.json'
import Web3 from 'web3'
import PointsDisplay from '../PointsDisplay';
import PointsTransferForm from '../PointsTransferForm';

import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import '../../App.css'

export default class Points extends React.Component {
  render() {
    return (
        <div className="pure-g">
          <div className="pure-u-1-1">
          <div className="image-header">
            <img src="/IMG_1538.JPG" />
          </div>
            <div className="main-block">
            <PointsDisplay />
            <PointsTransferForm />
            <h2>Show Your Appreciation and send some MKP to your friends!</h2>
            </div>
          </div>
        </div>
    );
  }
}
