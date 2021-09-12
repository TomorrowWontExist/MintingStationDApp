const SmartContract = artifacts.require("TheBeeCollaborative");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
