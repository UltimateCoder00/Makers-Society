pragma solidity ^0.4.8;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Congress.sol";

contract TestCongress {

  function testNumberOfProposalsAtInitialization() {
    Congress congress = Congress(DeployedAddresses.Congress());

    uint expected = 0;

    Assert.equal(congress.getNumberOfProposals(), expected, "Proposal is created");
  }
}
