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
  });
