// https://docs.ipfs.io/concepts/ipns/#example-ipns-setup-with-cli

ipfs name

// ipfs name publish /ipfs/(new CID)
Published to <IPNS>: /ipfs/(new CID)

// https://gateway.ipfs.io/ipns/k51qzi5uqu5dhl0enp0dupzorbyhsmsdj1aewjbghr0se5kb1w1s65dof038g5

// ^^ IPNS Static never changes, when you add file to folder, update CID of folder to be the new routed IPNS. + app.Pinata.cloud


Pre Req Downloads
How to install .Git https://phoenixnap.com/kb/how-to-install-git-windows
How to install node.js https://nodejs.org/en/download/
How to install Ganache https://www.trufflesuite.com/docs/ganache/quickstart
How to install NPM https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
How to isntall Yarn https://classic.yarnpkg.com/en/docs/install/#windows-stable


Need to know commands... 

npm install
npm init
npm run deploy // Use for this Dapp
npm run build

git clone (repo copy/paste)
git add .
git commit -m "msg"
git push origin main

yarn install
yarn add all
clear

Ethereum netowrk = 1
Rinkby = 4

Change Contract Address in src/redux/blockchain/blockchainAction.js line 57 
// + App.js line 69

Add github.io domain to package.json line 27 
"homepage": "http://TomorrowWontExist.github.io/tbcnft",

Add these to lines 33-34
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

ABI Code goes into Contracts folder, replace yours with the TBCNFTABI.json (copy ABI from remix compile page)

Make ico file for Favicon and replace it in the Public folder, Also replace images 192x and 512x

Alter App.js and Index.js to fit your project