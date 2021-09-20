#TWEFamily #TBCToken #TWEToken #TWELottery #TomorrowWontExist #TWECryptoDev #ScrawnyViking

Instructional video of how to create and launch your own 10k NFT collection!

Follow along with the video for a Streamlined Dummy version A-Z how to make your art into a randomly generated Massive NFT Collection, without any code or crypto knowledge! - Becasue this is free, I pray that everyone who watches this and launches their own NFT collection, please send me one! And also buy a Twee the Bee NFT!!! https://tomorrowwontexist.github.io/tbcnft/

Join the TheBeeCollaborative Community @TBCToken in Telegram

Look at ValuableNote.md for some easy to remember and copy/pasteable tips

Please Like Subscribe and Comment on this video, it HELPS SO MUCH!!

***Frontend DApp "Minting Station" Starts Here***

Create an empty Repository on github.com, follow video, Do Not add a README or anything else, leave it empty. Name it whatever yo'd like.

now type...
cd (paste name of the new repository you just made)
npm install gh-pages --save-dev

Go to package.json line 27 and change homepage to yours. 
"http://<username>.github.io/<repository>"

Goto migrations folder - 2_smart_contract_migration.js // Change to your contracts name

Goto deploy files folder - Replace ABI from Strings with code inside ABICodeForVerification.txt

Goto public folder and replace Logos in both sizes, the the favicon... to create a .ico file...
open your logo in paintshop, then save it as a BMP-24 file and put a .ico at the end when saving.

Goto redux folder, then blockchain - blockchainActions.js // Line 54 and 57
Line 54 is Network ID, which network is your smart contract deployed on? // 1=Ethereum 4=Rinkby
Line 57 is contract address // Paste yours

Goto App.js and follow along with the video on how to make it your own.
npm start // Starts your local "live view" of your app.js website design progress

I would recommend hiring someone on fiverr to make this exactly how you want it. This is old school html website building and is very confusing if you've never experienced it. I have provided a basic template that you can easily change the text, logo, and colors. Any more than that is beyond what I want to do. This is a custom built APP that connects with WEB3 and cannot be integrated into sites like Wix, godaddy or Wordpress. Welcome to Blockchain and Cryptocurrency! The Future is Code.

Now you're ready...
run command...

git init

git remote add origin https://github.com/<username>/<repository>
git remote -v
npm run deploy // This runs the App and launches your DApp onto the github hosted Domain

You should now have a 2nd branch in your Repo named gh-pages.

git add --all // git add .
git commit -m "<message/description>"
git push origin master

YOU'RE NOW LIVE!!! GRATS!!! Go buy a rng Twee the Bee NFT if this helped you please! :-) 
https://tomorrowwontexist.github.io/tbcnft/