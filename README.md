![Resources](docs/assets/images/meshed-up.gif)
# BuidlBox
### Install

```
$ npm install -g truffle

-------- Step 1 --------
git clone git@github.com:EidenaiEth/ApplicationBrowser.git eidenai ; cd eidenai

-------- Step 2 --------
npm install || yarn

------- Step 3 (Optional) -------
npm install -g truffle // Smart Contract Management
npm install -g webassembly // WebAssembly Management

------- Step 4 (Optional) -------
yarn start || yarn build

```

Smart Contract & WebAssembly Build Process
```
yarn build:truffle // Compile Smart Contracts (build/contracts)
```

## Overview
The BuidlBox is a boilerplate for rapidly prototyping creating a decentralized application. The boilerplate includes a mature file structure, ready-to-go components and integrations with popular decentralized solutions. The primary focus is to empower developers to create non-trivial applications with 

##### Folder Structure
- assets
  - icons
  - images
  - svg
- assimilation
  - components
  - containers
  - store
- contracts
  - ERC20
  - meetupEvent
  - simpleStorage
- foundry
  - core
  - views
- interface
  - atomic
  - components
  - containers
  - features
  - forms
  - layout
  - routes
  - store
  - theme
  - views
- logic
- services
- settings
- static


### React Component/Container List
##### uPort | Display (src/core/assimilation/components/uport)
- [x] UPortAvatarName
- [x] UPortCard
- [x] UPortCardSimple
- [x] UPortLoginButton
- [ ] UPortProfile

##### uPort | Fetching (src/core/assimilation/containers/uport)
- [x] UPortAttestForm
- [x] UPortAttestAddressForm
- [x] UPortAttestIdentityForm
- [x] UPortCredentialsRequest
- [x] UPortTransactionGenerate

##### Ethers | Display (src/core/assimilation/containers/ethers)
- [x] EthersAddress
- [x] EthersBlockchainBlockCard
- [x] EthersBlockchainBlockTransaction
- [x] EthersContractInformation
- [x] EthersProviderBlock
- [x] EthersProviderCard
- [x] EthersProvidersInitialize
- [x] EthersWalletDisplay
- [x] EthersWalletGenerateDisplay
- [x] EthersWalletGeneratedRandom

##### Ethers | Fetching (src/core/assimilation/containers/ethers)
- [x] EthersBlockchainBlockGet
- [x] EthersBlockchainBlockNumber
- [x] EthersBlockchainGasPrice
- [x] EthersBlockchainTransaction
- [x] EthersBlockchainTransactionReceipt
- [x] EthersProviderInitializeEtherscan
- [x] EthersProviderNewInfura
- [x] EthersWalletCreateRandom
- [ ] EthersEnsResolveName
- [ ] EthersEnsLookupAddress
- [ ] EthersAccountGetBalance
- [ ] EthersAccountGetTransactionCount

##### IPFS (Internet File System)
- [ ] IpfsFileAdd
- [ ] IpfsFileAddStream
- [ ] IpfsFileCat
- [ ] IpfsFileGet
- [ ] IpfsBlockGet
- [ ] IpfsBlockPut
- [ ] IpfsBlockStat
- [ ] IpfsDagGet
- [ ] IpfsDagPut
- [ ] IpfsDagTree

#### Shapeshift (Cryptocurrency Conversion) | https://info.shapeshift.io/api - https://github.com/exodusmovement/shapeshift.io
- [ ] ShapeshiftCoins
- [ ] ShapeshiftDepositLimit
- [ ] ShapeshiftEmailReceipt
- [ ] ShapeshiftIsDown
- [ ] ShapeshiftMarketInfo
- [ ] ShapeshiftRecent
- [ ] ShapeshiftShift
- [ ] ShapeshiftStatus
- [ ] ShapeshiftTransactions



## uPort 
The uPort Decentralized Identity Platform creates an easy user on-boarding process. The `uport-connect` and `uport-js` Javascript libraries, provide simple mechanisms for decentralized logins.

Applications can request user decentralized documents directly from users via simple QR codes.

#### UPortAttestCredentialsRequest
##### /src/core/assimilation/containers/uport/UPortAttestCredentialsRequest
Easily request the core uPort Identity Fields during decentralized login:
- Name
- Email
- Location
- Phone

### Ethers (https://ethers.io)
The Eidenai Application can communicate directly with the Blockchain. The Ethereum Blockchain is available via the Ethers Module and the Infura (Scalable Blockchain Infrastructure).

Eidenai provides direct access to blockchain information via declarative React Containes/Components. For example developers can easily display any block information (hash, timestramp, gas, transactions, etc...) by simply placing the ```BlockchainBlockGet``` component in the render tree.

#### Communicate with the Ethereum Blockchain (via Infura)
<strong>Multiple providers are available:</strong> <em>Infura, Etherscan, and JsonRpc (Geth && Parity).</em>

