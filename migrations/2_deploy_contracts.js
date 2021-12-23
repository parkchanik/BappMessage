var AngelToken = artifacts.require("./AngelToken.sol");
var SendKlay = artifacts.require("./SendKlay.sol");

//var AngelToken = artifacts.require("./Token/KIP7Tiken.sol");
const fs = require('fs')

module.exports = function (deployer) {
  deployer.deploy(AngelToken , "AngelToken" , "ANG" , 8 , 21000000)
  .then(() => {
    // Record recently deployed contract address to 'deployedAddress' file.
    if (AngelToken._json) {
      // Save abi file to deployedABI.
      fs.writeFile(
        'deployedABI_Token',
        JSON.stringify(AngelToken._json.abi, 2),
        (err) => {
          if (err) throw err
          console.log(`The abi of ${AngelToken._json.contractName} is recorded on deployedABI file`)
        })
    }

    fs.writeFile(
      'deployedAddress_Token',
      AngelToken.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${AngelToken.address} * is recorded on deployedAddress file`)
    })


    deployer.deploy(SendKlay , AngelToken.addres).then( () => {

      if (SendKlay._json) {
        // Save abi file to deployedABI.
        fs.writeFile(
          'deployedABI_Contract',
          JSON.stringify(SendKlay._json.abi, 2),
          (err) => {
            if (err) throw err
            console.log(`The abi of ${SendKlay._json.contractName} is recorded on deployedABI file`)
          })
      }
  
      fs.writeFile(
        'deployedAddress_Contract',
        SendKlay.address,
        (err) => {
          if (err) throw err
          console.log(`The deployed contract address * ${SendKlay.address} * is recorded on deployedAddress file`)
      })
  

    })



  })
}
