const HelloWorld = artifacts.require("HelloWorld");
const ZombieFactory = artifacts.require("ZombieFactory");

module.exports = (deployer) => {
  deployer.deploy(HelloWorld);
  deployer.deploy(ZombieFactory);
};