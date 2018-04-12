pragma solidity ^0.4.19;

contract HelloWorld {

    string message = "HelloWorld";

    function getMessage() public view returns (string) {
        return message;
    }

}
