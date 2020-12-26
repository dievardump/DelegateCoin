const FullCoin = artifacts.require('FullCoin');

contract('FullCoin', async (accounts) => {
	let instance;
  before(async function () {
    instance = await FullCoin.deployed();
	});

  it('account 0 should have 1337', async () => {
		const balance = await instance.balanceOf(accounts[0]);
		assert.equal(balance.valueOf(), 1337, "Wrong balance - should be 1337");
  });

	it('account 1 should have 0', async () => {
		const balance = await instance.balanceOf(accounts[1]);
		assert.equal(balance.valueOf(), 0, "Wrong balance - should be 0");
  });
});
