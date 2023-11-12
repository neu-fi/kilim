//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// The interface of Kilim with setState and getState functions
import "./interfaces/IKilim.sol";

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * @title A smart contract that prints a closed horizontal line segment on a kilim
 * @notice Developed for ETHGünü (https://ethgunu.com)
 * @author Neufi (https://neu.fi)
 */
contract HorizontalLine {
    // The contract (and address) of the kilim that this motif is working on
    IKilim kilim;

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/01_deploy_horizontal_line.ts
	constructor(IKilim _kilim) {
		kilim = _kilim;
	}

	/**
	 * Draws a closed horizontal line segment on a y coordinate and in between and including two x coordinates.
	 *
	 * @param _startX The line segment's starting x coordinate, which is included in the segment.
	 * @param _endX The line segment's ending x coordinate, which is included in the segment.
	 * @param _y The y coordinate of the line segment.
	 * @param _state The state of the line segment that will be set for every point.
	 */
	function draw(uint _startX, uint _endX, uint _y, bool _state) public {
		// Requiring that _startX is smaller than _endX
		require (_startX < _endX, "_startX must be smaller than _endX");

		// For every x coordinate in between and including _startX and _endX
		for (uint x = _startX; x <= _endX; x++) {
			// Set the point in the line segment to _state
			kilim.setState(x, _y, _state);
		}
	}

	/// Returns the target kilim contract
	function getKilim() view external returns (IKilim) {
		return kilim;
	}
}
