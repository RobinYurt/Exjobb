// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract SmartGrid {

    // state variables
    address public owner;
    mapping (address => uint) public smartGridBalance;

    // set the owner as th address that deployed the contract
    // set the initial electricity balance to 100
    constructor() {
        owner = msg.sender;
        smartGridBalance[address(this)] = 100;
    }

    function getSmartGridBalance() public view returns (uint) {
        return smartGridBalance[address(this)];
    }
}