var Ballot = artifacts.require("./Ballot.sol");

contract('Ballot', function(accounts) {
  it("should allow the chairperson to give the right to vote to another user", function() {
    var account_1 = accounts[0]
    var account_2 = accounts[1]
    var vote_weight;
    var test_ballot;

    return Ballot.deployed().then(function(instance){
      test_ballot = instance;
      return test_ballot.giveRightToVote(account_2, {from: account_1})
    }).then(function(){
      return test_ballot.voteWeight.call(account_2)
    }).then(function(weight) {

      vote_weight = weight.toNumber();

      assert.equal(vote_weight, 1, "voteWeight should equal 1")
    });
  });
});
