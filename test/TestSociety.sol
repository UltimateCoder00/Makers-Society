pragma solidity ^0.4.8;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Society.sol";

contract TestSociety {

  function testgetManifestoStatusAtInitialization() {
    Society society = Society(DeployedAddresses.Society());

    bool expected = false;

    Assert.equal(society.getManifestoStatus(), expected, "Society manifesto is not accepted at initial load");
  }
}
