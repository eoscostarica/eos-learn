---
date: 2016-03-09T20:08:11+01:00
title: Desarrollo de Aplicaciones Descentralizadas
weight: 20
---

## Construyendo Aplicaciones Descentralizadas

{{<youtube DqbkxfUX5Kg>}}

Puedes ver más en este canal: https://www.youtube.com/user/jackodwhacko/videos

{{<youtube EbWDHrm2ETY>}}

Puedes ver más en este canal: https://www.youtube.com/user/grandmoren1/videos

{{<youtube J0SYv-GC3R0>}}

Puedes ver más en este canal: https://www.youtube.com/user/apexmaxable/videos

{{<youtube 4OmQ7Ow9baI>}}

## Empezando

https://developers.eos.io/eosio-cpp/docs/introduction-to-smart-contracts

## Framework de diseño

Un contrato es un acuerdo en el que se rigen ciertas acciones definidas, dando para ellas un conjuntot de valores de entrada o lo que denominamos en ingles "inputs". Un contrato puede ir desde el tipo financiero hasta algo más simple como las reglas de un juego. Las acciones comunes pueden ser transacciones de fondos (en el caso del contrato financiero) o movimientos de un juego (en el caso del contrato del juego).

Un contrato de EOSIO es software registrado en el blockchain y ejecutado en los nodos de EOSIO, los cuales implementan las semánticas de un contrato cuyo conjunto de acciones requeridas están siendo guardadas en el blockchain. El contrato inteligente define la interfaz (accinoes, parámetros, estructuras de datos) y el código que la implementa. El código es compilado en un formato llamado *bytecode canónico*, mismo que los nodos pueden obtener y ejecutar. El blockchain guarda las transacciones (como por ejemplo: transacciones legales, movimientos de juegos) en el contrato. Cada contrato inteligente debe ser acompañado por un **Contrato Ricardiano** el cual define la legalidad enlazando los términos y condiciones del contrato.

Escasez Digital [github repo](https://github.com/digital-scarcity/equiprental) tiene un ejemplo diseñado para proveer un framework paso a paso y ejemplos para crear un contrato inteligente en EOSIO. El mismo usa un simple caso de uso de alquiler de equipo el cual lista el equipo para rentar y los alquiladores quienes pagan el alquiler por esos ítemes.


### Pasos del proceso
Aquí se logran visualizar los pasos del proceso.
![alt text](/images/contracts/steps.png "Steps")

### Modelo de datos
Define los datos que persistirán en el contrato inteligente.
![alt text](/images/contracts/datamodel.png "Data Model")

### Acciones
Define las acciones, el estado de los cambios que deben existir en el contrato inteligente.
![alt text](/images/contracts/actions.png "Actions")

### Pre y Post-Condiciones
Define las acciones, el estado de los cambios que deben existir en el contrato inteligente.
![alt text](/images/contracts/prepostconditions.png "Pre- and Post-Conditions")

## Contratos Inteligentes de código abierto

EOS Costa Rica mantiene una lista de contratos inteligentes de EOS de código abierto que puedes usar como referencia, los cuales se encuentran en el siguiente repositorio:

https://github.com/eoscostarica/eos-contracts

## Jungle Testnet

{{<youtube s3EM3Hw1S8I>}}

More at https://jungletestnet.io

## Kylin Testnet

https://www.cryptokylin.io/

## Development Environment

EOS Local provides a really quick way to setup an EOS local network with IPFS using docker.
**EOS Local** provee una realmente rápida manera de configuar una red local de EOS con IPFS usando docker.

https://github.com/eoscostarica/eos-local

EOSIO.CDT (Contract Development Toolkit) es un conjunto de herramientas usada para desarrollar contratos de EOSIO.

https://github.com/EOSIO/eosio.cdt 

Contratos de desarrollo de EOSIO basados en python y framework de pruebas.

https://github.com/tokenika/eosfactory

## Plantilla de EOSIO de Aplicaciones Descentralizadas

Esta plantilla provee una muy rápida manera de empezar con el desarrollo de aplicaciones en la plataforma de EOSIO. Es una opinada selección de tecnologías que te permitirán construir aplicaciones descentralizadas EOSIO escalables y de alto rendimiento.

https://github.com/eoscostarica/eos-dapp-boilerplate 

## Portal de Desarrolladores de EOSIO

https://developers.eos.io/

## IPFS Almacenamiento Descentralizado - IPFS

{{<youtube 5Uj6uR3fp-U>}}

{{<youtube HUVmypx9HGI>}}

