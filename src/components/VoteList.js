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
      ProposalArrayNames: [],
      ProposalArrayTotalVotes: [],
      ProposalArrayVotesFor: []
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
      this.getProposalVotes(i);
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

  getProposalVotes(proposalId) {
    var self = this;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const congress = contract(CongressContract)
    congress.setProvider(provider);

    const web3RPC = new Web3(provider)

    var congressInstance;

    congress.deployed().then(function(instance) {
      congressInstance = instance;
      return congressInstance.getProposalVotes.call(proposalId);
    }).then(function(result) {
      debugger;
      self.state.ProposalArrayTotalVotes[proposalId] = result[0].c;
      self.state.ProposalArrayVotesFor[proposalId] = result[1].c;
      return self.state.ProposalsArrayVotesFor;
    });
  }

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

  TotalVotesList() {
    const listItem = this.state.ProposalArrayTotalVotes
    const listItems = listItem.map((proposal) =>
      <li>{proposal}</li>
    )
    return (
      <ul>{listItems}</ul>
    )
  }

  ForVotesList() {
    const listItem = this.state.ProposalArrayVotesFor
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
    this.getProposalVotes(0);
    this.loadNumberOfProposals();
    this.PopulateVoteArray();
    return (
      <div className="main-block">
        <table className="proposal-list">
          <tr>
           <th id="id-number">Id Number</th>
           <th id="vote">Vote</th>
           <th id="total-votes">Total Votes</th>
           <th id="votes-for">Votes For</th>
          </tr>
          <td>
            {this.voteIdList()}
          </td>
          <td>
            {this.voteNameList()}
          </td>
          <td >
            {this.TotalVotesList()}
          </td>
          <td>
            {this.ForVotesList()}
          </td>
        </table>
        <h1>There are currently {this.state.ProposalArray.length} proposals!</h1>
        <h1>Most recent proposal: {this.state.ProposalArrayNames[this.state.ProposalArray.length -1]}</h1>
      </div>
    );
  }
}
