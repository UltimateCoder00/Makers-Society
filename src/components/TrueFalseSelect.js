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
  // constructor(props) {
  //   super(props);
  //   this.state = {value: 'coconut'};
  //
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  //
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }
  //
  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }
  // value={this.state.value}

  render() {
    return (
          <select>
            <option value="true">For</option>
            <option value="false">Against</option>
          </select>
    );
  }
}
