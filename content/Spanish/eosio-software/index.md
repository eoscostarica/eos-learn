---
date: 2016-03-09T20:08:11+01:00
title: El Blokchain de EOS
weight: 20
---

EOSIO es un protocolo de software de código abierto libre que provee a los desarrolladores y emprendedores una plataforma en la cual desarrollar, desplegar y correr aplicaciones descentralizadas de alto rendimiento.

El software de EOSIO introduce una nueva arquitectura de blockchain diseñada para permitir escalabilidad horizontal y vertical de aplicaciones descentralizadas. Esto es logrado creando una construcción similar a un sistema operativo en el cual las aplicaciones pueden ser construidas. El software provee cuentas, autenticación, bases de datos, comunicación asíncrona y la programación de aplicaciones en muchos núcleos CPU o clústeres. La tecnología resultante es una arquitectura blockchain que finalmente puede escalar a millones de transacciones por segundo, elimina las tarifas que el usuario debe pagar, permite un fácil y rápido despliegue y mantenimiento de aplicaciones descentralizadas, en el contexto de una blockchain con governanza.

## Características

- Tasa libre de transacciones limitadas.
- Baja latencia en la confirmación del bloque (0.5 segundos).
- Finalidad tolerante a fallas bizantinas de bajo costo.
- Diseñado para finalidades BFT opcionales de alta sobrecarga y baja latencia.
- Plataforma de Contratos Inteligentes impulsada por **Web Assembly**
- Diseñado para validación del cliente de forma liviana
- Transacciones recurrentes programadas.
- Seguridad de retraso de tiempo.
- Permisos jerárquicos basados en roles.
- Soporte para Hardware Biométrico
- Soporte para llaves de seguridad de hardware biométrico (por ejemplo, Apple Secure Enclave).
- Diseñado para ejecución paralela en el contexto libre de validación lógica
- Diseñado para Comunicación Inter Blokchain.

## Delegated Proof of Stake (DPoS)

<div class="rwd-media">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/OVKAOwzAwHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

A consensus algorithm is a process in computer science used to achieve agreement on a single data value among distributed processes or systems.

Blockchain technology relies on consensus algorithms to reach agreement among nodes. A blockchain can be thought of as a decentralized database that is managed by distributed computers on a peer-to-peer (P2P) network. Each peer maintains a copy of the ledger to prevent a single point of failure (SPOF). Updates and validations are reflected in all copies simultaneously.

EOSIO software utilizes the only known decentralized consensus algorithm proven capable of meeting the performance requirements of applications on the blockchain, Delegated Proof of Stake (DPOS). Under this algorithm, those who hold tokens on a blockchain adopting the EOSIO software may select block producers through a continuous approval voting system. Anyone may choose to participate in block production and will be given an opportunity to produce blocks, provided they can persuade token holders to vote for them.

 - [DPOS Consensus Algorithm - The Missing White Paper](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)
 - [BitShares DPOS](https://bitshares.org/technology/delegated-proof-of-stake-consensus/)

## Main Components

EOSIO comes with a number of programs. The primary ones that you will use, and the ones that are covered here, are:

- `nodeos` (node + eos = nodeos) - the core EOSIO node daemon that can be configured with plugins to run a node. Example uses are block production, dedicated API endpoints, and local development.
- `cleos` (cli + eos = cleos) - command line interface to interact with the blockchain and to manage wallets
- `keosd` (key + eos = keosd) - component that securely stores EOSIO keys in wallets.

The basic relationship between these components is illustrated in the following diagram. In the sections that follow, you will build the EOSIO components, and deploy them in a single host, single node test network (testnet) configuration.

<p align="center">
	<img src="/images/eos-blockchain/eos-system-architecture.png" width="100%">
  <br/>
  <small>source: developers.eos.io/eosio-nodeos/docs</small>
</p>

## EOSIO permissions

EOSIO permissions make it possible to strengthen account security to the point where lost or stolen keys become nothing more than minor inconveniences. This EOS Weekly episode covers what EOSIO permissions are at the conceptual level, and the trend towards a strong, mesh network of interconnected accounts.

<div class="rwd-media">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kTjF0-Edxw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Learn more at https://developers.eos.io/