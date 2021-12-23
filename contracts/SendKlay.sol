pragma solidity ^0.5.0;


import "./AngelToken.sol";


contract SendKlay {

    AngelToken public token;
    address public owner;


    bool private closed;

    constructor(AngelToken _token) public {
        token = _token;
        owner = msg.sender;
    }


    function giveABoxForMessage(string memory message) external payable {
        //require(!closed);
        require(msg.value > 0);

        token.transfer(owner, msg.value);

    }

    // function giveABox(address _from , string memory message) payable {
        
    //     require(!closed);
   
    //     // uint256 amount = msg.value;
        
    //     // ABoxInfo memory boxinfo = ABoxInfo(_from , amount);
        
    //     // var _id = ABoxList.push(boxinfo);

    //     // uint256 tokencnt = amount.div(SZABO_PER_WEI);
       
    //     // token.tokenadd(_from , tokencnt);

    //     emit ev_GiveABoxFromDonator(_id , msg.sender , message , msg.value , tokencnt);
        
    // }


}