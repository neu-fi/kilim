//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * @title A smart contract canvas that anyone can set pixels
 * @notice Developed for ETHGünü (https://ethgunu.com)
 * @author Neufi (https://neu.fi)
 */
contract Kilim {
	// State Variables
	/// The name of the contract instance
	string public name;
	/// The width of the rectangular coordinate system
	uint public immutable width;
	/// The height of the rectangular coordinate system
	uint public immutable height;
	/// states[x][y] represents a rectangular coordinate system with boolean values where x < width and y < height
	mapping(uint => mapping(uint => bool)) public states;

	// Events: a way to emit log statements from smart contract that can be listened to by external parties
	/**
	 * Emitted if and only if the state for a given x and y coordinates is flipped.
	 *
	 * @param x The x coordinate of the updated cell
	 * @param y The y coordinate of the updated cell
	 * @param state The new state of the updated cell
	 */
	event Set(
		uint indexed x,
		uint indexed y,
		bool state
	);

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_kilim.ts
	constructor(string memory _name, uint _width, uint _height) {
		name = _name;
		width = _width;
		height = _height;
	}

	/**
	 * Function that allows anyone to change the state in the given x and y coordinates
	 *
	 * @param _x The x coordinate of the cell to set state
	 * @param _y The y coordinate of the cell to set state
	 * @param _state The state to set the cell. Iff this is different from the current state, a Set event is emitted.
	 */
	function set(uint _x, uint _y, bool _state) public {
		// Make sure the parameters are within the limits
		require( _x < width && _y < height, "Invalid coordinate");

		// Update the state and throw the event only for updating the existing state
		if(states[_x][_y] != _state) {
			// Update the state for the given coordinates
			states[_x][_y] = _state;
			// Emit a Set event with the given coordinates and the new state
			emit Set(_x, _y, _state);
		}
	}
}