---
title: "EOS Smart Contracts"
date: 2018-09-13T14:51:37-06:00
---

A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).

An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a canonical bytecode format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.

Read More : https://developers.eos.io/eosio-cpp/docs

## Smart Contract Design Framework 
Digital Scarcity's [github repo](https://github.com/digital-scarcity/equiprental) has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items.

### Process Steps
Here are the general steps to developing a smart contract.
![alt text](/static/images/contracts/steps.png "Steps")


### Data Model
Define the data that will be persisted in the smart contract
![alt text](/static/images/contracts/datamodel.png "Data Model")

### Actions
Define the actions, or state changes, that must exist in your smart contract
![alt text](/static/images/contracts/actions.png "Actions")

### Pre- and Post-Conditions
Define the actions, or state changes, that must exist in your smart contract
![alt text](/static/images/contracts/prepostconditions.png "Pre- and Post-Conditions")


## Tutorial

[How to develop your first EOS dAPP Step by Step – Part 1 : EOSIO Setup](https://trybe.one/how-to-develop-your-first-eos-dapp-setup-step-by-step-part-1-of-3-eosio-setup/ref/749/)

[How to develop your first EOS dAPP Step by Step – Part 2 : Smart Contract](https://trybe.one/how-to-develop-your-first-eos-dapp-setup-step-by-step-part-2-smart-contract/ref/749/)

[How to develop your first EOS dAPP Step by Step – Part 3 : Web dApp](https://trybe.one/how-to-develop-your-first-eos-dapp-step-by-step-part-3-of-3-web-dapp/ref/749/)


