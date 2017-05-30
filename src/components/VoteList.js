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
  PrintProposal(i) {
    var self = this;
      return (
        <div>
          <h1>Proposal ID: {self.state.ProposalArray[i]}</h1>
          <h1>Proposal Description: {self.state.ProposalArrayNames[i]}</h1>
        </div>
      )
  }

  voteIdList() {
    const listItem = this.state.ProposalArray
    const listItems = listItem.map((proposal) =>
      <li>{proposal}</li>
    )
    return (
      <ul>{listItems}</ul>
    )
  }
  voteNameList() {
    const listItem = this.state.ProposalArrayNames
    const listItems = listItem.map((proposal) =>
      <li>{proposal}</li>
    )
    return (
      <ul>{listItems}</ul>
    )
  }

  PrintProposalArray() {
    var self = this;
    for (var i = 0; i < self.state.NumberOfProposals; i++) {
        self.PrintProposal(i)
    }
  }




  render() {
    this.loadNumberOfProposals();
    this.PopulateVoteArray();
    return (
      <div className="proposal-list">
        <table>
          <td>
            Proposal ID
            {this.voteIdList()}
          </td>
          <td>
            Proposal Name
            {this.voteNameList()}
          </td>
        </table>
        <h1>There are currently {this.state.ProposalArray.length} proposals!</h1>
        <h1>Most recent proposal: {this.state.ProposalArrayNames[this.state.ProposalArray.length -1]}</h1>
      </div>
    );
  }
}
