pragma solidity ^0.4.8;

contract MakersToken {

  string public name;
  string public symbol;
  uint8 public decimals;

  mapping (address => uint256) public BalanceOf;

  event Transfer(address indexed from, address indexed to, uint256 value);

  function MakersToken(uint256 initialSupply, string tokenName, uint8 decimalUnits, string tokenSymbol) {
    BalanceOf[msg.sender] = initialSupply;
    name = tokenName;
    symbol = tokenSymbol;
    decimals = decimalUnits;
  }

  function transfer(address _to, uint256 _value) {
    if (BalanceOf[msg.sender] < _value || BalanceOf[_to] + _value < BalanceOf[_to])
      throw;

    BalanceOf[msg.sender] -= _value;
    BalanceOf[_to] += _value;
    Transfer(msg.sender, _to, _value);
  }

  function getBalance() returns (uint) {
    return BalanceOf[msg.sender];
  }

}
