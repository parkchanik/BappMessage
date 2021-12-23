pragma solidity ^0.5.0;

import "./token/KIP7/KIP7Mintable.sol";
import "./token/KIP7/KIP7Burnable.sol";
import "./token/KIP7/KIP7Pausable.sol";
import "./token/KIP7/KIP7Metadata.sol";


contract AngelToken is KIP7Mintable, KIP7Burnable, KIP7Pausable, KIP7Metadata  {

    //uint public initialSupply = 21000000;
    //string public name = 'AngelToken';
    //string public symbol = 'ANG';
    //uint8 public decimals = 8;
    address owner;

    // bool public tradeYN = true;

     constructor(string memory name, string memory symbol, uint8 decimals, uint256 initialSupply) KIP7Metadata(name, symbol, decimals) public {
         _mint(msg.sender, initialSupply);

     }
   

}

//     function AngelToken() public {
//         totalSupply_ = INITIAL_SUPPLY * 10 ** uint(decimals);
//         balances[msg.sender] = INITIAL_SUPPLY;
//         owner = msg.sender;
//     }

//     function changeTradeY() public returns(bool){
//         require(owner == msg.sender);
//         require(!tradeYN);
//         tradeYN = true;
//         return tradeYN;
//     }

//     function changeTradeN() public returns(bool){
//         require(owner == msg.sender);
//         require(tradeYN);
//         tradeYN = false;
//         return tradeYN;
//     }

//     modifier onlyTradeY() {
//         require(tradeYN);
//         _;
//     }

//     function tokenadd(address _to , uint256 _value) public returns (bool) {
//         balances[_to] += _value;
//         return true;
//     }

//     function transfer(address to, uint256 value) public onlyTradeY returns (bool) {
//         super.transfer(to, value);
//     }

//     function allowance(address owner, address spender) public onlyTradeY view returns (uint256) {
//         super.allowance(owner, spender);
//     }

//     function transferFrom(address from, address to, uint256 value) public onlyTradeY returns (bool) {
//         super.transferFrom(from, to, value);
//     }

//     function approve(address spender, uint256 value) public onlyTradeY returns (bool) {
//         super.approve(spender, value);
//     }
// }