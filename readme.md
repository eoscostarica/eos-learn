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

- Node.js v10 on your machine. We recommend using [nvm](https://github.com/creationix/nvm) and [avn](https://github.com/wbyoung/avn) to manage multiple node.js versions on your computer.
- Hugo https://gohugo.io/getting-started/installing
- Yarn https://yarnpkg.com/lang/en/docs/install/

On MacOS

```
brew install hugo
brew install yarn
git clone git@github.com:eoscostarica/eos-learn.git
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
├── contributing.md ........................ contributing guidelines
├── license ................................ project license
├── readme.md .............................. project homepage
├── package.json ........................... dependencies manifest
├── config.toml ............................ hugo config
└── .travis.yml ............................ travis ci configuration file
```

Learn more https://gohugo.io/getting-started/directory-structure/

## Continuous Integration Process

We follow a continuous integration process based on Github flow that leverages the following tools:

- [TravisCI](https://travis-ci.org/) to run test and code style checks.

## Contributing

We use a Kanban-style board. That's were we prioritize the work. [Go to Project Board](https://github.com/eoscostarica/eos-learn/projects/1).

Contributing Guidelines https://developers.eoscostarica.io/docs/open-source-guidelines.

Please report bugs big and small by [opening an issue](https://github.com/eoscostarica/eos-learn/issues)

## License

MIT © [EOS Costa Rica](https://eoscostarica.io)  

## About EOS Costa Rica

EOS Costa Rica is an independently-owned, self-funded, bare-metal genesis block producer that provides stable and secure infrastructure for EOSIO blockchains. We support open source software for our community while offering enterprise solutions and custom smart contract development for our clients.

[eoscostarica.io](https://eoscostarica.io)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://gaboesquivel.com"><img src="https://avatars0.githubusercontent.com/u/391270?v=4" width="100px;" alt=""/><br /><sub><b>Gabo Esquivel</b></sub></a><br /><a href="https://github.com/eoscostarica/eos-learn/commits?author=gaboesquivel" title="Code">💻</a> <a href="https://github.com/eoscostarica/eos-learn/pulls?q=is%3Apr+reviewed-by%3Agaboesquivel" title="Reviewed Pull Requests">👀</a> <a href="#blog-gaboesquivel" title="Blogposts">📝</a> <a href="#talk-gaboesquivel" title="Talks">📢</a></td>
    <td align="center"><a href="https://eoscostarica.io"><img src="https://avatars0.githubusercontent.com/u/5632966?v=4" width="100px;" alt=""/><br /><sub><b>Xavier Fernandez</b></sub></a><br /><a href="https://github.com/eoscostarica/eos-learn/commits?author=xavier506" title="Code">💻</a> <a href="https://github.com/eoscostarica/eos-learn/pulls?q=is%3Apr+reviewed-by%3Axavier506" title="Reviewed Pull Requests">👀</a> <a href="#blog-xavier506" title="Blogposts">📝</a> <a href="#talk-xavier506" title="Talks">📢</a></td>
    <td align="center"><a href="http://www.eoscostarica.io"><img src="https://avatars2.githubusercontent.com/u/40245170?v=4" width="100px;" alt=""/><br /><sub><b>Edgar Fernandez</b></sub></a><br /><a href="https://github.com/eoscostarica/eos-learn/pulls?q=is%3Apr+reviewed-by%3Aedgar-eoscostarica" title="Reviewed Pull Requests">👀</a> <a href="#blog-edgar-eoscostarica" title="Blogposts">📝</a> <a href="#talk-edgar-eoscostarica" title="Talks">📢</a></td>
    <td align="center"><a href="https://github.com/JustinCast"><img src="https://avatars1.githubusercontent.com/u/17890146?v=4" width="100px;" alt=""/><br /><sub><b>Justin Castillo Valladares</b></sub></a><br /><a href="https://github.com/eoscostarica/eos-learn/commits?author=JustinCast" title="Code">💻</a> <a href="#content-JustinCast" title="Content">🖋</a> <a href="#design-JustinCast" title="Design">🎨</a> <a href="https://github.com/eoscostarica/eos-learn/pulls?q=is%3Apr+reviewed-by%3AJustinCast" title="Reviewed Pull Requests">👀</a> <a href="#translation-JustinCast" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!