React Components are available to easily sync information from the blockchain directly to the interface.

```

<Heading level={[3,5]} f={[3]} ta='center' mb={15} >
  Current Block Number: #<BlockchainBlockNumber/>
</Heading>
![Resources](docs/assets/images/eidenaiEthers.png)
![Resources](docs/assets/images/eidenaiEthers.png)
<Heading level={[3,5]} f={[3]} ta='center' mb={15} >
  Gas Price: <BlockchainGasPrice/>
</Heading>
<BlockchainBlockGet />
<BlockchainBlockGet blockNumber={4540119} />
<BlockchainBlockGet blockNumber={763123} />
```

![Resources](docs/assets/images/eidenaiEthers.png)

#### Example: uPort Credential Request
The following snippet initializes and monitors the **"status"** and **"data"** of a uPort Credential request.

```
import { fromUport } from 'store/departments/selectors'
import { uPortGetCredentialsRequest } from 'store/departments/actions'

const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetCredentialsRequest: ()=>dispatch(uPortGetCredentialsRequest({
    payload: {
      requested: ['name', 'avatar', 'country', 'phone'],
      notifications: true
    },
    metadata: {
      delta: 'credentials'
    }
  })),
})
```



#### Example: Ethers Blockchain Block
```
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
// Redux Store
import { fromEthers } from 'store/departments/selectors'
import { ethersBlockchainGetBlockRequest } from 'store/departments/actions'

// Components
import { 
  BlockchainBlockCard
} from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return null 
    this.props.ethersBlockchainGetBlockRequest({
      payload: {
        block: this.props.blockNumber,
      },
      metadata: {
        delta: `BlockchainBlockGet|${this.props.blockNumber}`
      }
    })
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainGetBlockRequest({
        payload: {
          block: this.props.blockNumber,
        },
        metadata: {
          delta: `BlockchainBlockGet|${this.props.delta}`
        }
      })
    }
  }
})

/*-* Redux Store *-*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.blockNumber}`) : fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'BlockchainBlockNumber')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetBlockRequest: (settings)=>dispatch(ethersBlockchainGetBlockRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(BlockchainBlockCard);
```


# Application Infrastructure

The Application has several import high-level folders

- assembly <----- WebAssebmly/C++
- build <----- Deployable Assets
- configuration <----- Build Management
- contracts <----- Ethereum Smart Contracts
- documentation 
- migrations <----- Deploy Configuration Smart Contracts
- public <----- Static Entry
- scripts <----- Build Logic
- src <---- Primary Javascript

The `src` folder contains the root entry files for the application, extensions and page plugins.

The `build` folder contains the bundled/optimized entry files for the application, extension and embedable dapps.

The `contracts` folder contains application specific smart contracts.

The `assembly` folder contains application specific C++/Go/Rust for WebAssembly target ouput.

The `embed` folder contains modular components/mini-applications with 1 line Javascript embeds

## Application
The primary build process is the Browser Application. 

## Embed (Page Plugin)

The Embed (page plugin) builds creates a mini-application, capable of being embedded on any website with 1 line of Javascript. The Page Plugin loads a "React mini-application" directly into the embeded location. So for example, if the Javascript was inserted in a Site's sidebar, the application would replace the script file in the DOM tree with the "mini-application", upon page load.

In the future this system might be optimized to load a single React library, but allow multiple Blockchain Interface components to be embbeded withni a site. This will serve both as a prototypging tool and potentially to help non-technical people deploy complex Blockchain technology solutions simply.

The Page Plugin build is currently in Alpha, because there is no real-world experimentation deployed yet, besides a simple Monero Browser Mining tool at http://harvest.surge.sh/#/ running as a simple test.


## Blockchain (Ethereum)
The Blockchain sector contains the essentials for prototypgina a modern Distributed Application. The Blockchain sector is under active prototyping. In other words, the infrastructure and module combinations are still being evaluated and tested.

1. Ethers (https://ethers.io)
2. uPort (https://www.uport.me)
3. Truffle (http://truffleframework.com)

## Interface (React)
The Interface sector is a full selection of React components/containers/entities, built with relatively strict adherence to the Atomic Design strategy.
- Redux (State Management)
- Sagas (Async Data Flow)
- Styled Components (Atomic Design)



#### Redux Store
Redux Store Departments, at a minimum, will include ```getDeltaData``` and ```getDeltaStatus``` selectors. In other words, check the status of the request and get the returned data payload.

```
export const getDeltaData = (state,delta) =>state[delta] && state[delta].data || null
export const getDeltaStatus = (state,delta) =>state[delta] && state[delta].status || null
```

## Backend (Firebase)
The Firebase sector provides the scalable infrastructure for application development right now. Mananging authentication, *"serverless"* functions, 

-  Firebase (NoSQL)
-  Authentication (OAuth + Phone Verification)
-  Realtime Database (Data Structure)

## Performant Computation (WebAssebmly)
The WebAssembly sector will provides the mechanisms for including low-level byte-code computations. In the future, it's predicted Distributed Applications will include more and more cryptography, including other computation intensive calculations, so it's important to start laying the foundation for robust WebAssembly integration.

## The Component Architecture
Multiple design and developments philosphies/ideas are experimented and implemented within the Application, to achieve the mission  rapid, scalable user experience/interface prototyping for distrubted autonomous organizations functionality. The boilerplate is meant to be adaptaive, so overtime solutions will be added/pruned accomodate more cross-application composability.

1. Component/Container Seperation
2. Atomic Design Philosophy
3. Functional State Management  

## Containers
#### Manage Data Flow 
Containers are primarily responsible for fetching and managing State with Redux. That being said, there may be a few instances where containers are responsible for interacting with different application mechanisms, besides just Redux. For example the Mining container  interacts with the coin hive application by loading the Javascript mining tool asynchronously, when a user requests the feature.

The primary Application containers are Ethers, Firestore and Graph.

### Ethers Container Example
The ```BlockchainBlockGet``` container queries the Blockchain by dispatching an action request, which is registered by the Ethers Saga Department. After the request is complete and verified within the Saga, the data will be returned to Redux. The requested Ethereum Block information is passed dkrectly from the Redux store into the display component props.

```
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  BlockchainBlockCard
} from 'foundry'
import { fromEthers } from 'store/departments/selectors'
import { ethersBlockchainGetBlockRequest } from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return null 
    this.props.ethersBlockchainGetBlockRequest({
      payload: {
        block: this.props.blockNumber,
      },
      metadata: {
        delta: `BlockchainBlockGet|${this.props.blockNumber}`
      }
    })
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainGetBlockRequest({
        payload: {
          block: this.props.blockNumber,
        },
        metadata: {
          delta: `BlockchainBlockGet|${this.props.delta}`
        }
      })
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.blockNumber}`) : fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'BlockchainBlockNumber')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetBlockRequest: (settings)=>dispatch(ethersBlockchainGetBlockRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(BlockchainBlockCard);

```


