# Kilim
> Neufi's Interactive dApp Workshop for ETHGünü at Devconnect 2023

## Introduction
Welcome to the ETHGünü Neufi Workshop. Our session will be dedicated to exploring the dynamic world of Ethereum smart contracts. This workshop is designed to provide a hands-on introduction to the concept of decentralized computing. By actively participating in a collaborative drawing canvas, you'll gain firsthand experience in interacting with smart contracts. If you're up for the challenge, you can modify our example smart contracts to interact with the canvas programatically. We hope that some participants will be deploying custom smart contracts and other participants interact with these contracts developed in this workshop!

## Workshop Overview
Our session revolves around a canvas smart contract, where the objective is to collaboratively craft an artwork by coloring pixels on a rectangular grid (132x82) on the Kilim contract. These pixels are initially white, and can be set to black or white. 

You can interact with the Kilim contract, or interact with other contracts to do things more interesting than setting a single pixel. You can even write your own contract, such as one that draws a pattern, and share it with your friends to let them use it.

## The Goal of This Workshop
This goal of this activity is to serve as a practical way to understand and run smart contracts on blockchain.

By the end of this workshop, you will have not only contributed to a collective digital pixelart but also gained a fundamental understanding of decentralized computing through practical application. We're excited to guide you through this journey into the world of Ethereum and look forward to seeing your creativity unfold on the digital canvas!

In the meantime, you'll understand the concepts of smart contract programs running on blockchain way better.

## The Contracts
To make this experience user-friendly, we'll be utilizing a frontend interface built on the Scaffold-ETH-2 framework. This interface, familiar to those who attended the previous workshop, lets you see the state of the kilim and interact with the contracts.


## Tips for Participants
- **Ask for help**: Don’t hesitate to ask on the support channels on Gitter. If it's getting loud, kindly prefer Gitter over talking.
- **Experiment**: Once set up, feel free to explore and experiment within the Gitpod environment.
- **Collaborate with Others**: Remember, this workshop is not just about learning new skills, but also about collaboration. Engage with your fellow participants, share ideas, and solve problems together. This collaborative approach can enhance your learning experience and lead to more creative outcomes.


### Kilim ([View on Sepolia](https://sepolia.etherscan.io/address/0x984D21223E7b9328a862eD80BCe33e6B367Fa672#code))
The centerpiece of this workshop. This contract contains the state of a grid of white pixels.
The pixels can be set to black or white using the `setState` function that takes `x` and `y` values for the coordinate of the pixel, and a boolean state, representing black with `true`. There are no restrictions on how this function can ben called.

### Motif ([View on Sepolia](https://sepolia.etherscan.io/address/0xFb657C06BC677B7733161bdb95D496D29ACFaF85#code))
This is an example contract that illustrates how to set multiple pixels on a kilim contract.

When the `veawe` function of this contract is called, it updated multiple pixels on the above kilim contract. The fetter pattern in this contract traditionally means unity: 
* https://www.kilim.com/kilim-wiki/kilim-motifs/fetter
* https://en.wikipedia.org/wiki/Kilim_motifs#Motifs

The `weave` function takes the `x` and `y` coordinates of the bottom left pixel of the pattern hardcoded in this contract.

### HorizontalLine ([View on Sepolia](https://sepolia.etherscan.io/address/0x98Df415D516E359f276C518C3Dc7dd1340350ECd#code))
This is an example contract that illustrates how to set multiple pixels following an algorithm on a kilim contract.

The `draw` function takes `startX`, `endX`, `y`, and `state` as parameters. Upon a call, this contract sets pixels from `(startX, y)`, to and including `(endX, y)` to the given boolean `state` for either black or white.

## How to Participate?
We suggest three primary ways to participate in this workshop.

### A. Coordinating on Gitter
It's all coordination. Whether you'd like to see some interesting artwork on the canvas or want others to use your cool contract to print something interesting, use the Gitter chat to coordinate with your peers. 

Seek support on the relevant channels in Gitter, so that anyone can help.

### B. Web3 Wallet Interaction (Section 1)
We've deployed the contacts to Sepolia network. You can get some Sepolia testnet ether for free and interact with the contracts from your computer or mobile phone.


### C. Developing Custom Smart Contracts (Sections 2 & 3)
An alternative approach involves deploying new smart contracts that interact with our canvas contract to alter pixel states. We've prepared some example contracts for this method. Feel free to utilize these examples as-is or modify them to explore different functionalities.

## Section 1: Using Etherscan

### Prerequisites
- A Web3 wallet (like MetaMask)
- Some test Ether on the Sepolia testnet.

### Summary

* Go to https://sepolia.etherscan.io
* Enter the contract address
* Go to the "Contract" tab
* Make sure that the contract is verified and you see the following sub-tabs:
    * Code
    * Read Contract
    * Write Contract
* State changes are collected under "Write Contract"
* If you see it, click the "Connect to Web3" button and connect your wallet.
* Make sure that the network of your wallet is Sepolia.
* Click on the function you want to use.
* Set the parameters and hit "Write"


