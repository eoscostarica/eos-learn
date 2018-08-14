---
title: "EOS Costa Rica Dev Learning Tools"
date: 2018-08-14T09:24:57-06:00
---

## EOS Developer Learning Tools

Our development team is constantly working on providing new tools to help the community build on EOS and learn from our experiences, here is a lost of tools we have made available to the community so far.

### [EOS dApp Development Environment](https://github.com/eoscostarica/eos-dapp-dev-env)

A docker compose based development environment for EOS dApp Development.
This is easiest way maintain a local environment for development that is guaranteed to work out-of-the-box across the different host operating systems: Mac OS, Windows and Linux.

---

### [EOS API module ( in CamelCase 🐫)](https://github.com/eoscostarica/eosjs-camel-api)
Application programming interface for using the EOS blockchain via the RPC API provided by Block Producer Nodes. This is for read-only API calls.

This project wraps the official eosio/eosjs-api to provide camelcase output. It only works with await/async and promise code style, there's no support for the callback style.

---

### [Fastify + EOS](https://github.com/eoscostarica/fastify-eos)
A plugin that decorates Fastify with an EOS.js instance.