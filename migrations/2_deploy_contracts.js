var MakersToken = artifacts.require("./MakersToken.sol");
var Congress = artifacts.require("./Congress.sol");

module.exports = function(deployer) {
  deployer.deploy(MakersToken, 100, "MakersToken", 2, "M",0);
  deployer.deploy(Congress, 100, 200, 300);
};
