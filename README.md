# NFT/Token Collection browser

This is a [Next.js](https://nextjs.org/) project bootstrapped using the [`official base template`](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts) with Material UI installed.

It uses also
- Zustand
- We3Modal for wallet connection
- Ethers



## How to use

Install it and run:

**First you need to run the Backend (check the other repository)**

```bash
- Remplace the .env.rename file

$npm install
$npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

This project doesn't include tests due to time availability. But the backend project has linter, husky hooks, unit and e2e tests samples


## TO-DO Plan

This is the plan I followed to complete this project

- OK. Create a better layout for the homepage/dashboard
- OK. Create a specific layout for Log-In
- OK. Implement a wallet connect provider
- OK. Store the wallet address in zuztand state management
- OK. Component for user widget and connect/disconnect buttons
- OK. Build components for NFT listing OK, Token listing, add token/nft, search, etc.
- OK. Get projects from a NFT aggregator API (probably Coingecko)
- Get tokens from aggregator API (Coingecko). Tokens are not being stored
- Make it pretty

Build the backend
- OK. Generate a JWT from the signature in the frontend
- OK. Create the basic memory-stored service for: Login, Favorite projects CRUD
- OK. Implement the connection to the frontend
- OK. Change from memory store to database
- OK. Validate JWT access token