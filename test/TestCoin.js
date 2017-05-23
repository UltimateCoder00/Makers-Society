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
      coin.mint.call(account_two, amount);
      return account_two;
    }).then (function(account_two) {
      return coin.getBalance.call(account_two);
    }).then (function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_two_ending_balance, amount, "Amount is minted to account 2")

    });

  });
});
