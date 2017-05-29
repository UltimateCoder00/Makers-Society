import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'
import Points from './pages/Points';
import Voting from './pages/Voting';

import { Switch, Route } from 'react-router-dom'


import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Main extends React.Component {
  render() {
    return (
      <main className="container">
          <Switch>
            <Route exact path='/' component={Points}/>
            <Route path='/Voting' component={Voting}/>
            <Route path='/Points' component={Points}/>
          </Switch>
      </main>
    );
  }
}
