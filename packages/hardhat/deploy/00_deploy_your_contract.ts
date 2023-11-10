import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "Kilim" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployKilim: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const constructorArgs = {
    name: "Kilim | EthGünü 2023",
    x: 100,
    y: 100,
  };

  await deploy("Kilim", {
    from: deployer,
    // Contract constructor arguments
    args: [constructorArgs.name, constructorArgs.x, constructorArgs.y],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  // const kilim = await hre.ethers.getContract("Kilim", deployer);
};

export default deployKilim;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags Kilim
deployKilim.tags = ["Kilim"];