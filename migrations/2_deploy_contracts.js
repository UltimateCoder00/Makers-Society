var MakersToken = artifacts.require("./MakersToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MakersToken);
};
