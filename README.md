# Makers Society 

A Decentralized Voting System & Native CryptoCurrency (MakerPoints) run on the Ethereum Blockchain.

## Overview



## Installation

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Install the node dependencies.
    ```javascript
    npm install
    ```
    
3. Install the chrome browser add-on MetaMask & set up an account, make sure your account is unlocked when interacting with the program. Save your MetaMask seed phrase, you'll need this later (If you lose it don't worry, it can be accessed through settings). 

4. Set up Test Network to mock the Ethereum Blockchain. 
 ```javascript
    testrpc -m "(insert your MetaMask seed phrase here)"    
    ```

5. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

6. Run the webpack server for front-end hot reloading.
    ```javascript
    npm run start
    ```
    
## Interacting with Society
    
    
###
Voting
1. To send some MakerPoints(MKP) to an address enter the amount and a valid ethereum address for the reciepient (this is running through a Test Network so no real currency will be sent.)



## FAQ

