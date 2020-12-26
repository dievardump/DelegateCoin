// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FullCoin is ERC20 {
    bool public initialized;

    constructor() public ERC20("FullCoin", "COIN") {}

    function initialize(address recipient, uint256 amount) external {
        require(initialized == false, "Already initialized");
        _mint(recipient, amount);
        initialized = true;
    }
}
