const DelegateCoin = artifacts.require('DelegateCoin');
const FullCoin = artifacts.require('FullCoin');

contract('DelegateCoin', async (accounts) => {
	let instance;
  before(async function () {
		const delegateCoinInstance = await DelegateCoin.deployed();
		instance = await FullCoin.at(delegateCoinInstance.address);
	});

  it('accounts 1 should have 7331', async () => {
		const balance = await instance.balanceOf(accounts[1]);
		assert.equal(balance.valueOf(), 7331, "Wrong balance - should be 7331");
  });
});
