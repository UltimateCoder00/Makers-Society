pragma solidity ^0.4.8;

contract MakersToken {

  mapping (address => uint256) public BalanceOf;

  function MakersToken(uint256 initialSupply) {
    BalanceOf[msg.sender] = initialSupply;
  }

  function transfer(address _to, uint256 _value) {
    BalanceOf[msg.sender] -= _value;
    BalanceOf[_to] += _value;
  }

  function getBalance() returns (uint) {
    return BalanceOf[msg.sender];
  }

}
