// https://docs.ipfs.io/concepts/ipns/#example-ipns-setup-with-cli

// ipfs name publish /ipfs/(new CID)
Published to <IPNS>: /ipfs/(new CID)

// https://gateway.ipfs.io/ipns/k51qzi5uqu5dhl0enp0dupzorbyhsmsdj1aewjbghr0se5kb1w1s65dof038g5

TBCNFT URI for metadata = NFT image location
https://gateway.pinata.cloud/ipfs/QmYCufo3n1K78YYBYMs5zmRGFHY5C2apPerM9P6Git93tT/

// ^^ IPNS Static never changes, when you add file to folder, update CID of folder to be the new routed IPNS. + app.Pinata.cloud

Validate your metadata  
https://testnets-api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/ 
https://api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/ 

Pre Req Downloads
How to install .Git https://phoenixnap.com/kb/how-to-install-git-windows
How to install node.js https://nodejs.org/en/download/
How to install Ganache https://www.trufflesuite.com/docs/ganache/quickstart
How to install NPM https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
How to isntall Yarn https://classic.yarnpkg.com/en/docs/install/#windows-stable


How to install React App to Node https://github.com/gitname/react-gh-pages
npm install gh-pages --save-dev

Need to know commands... 

npm install
npm init
npm run deploy // Use for this Dapp
npm run build

git clone (repo copy/paste)
git init
git add .
git status
git commit -m "msg"
git pull origin main // after git clone run this for scratch project setup
git push origin main // pushes to github
git remote remove origin
git remote add origin "insert URL to repo with no .git at the end"
git push -u origin main (master) // if git push origin main doesnt work
git push --force origin main (master) // last resort

yarn install // Try not to mix npm and yarn in the same terminal
yarn add all // only use yarn add all if git clone and npm install fails

Ethereum netowrk = 1  // Change this in blockchainActions.js line 54
Rinkby = 4

Change Contract Address in src/redux/blockchain/blockchainAction.js line 57 
// + App.js line 69]

Change total supply on App.js lines 113 and 123
Change price of each NFT line 71

Add github.io domain to package.json line 27 
"homepage": "http://TomorrowWontExist.github.io/tbcnft", // "username".github.io/"repo"

Add these to lines 33-34
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

ABI Code goes into Contract folder, replace TBCNFTABI.json with yours (copy ABI from remix compile page)

Make ico file for Favicon and replace it in the Public folder, Also replace images 192x and 512x

Alter App.js and Index.js to fit your project

finally... 

npm run deploy
git add .
git commit -m "description message"
git push origin main

Grats you are live! Go Shill your NFT Project!!