### Components
#### Interface Building Blocks
Components are the core building block of tht Frontend Interface. Incorporating the Atomic philosophy, components are categorized by significance, size and relevance within the Component hierarchy. Simply put, the similar to "the universe", which is built up of quarks, particles, atoms, molecules and organisms, so too is our Application. The components follow a simple hierarchy: quarks(css properties), atoms (links, input, svg, paragraphs), molecules (fields, slider, video) and organisms (tables, calendar, dialog), which for the most part allow for easier composition across a diverse range of interface/experience requirements.


### Entity Component Example
```
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'0',
  br: 5,
  of:'hidden'
}

export default (props) => {
  /*--- Extraction ---*/
  const{ data } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const nameDisplay = idx(props, _ => _.name.nameDisplay)
  const nameAlias = idx(props, _ => _.name.nameAlias)
  const phone = idx(props, _ => _.contact.contactPhone)
  const email = idx(props, _ => _.contact.contactEmail)
  const website = idx(props, _ => _.metadata.metadataWebsite)
  const imageBanner = idx(props, _ => _.images.imageBanner)

  const street = idx(props, _ => _.address.addressStreet)
  const city = idx(props, _ => _.address.addressCity)
  const zip = idx(props, _ => _.address.addressZip)

  if (!props.id) return null
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        {!imageBanner ? null : 
         <Link to={`/dashboard/${props.entity}/${id}`} color='blue'>
          <Box h={[100,160]} of='hidden' position='relative'>
            <BackgroundImage src={imageBanner}/>
          </Box>
        </Link>
        }
        <Box p={[10]} >
          <Link to={`/dashboard/${props.entity}/${id}`} color='blue' >
            <Heading 
              f={[3,4]}
              level={3}
              color='purple'
              children={nameDisplay} 
            />
          </Link>
          { !nameAlias?null:
          <Heading f={[2]} level={3} color='blue'>
            Alias: {nameAlias}
          </Heading>}
          { !website?null:
          <Heading f={[2]} level={3} color='blue' fw={[300]}><strong>Website: </strong>{website}</Heading>}
          { !email?null:
          <Heading f={[2]} level={3} fw={[300]}><strong>Email:</strong>{email}</Heading>}
          { !street ?null
          :<HorizontalRule bc='blue' o={0.3}/>
          }
          
          { !street ?null
          :<Heading f={[2]} level={3} fw={[300]}>Addresss: {street + ", " + city + " " + zip } </Heading>
          }
        </Box>
      </Box>
    </Flex>
}
```
