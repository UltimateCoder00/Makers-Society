import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
// import PointsTransferForm from './components/PointsTransferForm';



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
