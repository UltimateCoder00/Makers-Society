import React, { Component } from 'react'
import MakersTokenContract from '../../build/contracts/MakersToken.json'
import Web3 from 'web3'
import { Link } from 'react-router-dom'


import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'


export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/'>Home</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/Points'>MakerPoints</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/Voting'>Voting</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/Society'>State of Makers Society  </Link></li>
        </ul>
      </nav>
    );
  }
}
