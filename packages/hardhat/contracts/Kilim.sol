//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// The interface of this contract that requires setState and getState functions
import "./interfaces/IKilim.sol";

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * @title A smart contract kilim that anyone can set pixels
 * @notice Developed for ETHGünü (https://ethgunu.com)
 * @author Neufi (https://neu.fi)
 */
contract Kilim is IKilim {
	// Constant Variables
	/// The WIDTH of the rectangular coordinate system
	uint public constant WIDTH = 162;
	/// The HEIGHT of the rectangular coordinate system
	uint public constant HEIGHT = 100;

	// State Variables
	/// The name of the contract instance
	string public name;
	/// states[x][y] represents a rectangular coordinate system with boolean values where x < WIDTH and y < HEIGHT.
	/// This two-dimensional array is essentially an array of arrays. states[x] arrays represent columns.
	/// states[x][y] values are accessed as y'th elements in states[x] columns.
	bool[HEIGHT][WIDTH] states;

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
	constructor(string memory _name) {
		name = _name;
	}

    /// Modifier to check that the x and y coordinates are within the rectangular coordinate system of WIDTH and HEIGHT
    modifier onlyValidCoordinates(uint _x, uint _y) {
		// Make sure the parameters are within the limits
		require( _x < WIDTH && _y < HEIGHT, "Invalid coordinates");

        // Underscore is a special character only used inside
        // a function modifier and it tells Solidity to
        // execute the rest of the code.
        _;
    }

	/**
	 * Function that allows anyone to change the state in the given x and y coordinates.
	 *
	 * @param _x The x coordinate of the cell to set state.
	 * @param _y The y coordinate of the cell to set state.
	 * @param _state The state to set the cell. Iff this is different from the current state, a Set event is emitted.
	 */
	function setState(uint _x, uint _y, bool _state) external onlyValidCoordinates(_x, _y) {
		// Update the state and throw the event only for updating the existing state
		if(states[_x][_y] != _state) {
			// Update the state for the given coordinates
			states[_x][_y] = _state;
			// Emit a Set event with the given coordinates and the new state
			emit Set(_x, _y, _state);
		}
	}

	/**
	 * Function that returns the boolean state in the given coordinates
	 */
	function getState(uint _x, uint _y) external view onlyValidCoordinates(_x, _y) returns (bool) {
		return states[_x][_y];
	}

	/**
	 * Function that returns the raw two-dimensional array of bool[HEIGHT][WIDTH] states
	 */
	function getStates() external view returns (bool[HEIGHT][WIDTH] memory) {
		return states;
	}
}
