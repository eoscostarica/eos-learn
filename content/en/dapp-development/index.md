---
date: 2016-03-09T20:08:11+01:00
title: DApp Development
weight: 20
---

## Building Decentralized Apps

{{<youtube DqbkxfUX5Kg>}}

More on Jackson Kelley's channel https://www.youtube.com/user/jackodwhacko/videos

{{<youtube EbWDHrm2ETY>}}

More on NSJames's channel https://www.youtube.com/user/grandmoren1/videos

{{<youtube J0SYv-GC3R0>}}

More on Max G's channel https://www.youtube.com/user/apexmaxable/videos

{{<youtube 4OmQ7Ow9baI>}}


## Getting Started 

https://developers.eos.io/eosio-cpp/docs/introduction-to-smart-contracts

## Design Framework 

A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).

An EOSIO smart contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a canonical bytecode format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.

Digital Scarcity's [github repo](https://github.com/digital-scarcity/equiprental) has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items.

### Process Steps
Here are the general steps to developing a smart contract.
![alt text](/images/contracts/steps.png "Steps")

### Data Model
Define the data that will be persisted in the smart contract
![alt text](/images/contracts/datamodel.png "Data Model")

### Actions
Define the actions, or state changes, that must exist in your smart contract
![alt text](/images/contracts/actions.png "Actions")

### Pre and Post-Conditions
Define the actions or state changes, that must exist in your smart contract
![alt text](/images/contracts/prepostconditions.png "Pre- and Post-Conditions")

## Open Source Smart Contracts 

EOS Costa Rica maintains a list of open-source EOS smart contracts you can use as reference in the following repo:

https://github.com/eoscostarica/eos-contracts

## Jungle Testnet
{{<youtube s3EM3Hw1S8I>}}

More at https://jungletestnet.io

## Kylin Testnet

https://www.cryptokylin.io/

## Development Environment

EOS Local provides a really quick way to set up an EOS local network with IPFS using docker.

https://github.com/eoscostarica/eos-local

EOSIO.CDT (Contract Development Toolkit) is a suite of tools used to build EOSIO contracts.

https://github.com/EOSIO/eosio.cdt 

Python-based EOS smart-contract development & testing framework.

https://github.com/tokenika/eosfactory

## EOSIO DApp Boilerplate

This boilerplate provides a very quick way to get started with application development on the EOSIO platform. It's an opinioned selection of technologies that will allow you to build performant and scalable EOSIO dApps.

https://github.com/eoscostarica/eos-dapp-boilerplate 

## EOSIO Developers Portal

https://developers.eos.io/

## Decentralized Storage - IPFS
{{<youtube 5Uj6uR3fp-U>}}

{{<youtube HUVmypx9HGI>}}
