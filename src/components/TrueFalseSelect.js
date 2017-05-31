import React, { Component } from 'react'
import CongressContract from '../../build/contracts/Congress.json'
import Web3 from 'web3'
import Button from './Button'
import Input from './Input'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class TrueFalseSelect extends React.Component {

  render() {
    return (
          <select>
            <option value="true">For</option>
            <option value="false">Against</option>
          </select>
    );
  }
}
