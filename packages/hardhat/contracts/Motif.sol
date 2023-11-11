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
    // The contract of the kilim that this motif can be weaved to.
    IKilim kilim;

	/// A double array that represents a patterns to be printed on a kilim.
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
	 * Draws the hardcoded pattern on the kilim with the given coordinate for the bottom right of the pattern.
	 *
	 * @param _bottomRightX The x coordinate of the pattern's bottom right pixel.
	 * @param _bottomRightY The y coordinate of the pattern's bottom right pixel.
	 */
	function weave(uint _bottomRightX, uint _bottomRightY) public {
		for ( uint i = 0; i < PATTERN.length; i++ ) {
			for ( uint j = 0; j < PATTERN[i].length; j++ ) {
				uint x = _bottomRightX + j;
				uint y = _bottomRightY + i;
				bool state = PATTERN[PATTERN.length - 1 - i][j] != 0;
				kilim.setState(x, y, state);
			}
		}
	}

	/// Returns the height of the pattern
	function getHeight() view external returns (uint) {
		return PATTERN.length;
	}

	/// Returns the width of the pattern
	function getWidth() view external returns (uint) {
		uint maxWidth = 0;
		for ( uint i = 0; i < PATTERN.length; i++ ) {
			if ( maxWidth < PATTERN[i].length ) {
				maxWidth = PATTERN[i].length;
			}
		}
		return maxWidth;
	}
}
