var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Ballot = artifacts.require("./Ballot.sol");
var Congress = artifacts.require("./Congress.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Ballot);
  deployer.deploy(Congress);
};
