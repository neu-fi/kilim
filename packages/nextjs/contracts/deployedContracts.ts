/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    HorizontalLine: {
      address: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IKilim",
              name: "_kilim",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startX",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endX",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_y",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_state",
              type: "bool",
            },
          ],
          name: "draw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getKilim",
          outputs: [
            {
              internalType: "contract IKilim",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    Kilim: {
      address: "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "x",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "y",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "state",
              type: "bool",
            },
          ],
          name: "Set",
          type: "event",
        },
        {
          inputs: [],
          name: "getHeight",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "getName",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_x",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_y",
              type: "uint256",
            },
          ],
          name: "getState",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getStates",
          outputs: [
            {
              internalType: "bool[82][132]",
              name: "",
              type: "bool[82][132]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getWidth",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_x",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_y",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_state",
              type: "bool",
            },
          ],
          name: "setState",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    Motif: {
      address: "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IKilim",
              name: "_kilim",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "getHeight",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getKilim",
          outputs: [
            {
              internalType: "contract IKilim",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMotif",
          outputs: [
            {
              internalType: "uint8[][]",
              name: "",
              type: "uint8[][]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getWidth",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_bottomRightX",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_bottomRightY",
              type: "uint256",
            },
          ],
          name: "weave",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
  11155111: {
    HorizontalLine: {
      address: "0x98Df415D516E359f276C518C3Dc7dd1340350ECd",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IKilim",
              name: "_kilim",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startX",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endX",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_y",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_state",
              type: "bool",
            },
          ],
          name: "draw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getKilim",
          outputs: [
            {
              internalType: "contract IKilim",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    Kilim: {
      address: "0x984D21223E7b9328a862eD80BCe33e6B367Fa672",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "x",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "y",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "state",
              type: "bool",
            },
          ],
          name: "Set",
          type: "event",
        },
        {
          inputs: [],
          name: "getHeight",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "getName",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_x",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_y",
              type: "uint256",
            },
          ],
          name: "getState",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getStates",
          outputs: [
            {
              internalType: "bool[82][132]",
              name: "",
              type: "bool[82][132]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getWidth",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_x",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_y",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_state",
              type: "bool",
            },
          ],
          name: "setState",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    Motif: {
      address: "0xFb657C06BC677B7733161bdb95D496D29ACFaF85",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IKilim",
              name: "_kilim",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "getHeight",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getKilim",
          outputs: [
            {
              internalType: "contract IKilim",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMotif",
          outputs: [
            {
              internalType: "uint8[][]",
              name: "",
              type: "uint8[][]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getWidth",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_bottomRightX",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_bottomRightY",
              type: "uint256",
            },
          ],
          name: "weave",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
