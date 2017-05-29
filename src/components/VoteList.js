import React, { Component } from 'react'
import CongressContract from '../../build/contracts/Congress.json'
import Web3 from 'web3'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class VoteList extends React.Component {

  constructor() {
    super();
    this.state = {
      NumberOfProposals: 0,
      ProposalArray: [],
      ProposalArrayNames: []
    };
  }

  loadNumberOfProposals() {
    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const congress = contract(CongressContract)
    congress.setProvider(provider);

    const web3RPC = new Web3(provider)

    var congressInstance;

    congress.deployed().then(function(instance) {
      congressInstance = instance;

      return congressInstance.getNumberOfProposals.call();
    }).then(function(result) {
      return self.setState({ NumberOfProposals: result.c[0] });
    });
  }

  PopulateVoteArray() {
    var self = this;
    for (var i = 0; i < self.state.NumberOfProposals; i++) {
      self.state.ProposalArray[i] = i + 1 ;
      this.getProposalName(i);
      debugger;
    }
  }

  getProposalName(proposalId) {
    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const congress = contract(CongressContract)
    congress.setProvider(provider);

    const web3RPC = new Web3(provider)

    var congressInstance;

    congress.deployed().then(function(instance) {
      congressInstance = instance;
      return congressInstance.getProposal.call(proposalId);
    }).then(function(result) {
      self.state.ProposalArrayNames[proposalId] = result;
      return self.state.ProposalArrayNames;
    });
  }



  // loadVotes() {
  //   var self = this;
  //
  //   const provider = new Web3.providers.HttpProvider('http://localhost:8545')
  //   const contract = require('truffle-contract')
  //   const congress = contract(CongressContract)
  //   congress.setProvider(provider)
  //
  //   const web3RPC = new Web3(provider)
  //
  //   var congressInstance
  //
  //
  //   congress.deployed().then(function(instance) {
  //     congressInstance = instance;
  //
  //     return congressInstance.getNumberOfProposals();
  //   }).then(function(result) {
  //     return self.setState({ NumberOfProposals: result.c[0] })
  //   });
  // });
  //
  //     congress.deployed().then(function(instance) {
  //       makersTokenInstance = instance;
  //       return congressInstance.getBalance.call()
  //     }).then(function(result) {
  //       return self.setState({ accountPoints: result.c[0] })
  //     });
  //   }
  //
  //   makersToken.deployed().then(function(instance) {
  //     makersTokenInstance = instance;
  //     debugger;
  //     var transferEventAll = makersTokenInstance.Transfer({_sender: '0x6630A2Af9f49c14C6beDeac703eb56316bd0e950'}, {fromBlock: 0, toBlock: 'latest'});
  //     transferEventAll.watch(function(err, result) {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       console.log(result.args);
  //     });
  //   }
  // )};
  PrintProposalArray() {
    var self = this;
    for (var i = 1; i < self.state.NumberOfProposals + 1; i++) {
      self.state.ProposalArray[i - 1] = i ;
      this.getProposalName(i);
    }

  }


  render() {
    this.loadNumberOfProposals();
    this.PopulateVoteArray();
    return (
      <div>

        <h1>You {this.state.ProposalArray} MakerPoints!</h1>
        <h1>You {this.state.ProposalArrayNames} MakerPoints!</h1>
      </div>
    );
  }
}
