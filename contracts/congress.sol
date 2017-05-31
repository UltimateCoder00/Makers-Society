pragma solidity ^0.4.8;

import "./Society.sol";

/*Congress allows members to make and vote on proposals*/
contract Congress is Society {

    uint public minimumQuorum;
    uint public debatingPeriodInMinutes;
    int public majorityMargin;
    Proposal[] public proposals;
    uint public numProposals;
    event ProposalAdded(uint proposalID, string description);
    event Voted(uint proposalID, bool position, address voter, string justification);
    event ProposalTallied(uint proposalID, int result, uint quorum, bool active);
    event ChangeOfRules(uint minimumQuorum, uint debatingPeriodInMinutes, int majorityMargin);
    struct Proposal {
        address recipient;
        uint amount;
        string description;
        uint votingDeadline;
        bool executed;
        bool proposalPassed;
        uint numberOfVotes;
        int currentResult;
        bytes32 proposalHash;
        Vote[] votes;
        mapping (address => bool) voted;
    }

    struct Vote {
        bool inSupport;
        address voter;
        string justification;
    }

    function Congress(
        uint minimumQuorumForProposals,
        uint minutesForDebate,
        int marginOfVotesForMajority, address congressLeader
    ) payable {
        changeVotingRules(minimumQuorumForProposals, minutesForDebate, marginOfVotesForMajority);
        if (congressLeader != 0) owner = congressLeader;
        addMember(0, '');
        addMember(owner, 'founder');
    }

    function changeVotingRules(
        uint minimumQuorumForProposals,
        uint minutesForDebate,
        int marginOfVotesForMajority
    ) onlyOwner {
        minimumQuorum = minimumQuorumForProposals;
        debatingPeriodInMinutes = minutesForDebate;
        majorityMargin = marginOfVotesForMajority;
        ChangeOfRules(minimumQuorum, debatingPeriodInMinutes, majorityMargin);
    }

    function newProposal(string JobDescription)  onlyMembers  returns (uint proposalID) {
        proposalID = proposals.length++;
        Proposal p = proposals[proposalID];
        p.description = JobDescription;
        p.votingDeadline = now + debatingPeriodInMinutes * 1 minutes;
        p.executed = false;
        p.proposalPassed = false;
        p.numberOfVotes = 0;
        ProposalAdded(proposalID, JobDescription);
        numProposals = proposalID+1;
        return proposalID;
    }

    function getNumberOfProposals() returns (uint number) {
      return proposals.length;
    }

    function getProposal(uint proposalNumber) returns (string jobDescription) {
      Proposal currentProposal = proposals[proposalNumber];
      return currentProposal.description;
    }

    function getProposalVotes(uint proposalNumber) returns (uint totalVotes, int supportingVotes) {
      Proposal currentProposal = proposals[proposalNumber];
      return (currentProposal.numberOfVotes, currentProposal.currentResult);
    }

    function vote(
        uint proposalNumber,
        bool supportsProposal,
        string justificationText
    )
        onlyMembers
        returns (uint voteID)
    {
        Proposal currentProposal = proposals[proposalNumber];
        if (currentProposal.voted[msg.sender] == true) throw;
        currentProposal.voted[msg.sender] = true;
        currentProposal.numberOfVotes++;
        if (supportsProposal) {
            currentProposal.currentResult++;
        } else {
            currentProposal.currentResult--;
        }
        Voted(proposalNumber,  supportsProposal, msg.sender, justificationText);
        return currentProposal.numberOfVotes;
    }

    function executeProposal(uint proposalNumber) {
        Proposal currentProposal = proposals[proposalNumber];
        if (now < currentProposal.votingDeadline
            || currentProposal.executed
            || currentProposal.numberOfVotes < minimumQuorum)
            throw;
        if (currentProposal.currentResult > majorityMargin) {
            currentProposal.executed = true;
            currentProposal.proposalPassed = true;
        } else {
            currentProposal.proposalPassed = false;
        }
        ProposalTallied(proposalNumber, currentProposal.currentResult, currentProposal.numberOfVotes, currentProposal.proposalPassed);
    }
}
