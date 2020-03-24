---
date: 2016-03-09T20:08:11+01:00
title: "El Blockchain de EOS"
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

{{<youtube OVKAOwzAwHI>}}

Un Algoritmo de consenso es un proceso en Ciencias de la Computación usado para lograr acuerdo en un sólo valor de datos entre procesos o sistemas distribuidos.

La tecnología Blockchain depende de Algoritmos de Consenso para lograr un acuerdo entre los nodos. Un blokchain puede ser pensado como una base de datos descentralizada que es manejada por computadoras distribuidas en una red de punto a punto (P2P). Cada punto mantiene una copia del estado de la red para prevenir un punto único de fallo (en inglés SPOF). Actualizacioes y validaciones son reflejadas en todas las copias simultáneamente.

El software EOSIO utiliza el único conocido Algoritmo de Consenso Descentralizado probado capaz de cumplir los requerimientos de rendimiento de las aplicaciones en el blockchain, **Prueba de Participación Delegada** (Delegated Proof of Stake - DPOS). Bajo este algoritmo, aquellos que mantienen token en el blockchain adoptando el software EOSIO pueden seleccionar los productores de bloques através de un sistema de aprobación continua. Cualquiera que elija participar en la producción de bloques tendrán la oportunidad de producirlos, siempre que puedan persuadir a los titulares de tokens para que voten por ellos.

 - [DPOS Algoritmo de Consenso](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)
 - [BitShares DPOS](https://bitshares.org/technology/delegated-proof-of-stake-consensus/)

## Componentes Principales

EOSIO viene con varios programas. Los principales que verás, y los que son cubiertos aquí son:

- `nodeos` (node + eos = nodeos) - el demonio de node del núcleo de EOSIO que puede ser configurado con plugins para correr un nodo. Ejemplos de uso son producción de bloques, API endpoints dedicados y desarrollo local.
- `cleos` (cli + eos = cleos) - interfaz de línea de comandos para interactuar con el blokchain y para manejar billeteras.
- `keosd` (key + eos = keosd) - component que guarda de forma segura las llaves de EOSIO en las billeteras.

The basic relationship between these components is illustrated in the following diagram. In the sections that follow, you will build the EOSIO components, and deploy them in a single host, single node test network (testnet) configuration.

La relación básica entre estos componentes es ilustrada en el siguiente diagrama. En las siguientes secciones, usted construirá los componentes de EOSIO y desplegarlos en un único host, una configuración de un único nodo de red de prueba (testnet).
<p style="align: center">
	<img src="/images/eos-blockchain/eos-system-architecture.png" width="100%">
  <br/>
  <small>fuente: developers.eos.io/eosio-nodeos/docs</small>
</p>

## Permisos de EOSIO

Los permisos de EOSIO hacen posible fortalecer la seguridad de la cuenta al punto donde la pérdida o robo de las llaves son nada más que pequeñas inconveniencias. Este episodio semanal de EOS cubre qué son los permisos de EOSIO a un nivel conceptual y la tendencia a redes de cuentas interconectadas fuertes.

{{<youtube kTjF0-Edxw8>}}
Aprende más en https://developers.eos.io/