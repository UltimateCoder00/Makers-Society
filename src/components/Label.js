import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Label extends React.Component {
 render() {
  if (this.props.hasLabel === 'true') {
   return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
  }
 }
}
