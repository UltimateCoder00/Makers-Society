pragma solidity ^0.4.8;

import "./Owned.sol";

contract MakersToken is owned {

  uint256 public totalSupply;
  string public name;
  string public symbol;
  uint8 public decimals;

  mapping (address => uint256) public BalanceOf;
  mapping (address => bool) public frozenAccount;

  event LogTransfer(address indexed from, address indexed to, uint256 value);
  event FrozenFunds(address target, bool frozen);

  function MakersToken(uint256 initialSupply, string tokenName, uint8 decimalUnits, string tokenSymbol, address centralMinter) {
    if( centralMinter != 0 ) owner = centralMinter;

    totalSupply = initialSupply;
    BalanceOf[msg.sender] = initialSupply;
    name = tokenName;
    symbol = tokenSymbol;
    decimals = decimalUnits;
  }

  function transfer(address _to, uint256 _value) {
    if (frozenAccount[msg.sender]) throw;

    if (BalanceOf[msg.sender] < _value || BalanceOf[_to] + _value < BalanceOf[_to])
      throw;

    BalanceOf[msg.sender] -= _value;
    BalanceOf[_to] += _value;
    LogTransfer(msg.sender, _to, _value);
  }

  function getBalance() returns (uint) {
    return BalanceOf[msg.sender];
  }

  function mintToken(address target, uint256 mintedAmount) onlyOwner {
    BalanceOf[target] += mintedAmount;
    totalSupply += mintedAmount;
    LogTransfer(0, owner, mintedAmount);
    LogTransfer(owner, target, mintedAmount);
  }

  function freezeAccount(address target, bool freeze) onlyOwner {
    frozenAccount[target] = freeze;
    FrozenFunds(target, freeze);
  }

}
