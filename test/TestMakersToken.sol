pragma solidity ^0.4.8;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MakersToken.sol";

contract TestMakersToken {

  function testInitialTokenBalanceAtInitialization() {
    MakersToken makersToken = new MakersToken(100, "MakersToken", 2, "MKT",0);

    uint expected = 100;

    Assert.equal(makersToken.getBalance(), expected, "The owner has 100 balance at initialization.");
  }
}
