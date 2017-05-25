var Congress = artifacts.require("./Congress.sol");

contract("Congress", function(accounts) {
  it("should be able to create a proposal", function(){
    var congress;
    var account_one = accounts[0];
    var proposal;
    var check_out;
    return Congress.deployed().then(function(instance) {
      congress = instance;
      return congress.newProposal(account_one, 2, "dummyproposal", 1234, {from: account_one})
      .then(function(){
        return congress.checkProposalCode.call(0, account_one, 2, 1234);
      }).then(function(checkout) {
        check_out = checkout;
        assert.equal(check_out, true, "Proposal should check out");
      });
    });
  });

  it("Should add a member", function() {
    var congress;
    var account_one = accounts[0];
    var account_two = accounts[1];
    var loggedEvent;
    return Congress.deployed().then(function(instance) {
      congress = instance;
      return congress.addMember(account_two, "Steph")
    }).then(function(result){
        loggedEvent = result.logs[0].event;
        assert.equal(loggedEvent, "MembershipChanged", "Should return membership event")
      });
    });

    it("Should remove a member", function() {
      var congress;
      var account_one = accounts[0];
      var account_two = accounts[1];
      var loggedEvent;
      return Congress.deployed().then(function(instance) {
        congress = instance;
        return congress.removeMember(account_two)
      }).then(function(result){
          loggedEvent = result.logs[0].event;
          assert.equal(loggedEvent, "MembershipChanged", "Should return membership event")
        });
      });


    it("Should change the voting rules", function() {
      var congress;
      var account_one = accounts[0];
      var account_two = accounts[1];
      var loggedEvent;
      var minimumQuorum;
      var debatingPeriodInMinutes;
      var majorityMargin;

      return Congress.deployed().then(function(instance) {
        congress = instance;
        return congress.changeVotingRules(1, 1, 1);
      }).then(function(result){
          loggedEvent = result.logs[0].event;

          minimumQuorum = result.logs[0].args.minimumQuorum.valueOf();
          debatingPeriodInMinutes = result.logs[0].args.debatingPeriodInMinutes.valueOf();
          majorityMargin = result.logs[0].args.majorityMargin.valueOf();

          assert.equal(loggedEvent, "ChangeOfRules", "Should return change of rules event")
          assert.equal(minimumQuorum, 1, "Should change the minimum quorum to 10")
          assert.equal(debatingPeriodInMinutes, 1, "Should change the debating period to 20")
          assert.equal(majorityMargin, 1, "Should change the majority margin to 30")
        });
      });

      it("Should enable voting on a proposal", function() {
        var account_one = accounts[0];
        var congress;
        var loggedEvent;
        var proposalID;
        var position;
        var voter;
        var justification;
        return Congress.deployed().then(function(instance) {
          congress = instance;
          //This refers to the proposal created in the first test
          return congress.vote(0, true, "It's awesome");
        }).then(function(result){
            loggedEvent = result.logs[0].event;
            proposalID = result.logs[0].args.proposalID.valueOf();
            position = result.logs[0].args.position.valueOf();
            voter = result.logs[0].args.voter.valueOf();
            justification = result.logs[0].args.justification.valueOf();
            assert.equal(loggedEvent, "Voted", "Should indicate a vote has been cast")
            assert.equal(proposalID, 0, "Should return proposal ID")
            assert.equal(position, true, "Should indicate position of voter is true")
            assert.equal(voter, account_one, "Should return voter account")
            assert.equal(justification, "It's awesome", "Should indicate proposal is awesome")

          });
        });

  });
