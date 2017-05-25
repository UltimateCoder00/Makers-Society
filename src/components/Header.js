import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'


export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">MakerPoint</a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">My Points</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Voting</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">State of Makers Society</a></li>
            </ul>
      </nav>
    );
  }
}
