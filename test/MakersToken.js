var MakersToken = artifacts.require("./MakersToken.sol");

contract("MakersToken", function(accounts) {
  it ("should take 10 MKT out the the owners accounts", function() {
    var makersToken;
    var contract_owner = accounts[0];
    var account_two = accounts[1];
    var amount = 10;
    var account_one_ending_balance;

    return MakersToken.deployed(100, "MakersToken", 2, "MKT",0).then(function(instance) {
      makersToken = instance;
      return makersToken.transfer( account_two, amount, {from: contract_owner} );
    }).then(function() {
      return makersToken.getBalance.call( {from: contract_owner} );
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      assert.equal(account_one_ending_balance, 90, "Correct balance after transfer is complete");
    });
  });
  // transferOwnership is indirectly tested
  it ("should transfer Ownership to account_two and allow account_two to mint coins", function() {
    var makersToken;
    var contract_owner = accounts[0];
    var account_two = accounts[1];
    var account_three = accounts[2];
    var amount = 10;
    var account_three_ending_balance;

    return MakersToken.deployed(100, "MakersToken", 2, "MKT",0).then(function(instance) {
      makersToken = instance;
      return makersToken.transferOwnership( account_two, {from: contract_owner} );
    }).then(function() {
      return makersToken.mintToken(account_three, amount, {from: account_two} );
    }).then(function() {
      return makersToken.getBalance.call( {from: account_three});
    }).then(function(balance) {
      account_three_ending_balance = balance.toNumber();
      assert.equal(account_three_ending_balance, amount, "Correct balance after transfer is complete");
    });
  });

});
