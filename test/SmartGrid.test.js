const SmartGrid = artifacts.require("SmartGrid");

contract("SmartGrid", (accounts) => {
    before(async () =>{
        instance = await SmartGrid.deployed()
    })

    it('ensures that the starting balance of the smartgrid is 100', async () =>{
        let balance = await instance.getSmartGridBalance()
        assert.equal(balance, 100, 'The initial balance should be 100')
    })

    it('ensures the balance of the electricity can be updated', async () =>{
        await instance.restock(100)
        let balance = await instance.getSmartGridBalance()
        assert.equal(balance, 200, 'The initial balance should be 200 in electiricty after restocking')
    })

    it('allows electricity to be purchased', async () => {
        await instance.purchase(1, {from: accounts[0], value: web3.utils.toWei('3', 'ether')})
        let balance = await instance.getSmartGridBalance()
        assert.equal(balance, 199, 'The initial balance should be 199 after sale')
    })

});