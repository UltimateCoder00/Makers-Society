var MakersToken = artifacts.require("./MakersToken.sol");

contract("MakersToken", function(accounts) {
  it ("should take 10 MKT out the the owners accounts", function() {
    var makersToken;

    var account_one_ending_balance;

    return MakersToken.deployed(100, "MakersToken", 2, "MKT",0).then(function(instance) {
      makersToken = instance;
      return makersToken.transfer( accounts[1], 10, {from: accounts[0]} );
    }).then(function() {
      return makersToken.getBalance.call( {from: accounts[0]} );
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      assert.equal(account_one_ending_balance, 90, "Correct balance after transfer is complete");
    });
  });
})
