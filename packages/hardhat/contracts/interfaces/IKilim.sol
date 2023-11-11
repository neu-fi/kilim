//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/**
 * @title The interface of Kilim.sol for making it easier for contracts to call Kilim.sol.
 * @notice Developed for ETHGünü (https://ethgunu.com)
 * @author Neufi (https://neu.fi)
 */
interface IKilim {
	/**
	 * Function that allows anyone to change the state in the given x and y coordinates.
	 *
	 * @param _x The x coordinate of the cell to set state.
	 * @param _y The y coordinate of the cell to set state.
	 * @param _state The state to set the cell. Iff this is different from the current state, a Set event is emitted.
	 */
	function setState(uint _x, uint _y, bool _state) external;
    
	/**
	 * Function that returns the boolean state in the given coordinates
	 */
	function getState(uint _x, uint _y) external view returns (bool);
}
