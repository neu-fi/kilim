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
    uint8[][] MOTIF = [
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
	 * Weaves the hardcoded motif on the kilim with the given coordinate for the bottom right of the motif.
	 *
	 * @param _bottomRightX The x coordinate of the motif's bottom right pixel.
	 * @param _bottomRightY The y coordinate of the motif's bottom right pixel.
	 */
	function weave(uint _bottomRightX, uint _bottomRightY) public {
		for ( uint i = 0; i < MOTIF.length; i++ ) {
			for ( uint j = 0; j < MOTIF[i].length; j++ ) {
				uint x = _bottomRightX + j;
				uint y = _bottomRightY + i;
				bool state = MOTIF[MOTIF.length - 1 - i][j] != 0;
				kilim.setState(x, y, state);
			}
		}
	}

	/// Returns the target kilim contract
	function getKilim() view external returns (IKilim) {
		return kilim;
	}

	/// Returns the motif's pattern
	function getMotif() view external returns (uint8[][] memory) {
		return MOTIF;
	}

	/// Returns the height of the motif
	function getHeight() view external returns (uint) {
		return MOTIF.length;
	}

	/// Returns the width of the motif
	function getWidth() view external returns (uint) {
		uint maxWidth = 0;
		for ( uint i = 0; i < MOTIF.length; i++ ) {
			if ( maxWidth < MOTIF[i].length ) {
				maxWidth = MOTIF[i].length;
			}
		}
		return maxWidth;
	}
}
