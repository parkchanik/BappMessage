const path = require("path");

const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const Caver = require("caver-js");

const NETWORK_ID = '1001'
const GASLIMIT = '8500000'

/**
 * `URL`, `PRIVATE_KEY`을 상수로 설정하여 쉽게 값을 설정하도록 해줍니다.
 * 여기에 개인키와 Klaytn 노드의 URL을 설정하세요.
 */
const URL = `https://your.en.url:8651`
const BAOBAP_PRIVATE_KEY = '0x36d21b27c5f69eec348c3aab773d9c446b13f9ef03e8680c82a60161f43ac35a'



module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "localhost",
      network_id: "*", // Match any network id
      port: 7545
    } ,
    kasBaobab: {
      provider: () => {
        const option = {
          headers: [
            {
              name: "Authorization",
              value:
                "Basic " +
                Buffer.from("KASKJZD3TBPEYT6E89SM3SLP" + ":" + "sorVpXs7PUjK57wstYWTvB1Cw4uUMDzncAWDT7FH").toString(
                  "base64"
                ),
            },
            { name: "x-chain-id", value: "1001" },
          ],
          keepAlive: false,
        };
        return new HDWalletProvider(
          BAOBAP_PRIVATE_KEY,
          new Caver.providers.HttpProvider(
            "https://node-api.klaytnapi.com/v1/klaytn",
            option
          )
        );
      },
      network_id: "1001", //Klaytn baobab testnet's network id
      gas: "8500000",
      gasPrice: "25000000000",
    },
    kasCypress: {
      provider: () => {
        const option = {
          headers: [
            { name: 'Authorization', value: 'Basic ' + Buffer.from(accessKeyId + ':' + secretAccessKey).toString('base64') },
            { name: 'x-chain-id', value: '8217' }
          ],
          keepAlive: false,
        }
        return new HDWalletProvider(cypressPrivateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))
      },
      network_id: '8217', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice:'25000000000'
    },

  }
};
