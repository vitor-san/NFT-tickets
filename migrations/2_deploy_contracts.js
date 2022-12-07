var EventTicketSystem = artifacts.require("./EventTicketSystem.sol");

module.exports = function(deployer) {
  
  // define event parameters used for all tickets for a specific event
  let eventName = "TUSCA 2022";
  let eventSymbol = "TUSCA"
  let eventStartDate = 1668272400;  // epoch timestamp. Refer to https://www.epochconverter.com/
  let maxSupply = 15000;
  let initialPrice = 14000; // in WEI
  let maxPriceFactorInPercentage = 150;
  let transferFee = 10; // in percentage

  let initialPriceInWei = web3.utils.toWei(web3.utils.toBN(initialPrice));
  let d = new Date(eventStartDate*1000).toLocaleDateString("pt-BR");
  
  console.log('Deploying contract for event ',eventName,'(',eventSymbol,') on ',d);
  console.log('A maximum of',maxSupply,'tickets are available');
  console.log('The initial ticket price is',initialPrice,'ETH');
  console.log('Ticket prices are only allowed to be a factor of',maxPriceMultiple,'of the initial ticket price');
  console.log('The ticket transfer fee between attendees is set to ',transferFee,'% of the ticket price');    
  
  //deploy contract with parameters
  deployer.deploy(EventTicketSystem, eventName, eventSymbol, eventStartDate, maxSupply, initialPriceInWei, maxPriceMultiple, transferFee).then(() => {
    console.log('Deployed EventTicketSystem contract with address', EventTicketSystem.address);
  });
};