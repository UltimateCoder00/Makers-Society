pragma solidity ^0.4.8;
import "./Society.sol";
/*contract tokenRecipient {
    event receivedEther(address sender, uint amount);
    event receivedTokens(address _from, uint256 _value, address _token, bytes _extraData);
    function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData){
        Token t = Token(_token);
        if (!t.transferFrom(_from, this, _value)) throw;
        receivedTokens(_from, _value, _token, _extraData);
    }
    function () payable {
        receivedEther(msg.sender, msg.value);
    }
}
contract Token {
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success);
}*/
/*contract Congress is owned, tokenRecipient {*/
contract Congress is Society {
    /* Contract Variables and events */
    uint public minimumQuorum;
    uint public debatingPeriodInMinutes;
    int public majorityMargin;
    Proposal[] public proposals;
    uint public numProposals;
    event ProposalAdded(uint proposalID, string description);
    /*event Voted(uint proposalID, bool position, address voter, string justification);
    event ProposalTallied(uint proposalID, int result, uint quorum, bool active);*/
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
        /*Vote[] votes;
        mapping (address => bool) voted;*/
    }
    /*struct Vote {
        bool inSupport;
        address voter;
        string justification;
    }*/
    /* First time setup */
    function Congress(
        uint minimumQuorumForProposals,
        uint minutesForDebate,
        int marginOfVotesForMajority, address congressLeader
    ) payable {
        changeVotingRules(minimumQuorumForProposals, minutesForDebate, marginOfVotesForMajority);
        if (congressLeader != 0) owner = congressLeader;
        // It’s necessary to add an empty first member
        addMember(0, '');
        // and let's add the founder, to save a step later
        addMember(owner, 'founder');
    }
    /*change rules*/
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
    /* Function to create a new proposal */
    function newProposal(string JobDescription)  onlyMembers  returns (uint proposalID) {
        proposalID = proposals.length++;
        Proposal p = proposals[proposalID];
        /*p.recipient = beneficiary;
        p.amount = etherAmount;*/
        p.description = JobDescription;
        /*p.proposalHash = sha3(beneficiary, etherAmount, transactionBytecode);*/
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

    /* function to check if a proposal code matches */
    /*function checkProposalCode(
        uint proposalNumber,
        address beneficiary,
        uint etherAmount,
        bytes transactionBytecode
    )
        constant
        returns (bool codeChecksOut)
    {
        Proposal p = proposals[proposalNumber];
        return p.proposalHash == sha3(beneficiary, etherAmount, transactionBytecode);
    }*/
    /*function vote(
        uint proposalNumber,
        bool supportsProposal,
        string justificationText
    )
        onlyMembers
        returns (uint voteID)
    {
        Proposal p = proposals[proposalNumber];         // Get the proposal
        if (p.voted[msg.sender] == true) throw;         // If has already voted, cancel
        p.voted[msg.sender] = true;                     // Set this voter as having voted
        p.numberOfVotes++;                              // Increase the number of votes
        if (supportsProposal) {                         // If they support the proposal
            p.currentResult++;                          // Increase score
        } else {                                        // If they don't
            p.currentResult--;                          // Decrease the score
        }
        // Create a log of this event
        Voted(proposalNumber,  supportsProposal, msg.sender, justificationText);
        return p.numberOfVotes;
    }*/
    /*function executeProposal(uint proposalNumber, bytes transactionBytecode) {
        Proposal p = proposals[proposalNumber];
        if (now < p.votingDeadline
            || p.executed
            || p.proposalHash != sha3(p.recipient, p.amount, transactionBytecode)
            || p.numberOfVotes < minimumQuorum)
            throw;
        if (p.currentResult > majorityMargin) {
            p.executed = true;
            p.proposalPassed = true;
        } else {
            p.proposalPassed = false;
        }
        ProposalTallied(proposalNumber, p.currentResult, p.numberOfVotes, p.proposalPassed);
    }*/
}
