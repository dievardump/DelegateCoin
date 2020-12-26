const DelegateCoin = artifacts.require("DelegateCoin");
const FullCoin = artifacts.require("FullCoin");

module.exports = async function (deployer, network, accounts) {
  const full = await FullCoin.deployed();

  await deployer.deploy(DelegateCoin, "DelegateCoin", "Coin", full.address);
  const instance = await DelegateCoin.deployed();

  // Call fullCoin functions on our new instance which will delegate automatically
  const delegatingInstance = await FullCoin.at(instance.address);
  await delegatingInstance.initialize(accounts[1], "7331");
};
