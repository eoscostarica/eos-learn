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

Website with curated EOS learning resources.  [learn.eoscostarica.io](https://learn.eoscostarica.io)

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

## Project Directory Structure

```
.
├── themes/ ................................ hugo themes
├── archetypes/ ............................ hugo archetypes
├── content/ ............................... contents in markdown
├── data/ .................................. hugo project data config files
├── layouts/ ............................... hugo project layout templates ( overrides the theme )
├── static/ ................................ static files used by hugo
├── public/ ................................ generated site files
├── CONTRIBUTING.md ........................ contributing guidelines
├── LICENSE ................................ project license
├── README.md .............................. project homepage
├── package.json ........................... dependencies manifest
├── config.toml ............................ hugo config
└── .travis.yml ............................ travis ci configuration file
```

Learn more https://gohugo.io/getting-started/directory-structure/

## Continuous Integration Process

We follow a continuous integration process based on Github flow that leverages the following tools:

- [TravisCI](https://travis-ci.org/) to run test and code style checks.

## License

MIT © [EOS Costa Rica](https://eoscostarica.io)  

## About EOS Costa Rica

EOS Blockchain is aiming to become a decentralized operating system which can support large-scale decentralized applications.

EOS Costa Rica supports the EOSIO community by maintaining and contributing to open source initiatives, meetups and workshops.

We challenge ourselves to provide the EOS platform with a strong geographical and political diversity by running the most robust EOS Block Producer possible from Costa Rica; We pledge to leverage our talent, experience, and sustainable internet resources to meet such an important challenge.

[eoscostarica.io](https://eoscostarica.io)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/391270?v=4" width="100px;"/><br /><sub><b>Gabo Esquivel</b></sub>](https://gaboesquivel.com)<br />[💻](https://github.com/eoscostarica/eos-learn/commits?author=gaboesquivel "Code") [👀](#review-gaboesquivel "Reviewed Pull Requests") [📝](#blog-gaboesquivel "Blogposts") [📢](#talk-gaboesquivel "Talks") | [<img src="https://avatars0.githubusercontent.com/u/5632966?v=4" width="100px;"/><br /><sub><b>Xavier Fernandez</b></sub>](https://eoscostarica.io)<br />[💻](https://github.com/eoscostarica/eos-learn/commits?author=xavier506 "Code") [👀](#review-xavier506 "Reviewed Pull Requests") [📝](#blog-xavier506 "Blogposts") [📢](#talk-xavier506 "Talks") | [<img src="https://avatars2.githubusercontent.com/u/40245170?v=4" width="100px;"/><br /><sub><b>Edgar Fernandez</b></sub>](http://www.eoscostarica.io)<br />[👀](#review-edgar-eoscostarica "Reviewed Pull Requests") [📝](#blog-edgar-eoscostarica "Blogposts") [📢](#talk-edgar-eoscostarica "Talks") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!