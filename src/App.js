import React, { Component } from 'react'
import MakersTokenContract from '../build/contracts/MakersToken.json'
import Web3 from 'web3'
import Header from './components/Header';
import Main from './components/Main';
// import PointsTransferForm from './components/PointsTransferForm';


import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App