### Example Steps

The insturctions below are for calling `setState` on `Kilim` but interacting with any contract is a similar experience.

You can interact with the canvas contract directly through a web browser, using a Web3 wallet like MetaMask. This method involves executing a function on the canvas contract through a transaction. You can specify the pixel coordinates `(x,y)` you wish to alter and execute the function with those parameters.

Using Etherscan for Contract Interaction

1. **Locate the Contract on Etherscan**:
   - Navigate to the Sepolia version of [Etherscan](https://sepolia.etherscan.io).
   - Enter the contract address for "Kilim" in the search bar and go to the contract's page.

2. **Connect Your Wallet**:
   - On the contract page, click on the “Write Contract” tab.
   - Click on “Connect to Web3” to connect your MetaMask or other Web3 wallets.

3. **Interact with the Contract**:
   - Find the `setState` function in the list of functions.
   - Enter the desired parameters:
     - `_x`: the x-coordinate on the canvas.
     - `_y`: the y-coordinate on the canvas.
     - `_state`: the state of the pixel (true for black, false for white).
   - Click “Write” to execute the function.

4. **Confirm the Transaction**:
   - A MetaMask popup (or similar for other wallets) will appear, asking you to confirm the transaction.
   - Review the transaction details and confirm it.
   - Note that this will consume a small amount of test Ether as gas.

5. **Verify the Transaction**:
   - Once the transaction is confirmed, you can go back to the Kilim interface to see your changes on the canvas.
   - Alternatively, check the transaction receipt on Etherscan for details like block number and gas used.


By following these methods, you can interact with the "Kilim" smart contract in various ways, depending on your level of comfort and technical expertise. Whether you’re scripting directly, deploying a new contract, or simply using a Web3 wallet, each method offers a unique perspective on interacting with Ethereum smart contracts.


## Section 2: Setting a Development Environment for Developing Your Own Contracts
We're using Gitpod to ensure everyone has a consistent development environment. Don't worry if you're new to this; just follow these step-by-step instructions.

Advanced tip: If you already have the tools, you may clone the [GitHub repo](https://github.com/neu-fi/kilim) to your computer as well. If you can set it up well, you can skip to Section 3.

### Step 1: Create a GitHub Account
- **What is GitHub?** It's a platform where developers store and manage their code.
- **Why do I need it?** You need a GitHub account to use Gitpod, our development environment.
- **How to do it?**
  1. Go to [GitHub's website](https://github.com/).
  2. Follow the instructions to create an account.

### Step 2: Login to Gitpod with Your GitHub Account
- **What is Gitpod?** A cloud-based development environment that we'll use in the workshop.
- **How to login?**
  1. Visit [Gitpod's website](https://www.gitpod.io/).
  2. Click on “Login" or "Try for free” and choose "Continue with GitHub"

### Step 3: Clone the Workshop Repository
- **What is cloning?** This will create a copy of the workshop materials (contract code, solidity toolchain, scripts) to your Gitpod environment where you can work on your own version of the codebase.
- **How to clone?**
  1. Once in Gitpod, enter the workshop repository link provided by us.
  2. Click on it, and Gitpod will set up everything for you.

![gitpod2](https://hackmd.io/_uploads/SJcpsL6Q6.png)

### Step 4: Automatic Setup in Gitpod
When you open the repository in Gitpod, it automatically sets up everything.
- **Do I need to do anything?** No, just wait for it to finish. This will set up the canvas interface (using Scaffold-ETH-2) on a local blockchain network, created for your to locally test your actions.

### Step 5: Understanding Your Environment

Once your Gitpod instance has completed setting up without any errors, you will see that your screen is split into multiple windows and your local development environment has started running.

![gitpod-post-setup](https://hackmd.io/_uploads/S1vxkvCm6.png)

**Window #1** is the in-app web browser pointed to your local deployment of the scaffold-eth-2 stack.

**Window #2** is a terminal instance running a web server, serving your local fork of the workshop codebase.

**Window #3** is a terminal instance running a local test blockchain, hosting and running your local Kilim smart contract.

**Window #4** is a terminal instance which remains idle, displaying the address of the deployed smart contracts after running the contract deployment command.

### Step 6: Getting Started With Your Test Environment
In order to test your local deployment of Kilim and play around with it, you first need some test ETH that will be used in your local test blockchain. 

#### 1. Obtain some test ETH on your local network 
To receive some test ETH to pay for transaction fess simply click "Connect Wallet" and select "Burner Wallet". 

![gitpod6](https://hackmd.io/_uploads/Bykb-wC7a.png)

Afterwards, click the faucet icon to receive some test ETH. Once executed, will see that your wallet balance has increased.

![gitpod7](https://hackmd.io/_uploads/r1OUbDCQp.png)

#### 2. Render the empty Kilim grid
Navigate to the "Kilim" page. In your initial setup this page will render your local test smart contract. In this step you should see an empty grid, waiting to be filled with pixels.

![gitpod8](https://hackmd.io/_uploads/SJmkGvCQ6.png)

#### 3. Draw A Motif On Your Test Contract

To draw a motif on your test contract in the Gitpod environment, follow these steps:

1. **Choose a Motif Contract:** Select a pre-written motif contract, like the 'Motif' or the 'HorizontalLine' contract, or create your own.
2. **Set Coordinates and Parameters:** Input the desired coordinates (x, y) for the bottom left pixel of your motif. If you're using a pre-written contract, these coordinates will determine where the motif begins.
3. **Execute the Function:** Use the provided interface in your Gitpod environment to call the "**weave**" or similar function in your chosen motif contract. This will interact with the Kilim contract and draw your motif on the canvas.
4. **View the Result:** Once the transaction is confirmed, you can view the updated canvas in your Gitpod environment to see your motif.

## Section 3: Developing Custom Smart Contracts

### Prerequisites
- Basic understanding of smart contract deployment.
- Familiarity with Ethereum development tools.

### Summary
1. **Understand the main contract:** Analyze the `Kilim` contract, focusing on how it manages the canvas' state.
2. **Create a new contract:** Write a new smart contract that interacts with `Kilim`. Your contract could, for instance, change multiple pixels simultaneously or create predefined patterns.
3. **Write the deployment script:** You can modify the existing scripts.
4. **Test locally:** Deploy your new contract and play with it.
5. **Deploy to Sepolia:** Use the Hardhat environment in Gitpod to deploy your new contract to the Sepolia testnet.
6. **Interact on Sepolia:** Once deployed to Sepolia, use your contract to interact with `Kilim`, thereby affecting the canvas' state.
7. **Share your contract:** Be you're proud of your work, share it with others so that your contract can see some action!

### Steps

#### Create a new contract
In `packages/hardhat/contracts`, create a new file such as `YourContract.sol`. You can copy and paste one of our example contracts that interact with the kilim contract. They're `HorizontalLine.sol`, and `Motif.sol`.


#### Write the deployment script
In `packages/hardhat/deploy`, create a new file such as `03_deploy_my_contract.ts`. These files are run sorted by alphabetically, therefore it's important that your file starts with `03_`.

Write your deployment script like the examples in `01_deploy_horizontal_line.ts` or `02_deploy_motif.ts`. Here's an example file:

```
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMyContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const kilim = await hre.ethers.getContract("Kilim", deployer);

  await deploy("MyContract", {
    from: deployer,
    // Contract constructor arguments
    args: [kilim.address],
    log: true,
    autoMine: true,
  });
};

export default deployMyContract;
deployMyContract.tags = ["MyContract"];

```

#### Deploy to Sepolia
You need an account with Sepolia testnet ether for the following steps. We suggest that you use a seperate Ethereum account for development as you will expose its private key. If you use MetaMask, you can create a new account by clicking the account name dropdown that defaults to "Account 1".

On MetaMask, you can copy the private key following its documentation: https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key

In `packages/hardhat`, where you have `.env.example`, create an `.env` file. In `.env`, put your private key. The file could look like this:
```
DEPLOYER_PRIVATE_KEY=yourWalletPrivateKey
```

Then, deploy to Sepolia with the following command:
```
yarn deploy --network sepolia
```

The contract adresses are displayed in the following format:
```
deployed at 0xFb657C06BC677B7733161bdb95D496D29ACFaF85
```


You can see your contract on Etherscan's Sepolia Testnet Explorer: https://sepolia.etherscan.io/

Go to your contract's page on Etherscan and click the "Contract" tab. You'll see the bytecode of the contract and a notice that the contract is not verified.


Afterwards, verify your contract(s) on Sepolia:
```
yarn verify --network sepolia
```

When the command succeeds, visit your contract on Etherscan again to see its source-code and methods. 

If you see rate limits on verification, follow the docs on: https://docs.scaffoldeth.io/deploying/deploy-smart-contracts#configuration-of-third-party-services-for-production-grade-apps


#### Interact on Sepolia

##### Using Etherscan
On the Etherscan page of your contract, you can interact with your freshly deployed and verified contract. Since you haven't developed a frontend yet, this is the best way you can share your contract.


**Sharing Your Work:** If satisfied with your contract, share its address and functionality with other participants through Gitter.

##### Using the local web server yourself

You can connect a Sepolia wallet to the website and interact with your new contract in "Debug Contracts". However, your friends will not see your new contract on the deployed instance of this website.

**Connect to Sepolia:** In the `packages/nextjs` directory, set up your `.env.local` file to connect the local web server to the Sepolia network with the following content:

```
NEXT_PUBLIC_EVM_NETWORK=Sepolia
```

**Interact with Your Contract:** Once connected, use the "Debug Contracts" section in your local web server to interact with your newly deployed contract.

**Testing:** Experiment with your contract's functions and observe their effects on the Kilim canvas.
