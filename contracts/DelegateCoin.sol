// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

contract DelegateCoin {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    bool public initialized;
    address public logic_contract;

    constructor(
        string memory name_,
        string memory symbol_,
        address logic_contract_
    ) public {
        _name = name_;
        _symbol = symbol_;
        _decimals = 18;
        logic_contract = logic_contract_;
    }

    fallback() external payable {
        address addr = logic_contract;

        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), addr, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
                case 0 {
                    revert(0, returndatasize())
                }
                default {
                    return(0, returndatasize())
                }
        }
    }

    receive() external payable {
        require(false, "We do not accept ether alone");
    }
}
