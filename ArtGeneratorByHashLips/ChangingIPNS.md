// https://docs.ipfs.io/concepts/ipns/#example-ipns-setup-with-cli

ipfs daemon

ipfs name publish /ipfs/ <--- insert CID no spaces

// You should see this if properly executed...
Published to <IPNS>: /ipfs/(new CID)

// My IPNS - https://gateway.ipfs.io/ipns/k51qzi5uqu5dhl0enp0dupzorbyhsmsdj1aewjbghr0se5kb1w1s65dof038g5

// ^^ IPNS Static never changes, when you add file to folder, update CID of folder to be the new routed IPNS.


DEBUGGING META DATA

https://testnets-api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/ 

https://api.opensea.io/asset/<your_contract_address>/<your_token_id>/validate/