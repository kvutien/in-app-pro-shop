# In-App Pro Shop
An Ethereum blockchain-based system for in-app purchases implemented as ERC-721 non-fungible tokens.

## Status
Work in progress.

## Goal
The goal of In-App Pro Shop is to allow Ethereum developers to add in-app
purchases quickly with an existing system, and also to make it easy for
them to support assets from other apps if they so choose.

Using smart contracts that live on the blockchain and a web-based maintenance
application, it implements a franchise system, whereby anyone can create a Shop,
define and categorize the [SKU](https://en.wikipedia.org/wiki/Stock_keeping_unit)s
that identify the products they will sell, and integrate that Shop into their application.

Their applications can then interact with the In-App Pro Shop smart contracts
to allow users to purchase items, which are minted as [ERC-721 non-fungible tokens](http://erc721.org/).

A small percentage of each sale goes to the franchise owner [Futurescale, Inc.](http://futurescale.com),
and the rest is immediately available for withdrawal by the Shop Owner.

## Background
An interesting potential for apps built on Ethereum is that they can
incorporate existing smart contracts that already live on the blockchain.
For instance, Loom network's [CryptoZombies](https://cryptozombies.io/) feed on [CryptoKitties](https://www.cryptokitties.co/)
which are [non-fungible tokens](https://en.wikipedia.org/wiki/Non-fungible_token) created by another app entirely.

Meanwhile, in the wider gaming world, consider that Fortnite managed to
sell [over 1 billion dollars in in-game purchases](https://www.gamesindustry.biz/articles/2018-07-17-fortnite-has-earned-usd1-billion-from-in-game-purchases-alone) in less than a year
from it's inception.

Games like Fortnite are 'walled gardens'; all the assets that gamers purchase
live on servers of the company who wrote the game. With Ethereum, those
assets could live on the public blockchain, and be sold and traded like
CryptoKitties or any other NFT. When you get tired of playing a game after
a year or two, you could sell all your assets to other players to recoup
your investment.

Game developers could even choose to allow assets from other games to be
used in their own, simply by choosing to support those NFTs, the way
CryptoKities can be used in various games in the
['Kittyverse'](https://medium.com/cryptokitties/welcome-to-the-kittyverse-kittybattles-and-kittyhats-9e83bb1ded88)

## Architecture / Stack
The _In App Pro Shop_ project is composed of:

### Blockchain
A stratified set of Solidity contracts, one inheriting from another, ending with ProShop.sol, which is deployed.
* [Openzepplin-Solidity](https://github.com/OpenZeppelin/openzeppelin-solidity) base contracts for ERC721 tokens, role-based access control, safe math, and more.
* [Ganache-CLI](https://github.com/trufflesuite/ganache-cli) for local blockchain.
* [Truffle](https://github.com/trufflesuite/truffle) for compiling, testing, and migrating contracts to the blockchain.

### Web
A React/Redux application for maintaining Shops and checking/withdrawing Shop owner and Franchise Owner balances.
* [React-scripts](https://www.npmjs.com/package/react-scripts) for managing webpack configuration, compilation, testing, code watching, local server, etc.
* [Babel-core](https://babeljs.io/docs/en/next/babel-core.html) for ES6/7 support.
* [Redux-thunk](https://github.com/reduxjs/redux-thunk) middleware for asynchronous action creators.
* [React-bootstrap](https://react-bootstrap.github.io) for UI components.
* [React-app-rewired](https://github.com/timarney/react-app-rewired) for webpack config overrides to support Styled Components.
* [Styled-components](https://github.com/styled-components/styled-components) for easy application of CSS in JS.
* [Drizzle](https://github.com/trufflesuite/drizzle) and [Drizzle-react](https://github.com/trufflesuite/drizzle-react) for interacting with the blockchain and keeping data fresh.

## Project Structure
```
+ in-app-pro-shop
|
+---+ contracts (Solidity smart contracts)
|
+---+ migrations (Solidity contract migration scripts)
|
+---+ public (React app HTML template and assets)
|
+---+ src (React store maintenance app)
|   |
|   +---+ abi (compiled Solidity contracts)
|   |
|   +---+ components (React app UI components)
|   |
|   +---+ constants (Routes and other constants)
|   |
|   +---+ domain (JS domain model entities and tests)
|   |
|   +---+ services (JS code for persistence and retrieval)
|   |
|   +---+ store (Redux store, actions, reducers, and tests)
|   |
|   +---+ index.js (React app bootstrap)
|
+---+ test (Solidity contract tests)
```

#  Developer Setup
### Build / Run / Deploy Prerequisites
 * [Node](https://nodejs.org/en/download/) 8.11 or above (also installs npm)

### Install Node modules
* ```cd path/to/in-app-pro-shop``` (instructions in this document will assume you are at this path)

* ``` npm install```

### Install Ganache CLI
* ```npm install -g ganache-cli```

### Install Truffle
* ```npm install -g truffle```

# Development Tasks
## Blockchain
### Start Ganache CLI
An Ethereum client on 127.0.0.1:7545, will start up a local blockchain for testing.

```npm run ganache:start```

### Start Truffle console
Communicates with the Ethereum client, allows compiling, migrating, debugging, etc.

```truffle console```

#### Compile contracts
*truffle(development)>* ```compile```

#### Migrate contracts, replacing previous deployments
*truffle(development)>* ```migrate --reset```

#### Run contract tests
*truffle(development)>* ```test```

## React App
### Launch application
Compiles, serves, and launches app on http://localhost:3000/. Watches files for changes and reloads app in browser automatically.

```npm run app:start```

### Build application
Creates a production build of the application for deployment

```npm run app:build```

### Run unit tests
Runs all tests found in the /src tree

```npm run app:test```
