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
    
### Logging in    

No Logins(well, kind of)! One of the great things about Blockchains is that users have one global login for all their services - their private key. For our App this is held in MetaMask. 

However we do have one extra check that for users to complete before they can join the Makers Society - Read our Manifesto, upon submiting this will inform the blockchain you're on bored with the principles and now you're free to make Proposals, Vote & Particapate in the Makers Economy :)      
    
### Making MakerPoint (MKP) Payments

To send some MakerPoints(MKP) to an address enter the amount and a valid ethereum address for the reciepient (this is running through a Test Network so no real currency will be sent.)

### Making Proposals

Simply add your Proposal and click 'Submit Proposal', it's as easy as that! 

### Voting

Type the relevant ProposalId number into the box then select For or Against depending on your stance.

## FAQ

### What's a Blockchain?

A Blockchain is a distributed database where transactions are recorded and stored accross 1000s of computers (nodes). Bitcoin is an example of a public blockchain that's focus is on financial transactions.  

### Why did you choose Ethereum?

Ethereum allows developers to deploy turing complete & object oriented languages to the blockchain - this gave us lots of flexibility when desiging our currency and voting system. Examples of what other people are building include peer-to-peer energy trading networks, supply-chain integrity and management tools and distributed prediction markets.



