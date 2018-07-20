# Contributing

## Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Development Process](#development-process)
- [Pull Request General Guidelines](#pull-request-general-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
  - [Commit Message Format](#commit-message-format)
  - [Revert](#revert)
  - [Type](#type)
  - [Scope](#scope)
  - [Subject](#subject)
  - [Body](#body)
  - [Footer](#footer)
- [Reporting bugs](#reporting-bugs)
- [Releases](#releases)
    - [Breaking.Feature.Fix](#breakingfeaturefix)
      - [Breaking](#breaking)
      - [Feature](#feature)
      - [Fix](#fix)
  - [Changelog Generation](#changelog-generation)
- [Advanced Git tools](#advanced-git-tools)
- [Code Standards](#code-standards)
- [Continuous Integration and Delivery](#continuous-integration-and-delivery)
- [Pre-commit Hooks](#pre-commit-hooks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Development Process

We use a Kanban-style board to prioritize the work. For example the [dmeetup project board](https://github.com/eoscostarica/dmeetup/projects/1).

We have added a additional column to the default automated board in order to maintain a prioritized To Do column.
When a new issues is create you need to explicitly use the project option on the Github issue to include it in the board; Once you do that it gets automatically added to the New Issues column.

Periodically we move the new Issues to the To Do column and manually and give it the appropriate priority.

When you start working on a task you must manually move it to In Progress column.

We use Github flow https://guides.github.com/introduction/flow/ to request code changes.
We develop on master and release using tags with semver versioning.

![](https://gaboesquivel.com/img/2018/05/github-flow.png)

New and reopened pull request are automatically added to the board in the In Progress column.

When the pull request is closed is moved to the Done column automatically. If the pull request closes and issues it is properly stated with the github keywords closes in the pull request it gets automatically moved to the Done column too.

## Pull Request General Guidelines

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned.
* Check for related issues on the issue tracker.
* Non-trivial changes should be discussed on an issue first.
* Develop in a topic branch, never on master: `git checkout -b topic-branch`.
* Provide useful pull request description.
* Make "atomic", well scoped pull requests. 1 PR per feature of bug fix.
* Link the issue on the pull request description for cross references between code and issues.

We only support support **squash merge** of the pull requests as a best practice for ensure the master log is maintained clean and relevant, without requiring the pull request to be rebased. This strategy requires that all pull request made are "atomic", in other words they solve one thing only.  One pull request per feature, bug fix or documentation update.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the project change log**.

We follow angularjs commit message conventions as follows:

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples:

```
docs(changelog): update changelog to beta.5
```
```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

even more [samples](https://github.com/angular/angular/commits/master)

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Scope
The scope should be the name of the component that it affects

* **common**
* **smart-contracts**
* **webapp**
* **storage**

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

## Reporting bugs

Before submitting your issue please check that you've completed the following steps:

* Made sure you're on the latest version.
* Used the search feature to ensure that the bug hasn't been reported before.

Bug reports should contain the following information:

* Summary: A brief description.
* Steps to reproduce: How did you encounter the bug? Instructions to reproduce it.
* Expected behavior: How did you expect it to behave?
* Actual behavior: How did it actually behave?
* References: Links to any related tickets or information sources.
* If possible, attach visual documentation of the bug. Screenshot or animated gif.

## Releases

We release the production software version using github tags following [Semver](http://semver.org), except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".

#### Breaking.Feature.Fix

We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people.

##### Breaking

Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release.

##### Feature

When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed.

##### Fix

When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior.

### Changelog Generation

On each release we generate a changelog file to document changes using the standard [git-changelog](https://github.com/rafinskipg/git-changelog) package. There's an npm task for it.

## Advanced Git tools

There are also tools like [Hub](https://hub.github.com/) and [git-extras](https://github.com/tj/git-extras) that facilitate interacting with Github. You can leverage these tools to contribute to this repository.

## Code Standards

We use the [standardjs code style](https://standardjs.com).

## Continuous Integration and Delivery

This is a work in progress, we are going to probably want to use Netifly and TravisCI.

## Pre-commit Hooks

We use pre-commit hooks to ensure that both the code standards and commit message conventions are met.
