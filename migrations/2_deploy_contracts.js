var Owned = artifacts.require("./Owned.sol");
var Society = artifacts.require("./Society.sol");
var MakersToken = artifacts.require("./MakersToken.sol");
var Congress = artifacts.require("./Congress.sol");

module.exports = function(deployer) {
  deployer.deploy(Owned);
  deployer.deploy(Society);
  deployer.deploy(MakersToken, 100, "MakersToken", 2, "M",0);
  deployer.deploy(Congress, 1, 2, 1);
};
