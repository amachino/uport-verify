# uPort Verify

```
-------- Step 1 --------
git clone git@github.com:uport-project/uport-verify.git ; cd uport-verify

-------- Step 2 --------
npm install || yarn

------- Step 3 -------
yarn build => development
yarn start => production

```

### Overview

Verifiable credentials are the basis of digital identity. This application is designed to help users get started with uPort by earning simple credentials. Users can complete a simple flow (like email verification, or a post to a social profile) to prove a fact. The application then issues the user a credential attesting to that fact.

This application is a utility service that sits atop the uPort system. It also serves as a reference implementation to guide other developers in creating their own applications.

To start, this application will:
1. Verify a user's ownership of an online profile
2. Issue a private or public claim of ownership to that user's uPort ID

The individual can re-use this credential across a growing network of integrated applications. Users will begin to build strong identities, which will unlock other decentralized services and help bridge the gap between web 2.0 and web 3.

We start by building a flow to allow uPort users to verify their email address: https://github.com/uport-project/uport-verify/issues/1

Then, we'll add the ability for a user to create an on-chain claim of ownership for a Twitter or Github account (spec & bounty coming soon)
