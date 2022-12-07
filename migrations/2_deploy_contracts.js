var EventTicketSystem = artifacts.require("./EventTicketSystem.sol");

module.exports = function (deployer) {

  // Define event parameters used for all tickets for a specific event
  let eventName = "TUSCA 2022";
  let eventSymbol = "TUSCA"
  let eventStartDatetime = 1668272400;  // Epoch timestamp. Refer to https://www.epochconverter.com/
  let eventTicketSupply = 15000;
  let initialPrice = 14000; // In WEI
  let maxPriceFactorInPercentage = 200;
  let transferFeeInPercentage = 5;

  let initialPriceInWei = web3.utils.toWei(web3.utils.toBN(initialPrice));
  let d = new Date(eventStartDatetime * 1000).toLocaleDateString("pt-BR");

  console.log('Deploying contract for event ', eventName, '(', eventSymbol, ') on ', d);
  console.log('A maximum of', eventTicketSupply, 'tickets are available');
  console.log('The initial ticket price is', initialPrice, 'ETH');
  console.log('Ticket prices are only allowed to be ', maxPriceFactorInPercentage, '% of the initial ticket price, at maximum');
  console.log('The ticket transfer fee between attendees is set to ', transferFeeInPercentage, '% of the ticket price');

  //deploy contract with parameters
  deployer.deploy(EventTicketSystem, eventName, eventSymbol, eventStartDatetime, eventTicketSupply, initialPriceInWei, maxPriceFactorInPercentage, transferFeeInPercentage).then(() => {
    console.log('Deployed EventTicketSystem contract with address', EventTicketSystem.address);
  });
};