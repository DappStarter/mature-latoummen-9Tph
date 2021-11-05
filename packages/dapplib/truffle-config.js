require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan renew magic mistake install hidden flock target'; 
let testAccounts = [
"0x57c46741bf6bbe8800f227e2d6ff07762fd9bef60460b299a095383bd007904a",
"0xfff3e7f30d93916b2c7b32d45e071fdfd3602d925545f8c96f7b2c6f92d5f928",
"0x62b79dca6034b59908c459fef4d2d2dca3a28294ede68f55065da0e87430f523",
"0x366b3380690ea3c650ab9ae2cebe7efef11d430bb94cffe8dae4dc04c3c39b30",
"0x16564ede7918aa34570a3abf30dab1f091ae9f74276fdf944b38c60a858bf684",
"0x3622d21053e06b871d148c4c440481c8d0e25ae64342a9337a14f4ffb82925be",
"0x13d3c7e6db9e37c7053cf406045ecb68b28cf151262b64844b3a8cef052bcf5c",
"0x4fa4e0deb11b9e5f2f11fdcb8cfaa584f04c445a332e20c34ef5213caf88e2f8",
"0xebb1a7b986a78f2ec975f7be5598d1687fdbc329a1d38120c10b81655be6e074",
"0x6f2b149d4f61be7037f1992040100abb0a4b1d584eab24efadd83a32a41c76ef"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

