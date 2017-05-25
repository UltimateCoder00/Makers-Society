var Congress = artifacts.require("./Congress.sol");

contract("Congress", function(accounts) {
  it("should be able to create a proposal", function(){
    var congress;
    var account_one = accounts[0]
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
      })
    });
  });
});
