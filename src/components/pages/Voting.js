import React, { Component } from 'react'
import MakersTokenContract from '../../../build/contracts/MakersToken.json'
import Web3 from 'web3'
import VotingProposalForm from '../VotingProposalForm';
import VoteList from '../VoteList';


import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import '../../App.css'

export default class Voting extends React.Component {
  render() {
    return (
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div>

            <VotingProposalForm />
            <h1>Voting</h1>
            <VoteList />
            </div>
          </div>
        </div>
    );
  }
}
