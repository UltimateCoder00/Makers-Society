![Makers Society Logo](/public/mslogo.png)

# Makers Society

A Decentralized Voting System & Native CryptoCurrency (MakerPoints) run on the Ethereum Blockchain.

## Overview



## Installation

1. Install truffle and an Ethereum client. For local development, try EthereumJS TestRPC.

    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Install the node dependencies.

    ```javascript
    npm install
    ```

3. Install the chrome browser add-on [MetaMask](https://metamask.io/) and create an account. Make sure your account is unlocked when interacting with the program. Save your MetaMask seed phrase - you'll need this later (if you lose it, don't worry: it can be accessed through settings).

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

No logins! (Well, kind of). One of the great things about Blockchains is that users have one global login for all their services - their private key. For our App this is held in MetaMask.

However we do have one extra check that for users to complete before they can join the Makers Society - reading our Manifesto. [You can do here if you haven't installed the app](/public/manifesto.txt). Your choice to adhere to these principles will be recorded on the blockchain for prosperity, and from that point forward you will be able to make Proposals, Vote and participate in the Makers Economy.     

### Making MakerPoint (MKP) Payments

To send some MakerPoints(MKP) to an address, enter the amount and a valid Ethereum address for the recipient. As this is running through a Test Network, no real currency will be sent.

### Making Proposals

Simply add your Proposal and click 'Submit Proposal' - it's as easy as that!

### Voting

Type the relevant ProposalId number into the box, then select *For* or *Against*, depending on your stance.

## Acknowledgements

Much of our code was either based on or directly referenced the example cases given on the [official Ethereum site](http://ethereum.org/) and [Solidity Documentation](https://solidity.readthedocs.io/en/develop/).

## FAQ

### What's a Blockchain?

A Blockchain is a distributed database where transactions are recorded and stored accross 1000s of computers (nodes). Bitcoin is an example of a public blockchain that's focus is on financial transactions.  

### Why did you choose Ethereum?

Ethereum allows developers to deploy turing complete & object oriented languages to the blockchain - this gave us lots of flexibility when designing our currency and voting system. Examples of what other people are building include peer-to-peer energy trading networks, supply-chain integrity and management tools and distributed prediction markets. For more information check out the [official Ethereum site](http://ethereum.org/).

## Useful Resources

Here are some links and resources we found handy when getting our head around blockchain and Ethereum.

### Blockchain and Ethereum

  - [Blockchain Revolution](http://blockchain-revolution.com/) (A must read!)
  - [Interview with Don Tapscott, great summary of Blockchain Revolution](http://www.mckinsey.com/industries/high-tech/our-insights/how-blockchains-could-change-the-world)
  - [Ethereum White Paper](https://github.com/ethereum/wiki/wiki/White-Paper)
  - [BlockGeeks: What is Ethereum?](https://blockgeeks.com/guides/what-is-ethereum/)
  - [Quora Answers to 'What is Ethereum in layman's terms?'](https://www.quora.com/What-is-Ethereum-in-laymans-term)
  - [Smart Contracts for Noobs](https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4)


### Documentation

 - [Official Ethereum site](http://ethereum.org/)
 - [Solidity Documentation](https://solidity.readthedocs.io/en/develop/)
 - [Truffle Documentation](http://truffle.readthedocs.io/en/stable/)


### Troubleshooting

 - [Ethereum Gitter Chat](https://gitter.im/ethereum/solidity/)
 - [Ethereum StackExchange](https://ethereum.stackexchange.com/)
