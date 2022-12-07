# NFT-event-tickets
prototype of an event ticket system based on NFTs (ERC-721)

## prerequisites

* node.js needs to be installed on your machine
* run `npm install`
* a valid Ethereum account is necessary, which must be funded with enough ETH to pay the gas costs

## deploy the contracts

edit the parameters [here](NFT-tickets/blob/master/migrations/2_deploy_contracts.js)
and run `truffle deploy`

## why use it?

This projected is intended to help event organizers and event attendees to manage their tickets by using blockchain technology. The abstract concept of a "ticket" is implemented as an NFT (ERC-721 token), and in this project, we also implement a handful of functions for both types of users to handle their tickets without the necessity of third party platforms.

## How to use it?

Everything starts with the event organizer, who is responsible for creating an Event. An Event is created with a deploy of the Smart Contract on the Network. When deploying, the Event Organizer already sets some parameters:
![image](https://user-images.githubusercontent.com/62962137/206019966-d97b9e6b-0eb9-4276-82cc-e193fee576ac.png)

### Event Organizer Functions
The Event Organizer, the account that deployed the contract, also has access to some functions that other accounts cannot use. They are:

```js
- function setEventStartDatetime(uint64 _eventStartDatetime)
- function setTicketSupply(uint64 _ticketSupply)
- function setMaxPriceFactorInPercentage(uint64 _maxPriceFactorInPercentage)
- function setTicketTransferFeeInPercentage(uint64 _transferFeeInPercentage)
- function setTicketToUsed(uint256 _ticketId)
- function setWithdrawalAddress(address payable _addr)
- function withdrawBalance()
```

So, basically, the Event Organizer can **set** all the attributes present in the contract constructor, also being able to set a ticket status to "used" and withdrawing the balance of the contract / changing the withdrawal address (if they want to).

### General User Functions
Other accounts also can interact with the Smart Contract, so that other users are able to buy, sell, and use their Tickets. These accounts have access to the functions:

```js
- function buyTicket()
- function buyTicketFromAttendee(uint256 _ticketId)
- function checkTicketOwnership(uint256 _ticketId)
- function approveAsBuyerOfTicket(uint256 _ticketId, address _buyer)
- function destroyTicket(uint256 _ticketId)
- function setTicketPrice(uint256 _ticketId, uint256 _price)
- function setTicketForSale(uint256 _ticketId)
- function cancelTicketSale(uint256 _ticketId)
- function getTicket(uint256 _id)
- function getTicketPrice(uint256 _ticketId)
- function getTicketMaxPrice(uint256 _ticketId)
- function getTicketCalculatedTransferFee(uint256 _ticketId)
- function getTicketStatus(uint256 _ticketId)
- function getTicketResaleStatus(uint256 _ticketId)
```

Besides getting all ticket information, the users can, basically:
- Buy a ticket directly from the Event Organizer (primary market)
- Buy a ticket from another atendee, but only after it's approval (secondary market)
- Check if one person is the owner of a ticket they claim to be
- Delete the ticket
- Set the ticket price and put it to sale (secondary market)
- Cancel it's sale (secondary market)