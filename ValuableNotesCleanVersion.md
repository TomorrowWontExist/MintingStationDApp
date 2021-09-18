//INSTRUCTIONS ON IPFS/IPNS  Metatadata .json ImageURI  NEED TO KNOW
Install
https://docs.ipfs.io/install/ipfs-desktop/

Add a file to to IPFS, Any file it DOES NOT matter
    Click the 3 dots on right side of the newly uploaded file, and click copy CID
Alternativly, make a txt file from your terminal to get your CID
    eg. CID -- QmWVBgiGHv8uahddSNMX5L2nuc8eSN3zSvByvp44w97dwA

echo "Hello, world!" > hello.txt
ipfs add hello.txt 
//a new line will be created, copy that long code it gives you (CID)

ipfs name publish /ipfs/ <--- insert CID no spaces

//You should see this if properly executed...
Published to <IPNS>: /ipfs/(new CID)
    now copy the IPNS // it looks like a CID

CONGRATS! You have successfully figured out the most common mistake when trying to mint NFT's to opensea and the images won't show up! 

Here's your baseURI to use in the config.js file of your Art Generator

https://gateway.ipfs.io/ipns/<--- Paste IPNS here

    before you auto generate your NFT's. This allows your metadata .json files to have a static address that you can later update at any time
    
IPNS is Static and never changes, when you add or replace a file to the folder that is routing to your IPNS, you must update the CID by running the command again...

ipfs name publish /ipfs/<--- New CID  // You can do this infinitely. 

DEBUGGING META DATA // Images not showing up on Opensea afrer deployment? Check why here

https://testnets-api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/ 

https://api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/

How to install React App to Node https://github.com/gitname/react-gh-pages
npm install gh-pages --save-dev // Deploying Front End Dapp (minting station) to Github

Need to know commands... 

npm install -g npm
npm install
npm init // initialize (this is how setup your directory and give project description)
npm run deploy // Use for this Dapp to deploy to Github
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

ipfs name resolve

Ethereum netowrk = 1  // Change this in blockchainActions.js line 54
Rinkby = 4

Change Contract Address in src/redux/blockchain/blockchainAction.js line 57 
// + App.js line 69

Change total supply on App.js lines 113 and 123
Change price of each NFT line 71

How to Deploy DAPP the EASY way with free github.io domain https://www.youtube.com/watch?v=pYHTCmhK734 

Add github.io free hosting domain to package.json line 27 // Already done, change to your own
"homepage": "http://TomorrowWontExist.github.io/tbcnft", // "username".github.io/"repo" 

Add these to lines 33-34 // Already done for you in this code
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    
ABI Code goes into Contract folder, replace TBCNFTABI.json with yours (copy ABI from remix compile page)

Make ico file for Favicon and replace it in the Public folder, Also replace images 192x and 512x

Alter App.js and Index.js to fit your project

// Don't want # images on top left? Goto line 163 of Index.js and // in front of SignImage

finally... 

npm run deploy
git add .
git commit -m "description message"
git push origin // If your 

