//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// The interface of Kilim with setState and getState functions
import "./interfaces/IKilim.sol";

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * @title A smart contract that prints a pattern
 * @notice Developed for ETHGünü (https://ethgunu.com)
 * @author Neufi (https://neu.fi)
 */
contract Motif {
    // The contract (and address) of the kilim that this motif is working on
    IKilim kilim;

	/// A double array that represents a patterns to be printed on a kilim
    uint8[][] PATTERN = [
        [0,0,0,1,0,0,0],
        [0,0,1,1,1,0,0],
        [0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1],
        [0,0,0,1,0,0,0],
        [1,1,1,1,1,1,1],
        [0,1,1,1,1,1,0],
        [0,0,1,1,1,0,0],
        [0,0,0,1,0,0,0]
    ];

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/02_deploy_motif.ts
	constructor(IKilim _kilim) {
		kilim = _kilim;
	}

	/**
	 * Draws the pattern with a given coordinate for the bottom right pixel.
	 *
	 * @param _lowerRightX The x coordinate of the pattern's lower right pixel.
	 * @param _lowerRightY The y coordinate of the pattern's lower right pixel.
	 */
	function draw(uint _lowerRightX, uint _lowerRightY) public {
		for (uint y = 0; y < PATTERN.length; y++) {
			for (uint x = 0; x < PATTERN[y].length; x++) {
				kilim.setState(_lowerRightX + x, _lowerRightY + y, PATTERN[y][x] != 0);
			}
		}
	}
}
