const FullCoin = artifacts.require("FullCoin");

module.exports = async function (deployer, network, accounts) {
	await deployer.deploy(FullCoin);

	const instance = await FullCoin.deployed();
	await instance.initialize(accounts[0], '1337');
};
