
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    kovan: {
      url: 'https://eth-kovan.alchemyapi.io/v2/17-SH-JM-l8gEWSK0kMV2aDxGkqHe43X',
      accounts: ['85f5f144d32693b06ad8b9f4418882d272d55a804b5bd8ba59a2e028a05d5abc'],
    },
  },
};