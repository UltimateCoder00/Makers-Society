var MakersToken = artifacts.require("./MakersToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MakersToken, 100, "MakersToken", 2, "M");
};
