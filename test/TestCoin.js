var Coin = artifacts.require("./Coin.sol");

contract('Coin', function(accounts) {

  it("should be able to mint a coin for account 2", function() {

  var coin;

  var account_one = accounts[0];
  var account_two = accounts[1];

  var account_two_starting_balance;
  var account_two_ending_balance;

  var amount = 1;



    return Coin.deployed().then(function(instance) {
      coin = instance;
      return coin.mint(account_two, amount, {from: account_one});
    }).then (function() {
      return coin.getBalance.call(account_two);
    }).then (function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_two_ending_balance, amount, "Amount is minted to account 2");

    });

  });

  it("should be able to send coins from one account to another", function() {

  var coin;

  var account_one = accounts[0];
  var account_three = accounts[2];

  var account_three_starting_balance;
  var account_three_ending_balance;

  var amount = 100;



    return Coin.deployed().then(function(instance) {
      coin = instance;
      return coin.mint(account_one, amount, {from: account_one});
    }).then (function() {
     return coin.sendCoin(account_three, amount, {from: account_one});
    ``}).then (function() {
     return coin.getBalance.call(account_three);
    }).then (function(balance) {
      account_three_ending_balance = balance.toNumber();

      assert.equal(account_three_ending_balance, amount, "Amount is sent to account 2");

    });

  });
});
