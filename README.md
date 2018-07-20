<p align="center">
	<a href="https://travis-ci.org/eoscostarica/eos-learning-resources">
		<img src="https://travis-ci.org/eoscostarica/eos-learning-resources.svg?branch=master" alt="TravisCI">
	</a>
	<a href="http://standardjs.com">
		<img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="StandardJS">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
	<a href="https://discord.gg/bBpQHym">
		<img src="https://img.shields.io/discord/447118387118735380.svg?logo=discord" alt="chat on Discord">
	</a>
	<a href="https://twitter.com/intent/follow?screen_name=eoscostarica">
		<img src="https://img.shields.io/twitter/follow/eoscostarica.svg?style=social&logo=twitter" alt="follow on Twitter">
	</a>
	<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT">
</p>

<p align="center">
	<a href="https://eoscostarica.io">
		<img src="https://cdn.rawgit.com/eoscostarica/assets/574d20a6/logos/eoscolors-transparent.png" width="300">
	</a>
</p>

# EOS Learning Resources by EOS Costa Rica.

Website with curated EOS learning resources.  [learning.eoscostarica.io](https://learning.eoscostarica.io)

# Local Setup

- Node https://gaboesquivel.com/blog/2015/automatic-node.js-version-switching/
- Hugo https://gohugo.io/getting-started/installing
- Yarn https://yarnpkg.com/lang/en/docs/install/

```
brew install hugo
brew install yarn
git clone git@github.com:eoscostarica/eos-learning-resources.git
cd docs
yarn start
```

## Contributing

We use a Kanban-style board with built-in triggers to automatically move issues and pull requests across New Issues, To Do, In Progress and Done columns. That's were we prioritize the work. [Go to Project Board](https://github.com/eoscostarica/eos-learning-resources/projects/1).

Read the [contributing guidelines](CONTRIBUTING.md) for details.

## Bug Reporting

Please report bugs big and small by [opening an issue](https://github.com/eoscostarica/dmeetup/issues). No possible bug report is too small.

## Project Directory Structure

```
.
├── themes/ ............................................ hugo themes
├── archetypes/ ........................................ hugo archetypes
├── content/ ........................................... contents in markdown
├── data/ .............................................. hugo project data config files
├── layouts/ ........................................... hugo project layout templates ( overrides the theme )
├── static/ ............................................ static files used by hugo
├── public/ ............................................ generated site files
├── CONTRIBUTING.md .................................... contributing guidelines
├── LICENSE ............................................ project license
├── README.md .......................................... project homepage
├── package.json ....................................... dependencies manifest
├── config.toml ........................................ hugo config
└── .travis.yml ........................................ travis ci configuration file
```

more https://gohugo.io/getting-started/directory-structure/

## Continuous Integration Process

We follow a continuous integration process based on Github flow that leverages the following tools:

- [TravisCI](https://travis-ci.org/) to run test and code style checks.

## Maintainers

- [@gaboesquivel](https://github.com/gaboesquivel).
- [@xavier506](https://github.com/xavier506).

## About EOS Costa Rica

EOS Blockchain is aiming to become a decentralized operating system which can support large-scale decentralized applications.

EOS Costa Rica supports the global and local open source efforts and development communities by maintaining and contribute to open source initiatives, meetups and workshops.

We challenge ourselves to provide the EOS platform with a strong geographical and political diversity by running the most robust EOS Block Producer possible from Costa Rica; We pledge to leverage our talent, experience, and sustainable internet resources to meet such an important challenge.

[eoscostarica.io](https://eoscostarica.io)

## License

MIT © [EOS Costa Rica](https://eoscostarica.io)  
