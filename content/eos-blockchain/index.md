---
date: 2016-03-09T20:08:11+01:00
title: The EOS Blockchain
weight: 30
---

## Introduction

The EOS.IO software introduces a new blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications. This is achieved by creating an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication and the scheduling of applications across many CPU cores or clusters. The resulting technology is a blockchain architecture that may ultimately scale to millions of transactions per second, eliminates user fees, and allows for quick and easy deployment and maintenance of decentralized applications, in the context of a governed blockchain

## EOS Architecture

EOSIO comes with a number of programs. The primary ones that you will use, and the ones that are covered here, are:

- `nodeos` (node + eos = nodeos) - the core EOSIO node daemon that can be configured with plugins to run a node. Example uses are block production, dedicated API endpoints, and local development.
- `cleos` (cli + eos = cleos) - command line interface to interact with the blockchain and to manage wallets
- `keosd` (key + eos = keosd) - component that securely stores EOSIO keys in wallets.

The basic relationship between these components is illustrated in the following diagram. In the sections that follow, you will build the EOSIO components, and deploy them in a single host, single node test network (testnet) configuration.

<p align="center">
	<img src="/images/eos-blockchain/eos-system-architecture.png" width="600">
  <br/>
  <small>source: developers.eos.io/eosio-nodeos/docs</small>
</p>


## EOS DApp Stack

<p align="center">
	<img src="/images/eos-blockchain/eos-application-stack.png" width="600">
  <br/>
  <small>source: steemit.com/eos/@eosio/introducing-eos-io-application-stack</small>
</p>


## Characteristics

- Free Rate Limited Transactions.
- Low Latency Block confirmation (0.5 seconds).
- Low-overhead Byzantine Fault Tolerant Finality.
- Designed for optional high-overhead, low-latency BFT finality.
- Smart contract platform powered by Web Assembly.
- Designed for Sparse Header Light Client Validation.
- Scheduled Recurring Transactions.
- Time Delay Security.
- Hierarchical Role Based Permissions.
- Support for Biometric Hardware Secured Keys (e.g. Apple Secure Enclave).
- Designed for Parallel Execution of Context Free Validation Logic.
- Designed for Inter Blockchain Communication.
