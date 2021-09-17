//INSTRUCTIONS ON IPFS/IPNS  Metatadata .json ImageURI <p/> NEED TO KNOW<p/>
Install<p/>
https://docs.ipfs.io/install/ipfs-desktop/<p/>
<p/>
Add a file to to IPFS, Any file it DOES NOT matter<p/>
    Click the 3 dots on right side of the newly uploaded file, and click copy CID<p/>
Alternativly, make a txt file from your terminal to get your CID<p/>
    eg. CID -- QmWVBgiGHv8uahddSNMX5L2nuc8eSN3zSvByvp44w97dwA<p/>
<p/>
echo "Hello, world!" > hello.txt<p/>
ipfs add hello.txt <p/>
//a new line will be created, copy that long code it gives you (CID)<p/>
<p/>
ipfs name publish /ipfs/ <--- insert CID no spaces<p/>
<p/>
//You should see this if properly executed...<p/>
Published to <IPNS>: /ipfs/(new CID)<p/>
    now copy the IPNS // it looks like a CID<p/>
<p/>
CONGRATS! You have successfully figured out the most common mistake when trying to mint NFT's to opensea and the images won't show up! <p/>
<p/>
Here's your baseURI to use in the config.js file of your Art Generator

https://gateway.ipfs.io/ipns/<--- Paste IPNS here<p/>
<p/>
    before you auto generate your NFT's. This allows your metadata .json files to have a static address that you can later update at any time<p/>
   <p/> 
IPNS is Static and never changes, when you add or replace a file to the folder that is routing to your IPNS, you must update the CID by running the command again...<p/>
<p/>
ipfs name publish /ipfs/<--- New CID  // You can do this infinitely. <p/>
<p/>
DEBUGGING META DATA // Images not showing up on Opensea afrer deployment? Check why here<p/>
<p/>
https://testnets-api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/ <p/>
<p/>
https://api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/<p/>
<p/>
<p/><p/><p/>
Pre Req Downloads<p/> DOWN LOAD EVERYTHING HERE BEFORE YOU BEGIN!!! THEN RESTART PC!
How to install node.js https://nodejs.org/en/download/<p/>
How to install NPM https://docs.npmjs.com/downloading-and-installing-node-js-and-npm<p/>
How to install .Git https://phoenixnap.com/kb/how-to-install-git-windows<p/>
How to install Ganache https://www.trufflesuite.com/docs/ganache/quickstart<p/>
How to isntall Yarn https://classic.yarnpkg.com/en/docs/install/#windows-stable<p/>
How to install IPFS https://ipfs.io/#install<p/>
Also make an Account at Github.com - You're going to need this!<p/>
<p/>
You will also need to be logged in to your Wallet with Metamask and have Rinkby Test Ethereum, you can get it here https://faucet.rinkeby.io/ - Tweet your wallet address, copy the tweet link and paste it in the Address box at the website. Click 18.75 ETH / 3 days
<p/>
How to install React App to Node https://github.com/gitname/react-gh-pages<p/>
npm install gh-pages --save-dev // Deploying Front End Dapp (minting station) to Github<p/>
<p/>
Need to know commands... <p/>
node index.js
<p/>
npm install -g npm<p/>
npm install<p/>
npm init // initialize (this is how setup your directory and give project description)<p/>
npm run deploy // Use for this Dapp<p/>
npm run build<p/>
<p/>
git clone (repo copy/paste)<p/>
git init<p/>
git add .<p/>
git status<p/>
git commit -m "msg"<p/>
git pull origin main // after git clone run this for scratch project setup<p/>
git push origin main // pushes to github<p/>
git remote remove origin<p/>
git remote add origin "insert URL to repo with no .git at the end"<p/>
git push -u origin main (master) // if git push origin main doesnt work<p/>
git push --force origin main (master) // last resort<p/>
<p/>
yarn install // Try not to mix npm and yarn in the same terminal<p/>
yarn add all // only use yarn add all if git clone and npm install fails<p/>
<p/>
Ethereum netowrk = 1  // Change this in blockchainActions.js line 54<p/>
Rinkby = 4<p/>
<p/>
Change Contract Address in src/redux/blockchain/blockchainAction.js line 57 <p/>
// + App.js line 69<p/>
<p/>
Change total supply on App.js lines 113 and 123<p/>
Change price of each NFT line 71<p/>
<p/>
How to Deploy DAPP the EASY way with free github.io domain https://www.youtube.com/watch?v=pYHTCmhK734 <p/>

Add github.io free hosting domain to package.json line 27 <p/>
"homepage": "http://TomorrowWontExist.github.io/tbcnft", // "username".github.io/"repo" <p/>

Add these to lines 33-34<p/>
    "predeploy": "npm run build",<p/>
    "deploy": "gh-pages -d build"<p/>
    <p/>
ABI Code goes into Contract folder, replace TBCNFTABI.json with yours (copy ABI from remix compile page) This is optional, our ABI codes are Exactly the same if you don't alter the code.

Make ico file for Favicon and replace it in the Public folder, Also replace images 192x and 512x<p/> Make ICO file by opening Logo with Paint, saving it as BMP 24bit and adding .ico to the end of the file. Replace the file in the Directory with the current one.
<p/>
Alter App.js and Index.js to fit your project<p/>
<p/>
// Don't want # images on top left? Goto line 163 of Index.js and // in front of SignImage<p/>
<p/>
finally... <p/>
<p/>
npm run deploy<p/>
git add .<p/>
git commit -m "description message"<p/>
git push origin<p/>
<p/>

MAC USERS : if you have problem getting IPFS to run in this terminal, check this out https://m.youtube.com/watch?v=xoZ1v7G_ZFg&t=198s