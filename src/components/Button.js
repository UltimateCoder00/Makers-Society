import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Button extends React.Component {

  render() {

    return (
      <fieldset>
         <button
          type = {this.props.type || 'button'}
          value = {this.props.value || null}
         >
         {this.props.text}
         </button>
       </fieldset>
    );
  }
}
