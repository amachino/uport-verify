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

Overview

The uPort Dencetralized Identity verifier provides decentralized identites to claim "ownership" of an existing Web 2.0 Internet account: email, twitter, github, etc...

Verifiable claims are the basis of a digital identity.

For many new users, it can be a challenge to connect a uPort ID to the traditional digital or physical forms of identification we’re used to. The Web 3.0 Trust Manager provide a way for users to begin strengthening their decentralized identities. 

Application Long-Term Objectives

The Web 3.0 Verification Services long-term objectivesare to provide an easy solution for everyday users to easily manage reputation and trust in the emerging decentralized application ecosystem. Perhaps the easiest way for users to "capture" trust and reputation on the Internet right now is simply to associate existing centralized applications accounts.

1. Verify decentralized identity ownership of an online profile
2. Issue a private or public claim of ownership to the user.
3. Easily manage existing associated accounts for user interface.

The individual can re-use this credential across a growing network of integrated applications. Users will begin to build strong identities, which will unlock other decentralized services and help bridge the gap between web 2.0 and web 3.

Bountied Issues

- DESIGN - Email Verification Process - Intermediate | 150 DAI
- FRONTEND - React Components - Intermediate | 250 DAI
- INFRASTRUCTURE - Firebase Cloud Function - Intermediate | 250 DAI
- INFRASTRUCTURE - AWS Lambda Function - Intermediate | 250 DAI
- INFRASTRUCTURE - iExec Dentralized Function - Advanced | 350 DAI

### Stage 1 - Email Verification

The first verification feature will be email verification. A uPort user should easily have the ability to verify ownership of an email account.

Fortunately Mike Xu (https://github.com/mi-xu) recently published a uport-email-verify module. The decentralized email verification module can be found at https://github.com/mi-xu/uport-verify-email and installed into an existing project via npm install uport-verify-email

#### What's Required

The uPort Product Management Stream (@bdresser) has outlined application user flow to help guide application development.

- User loads Verify and is prompted for their email address
- User enters email address, taps continue, Verify emails the user a QR code
- User scans the QR code from email
- User is pushed an attestation for email verification
- [Optional] Verify sends a second email with email verification encoded in QR

Frontend
1. Email Capture Form (Redux Form)
2. Request State Management (Redux Sagas)

Backend

1. Receive an email address, and send a selective disclosure QR to said email
2. QR contains the email address, as well as request for MNID & push token
3. Callback for selective disclosure request is something like https://api.uport.me/verify
4. Receive selective disclosure response, parse verified email address, create & sign attestation saying MNID owns that email
5. Push attestation to the user (or send another email with attestation QR)
