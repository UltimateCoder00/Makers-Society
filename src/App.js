import React, { Component } from 'react'
import MakersTokenContract from '../build/contracts/MakersToken.json'
import Web3 from 'web3'
import Header from './components/Header';
import PointsDisplay from './components/PointsDisplay';


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

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <PointsDisplay />
              <h2>Show Your Appreciation and send some MKP to your friends!</h2>

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
