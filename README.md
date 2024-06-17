# NFT/Token Collection browser

This is a [Next.js](https://nextjs.org/) project bootstrapped using the [`official base template`](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts) with Material UI installed.

## How to use

Install it and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## TO-DO Plan

I'm gonna first work completely in the frontend page, and implement a fake service to mock a backend, after everything is workingas expected that way, I will create the backend and change the connection.

- OK. Create a better layout for the homepage/dashboard
- OK. Create a specific layout for Log-In
- OK. Implement a wallet connect provider
- OK. Store the wallet address in zuztand state management
- OK. Component for user widget and connect/disconnect buttons
- OK. Build components for NFT listing OK, Token listing, add token/nft, search, etc.
- OK. Get projects from a NFT aggregator API (probably Coingecko)
- Get tokens from aggregator API (Coingecko)
- Make it pretty

Build the backend
- OK. Generate a JWT from the signature in the frontend
- Create the basic memory-stored service for: Login, Favorite projects CRUD
- Implement the connection to the frontend
- Change to database
- Validate access token in other pages