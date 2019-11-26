const ERC721 = artifacts.require('./contracts/token/ERC721/ERC721.sol')
const ERC20 = artifacts.require('./contracts/token/ERC20/ERC20.sol')

let tryCatch = require("./Exceptions.js").tryCatch;
let errTypes = require("./Exceptions.js").errTypes;

contract('ERC721 to ERC20 trade test', function (accounts) {
    
    it('Buy with erc20 method', async function (){
        let token721 = await ERC721.new({from: accounts[0]})
        let token20 = await ERC20.new({from: accounts[1]})
        console.log("created contracts");
        await token721.buyWithERC20(20, {from: accounts[0]}); 
        bal = await token721.balanceOf721(accounts[0])
        assert.equal(bal, 1)
    })
})