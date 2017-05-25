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
    var event;
    return Congress.deployed().then(function(instance) {
      congress = instance;
      return congress.addMember(account_two, "Steph")
    }).then(function(result){
        event = result.logs[0].event;
        assert.equal(event, "MembershipChanged", "Should return membership event")
      });
    });

    it("Should remove a member", function() {
      var congress;
      var account_one = accounts[0];
      var account_two = accounts[1];
      var event;
      return Congress.deployed().then(function(instance) {
        congress = instance;
        return congress.removeMember(account_two)
      }).then(function(result){
          event = result.logs[0].event;
          assert.equal(event, "MembershipChanged", "Should return membership event")
        });
      });


    it("Should change the voting rules", function() {
      var congress;
      var account_one = accounts[0];x
      var account_two = accounts[1];
      var event;
      var minimumQuorum;
      var debatingPeriodInMinutes;
      var majorityMargin;

      return Congress.deployed().then(function(instance) {
        congress = instance;
        return congress.changeVotingRules(10, 20, 30);
      }).then(function(result){
          event = result.logs[0].event;

          minimumQuorum = result.logs[0].args.minimumQuorum.valueOf();
          debatingPeriodInMinutes = result.logs[0].args.debatingPeriodInMinutes.valueOf();
          majorityMargin = result.logs[0].args.majorityMargin.valueOf();

          assert.equal(event, "ChangeOfRules", "Should return change of rules event")
          assert.equal(minimumQuorum, 10, "Should change the minimum quorum to 10")
          assert.equal(debatingPeriodInMinutes, 20, "Should change the debating period to 20")
          assert.equal(majorityMargin, 30, "Should change the majority margin to 30")
        });
      });
  });
