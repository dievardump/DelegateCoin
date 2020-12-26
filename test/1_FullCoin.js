const FullCoin = artifacts.require('FullCoin');

contract('FullCoin', async (accounts) => {
	let instance;
  before(async function () {
    instance = await FullCoin.deployed();
	});

  it('accounts 0 should have 1337', async () => {
		const balance = await instance.balanceOf(accounts[0]);
		assert.equal(balance.valueOf(), 1337, "Wrong balance - should be 1337");
  });
});
