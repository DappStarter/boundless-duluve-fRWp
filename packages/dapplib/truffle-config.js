require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile prosper install glove frown skirt'; 
let testAccounts = [
"0x43b256b5da731879487b8179cac83026b7ff8c69ab17dd8e5b1ab3c2607bc6f5",
"0x6f4ef4d4ed20386d8c6889c295c06912cd3f3251b7f38abad67b735a068ceeb1",
"0xc767d68bffb7922df126ca004e45ad8c62136f3fdfd84e6f2af0d8bcfa4ca7ca",
"0xac48e6dc6d4cef7c1d951d78b0c77c67fcde6efd61ad2bfc89a66fb732ff7db6",
"0x7e6c4ece97301e41df520bc80538803c19ffea0722d366f7cf4e4686d5493e1c",
"0xf58148eaab381739b0cc27778de84c8d07ff60620acdc6ce5f346a834ed28d49",
"0xd7bbb85cd9d1888a826f1857cfb88c13b38a211fd1d088864885b626fb14ba68",
"0x9ba0bdb75d742ee7dff12780ee46153ee5f9023437c5db475cd4642277064eae",
"0x068c79c11b0daa4d86ee309354b97b7158000b1a80282ea370e62ee0dce65148",
"0x66ef263a4276b2099b2a0425e20597ec324787790f42497713d29968536096bc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


