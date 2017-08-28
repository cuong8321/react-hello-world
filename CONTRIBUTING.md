# Contributing

## Our Standard

### Style Guide

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Our JavaScript code follows [StandardJS](https://standardjs.com/)

### Git Commit Message

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* When only changing documentation, include `[ci skip]` in the commit description

## Development

### Prerequisites

* [Git](https://git-scm.com/) ≥ 2.0.0

* POSIX Tools (bash, sh, cat, ls, etc)
  * Already avaible in POSIX OSes (Linux, macOS, etc)
  * Windows: [Git Bash](https://git-scm.com/), MinGW, [msys2](http://www.msys2.org/), [Cygwin](http://cygwin.com), etc.

* [Node.js](https://nodejs.org/) ≥ 8.0.0
  * Recommends [nvm](https://github.com/creationix/nvm) for POSIX (Linux, macOS, etc)
  * Windows users can use [nvm-windows](https://github.com/coreybutler/nvm-windows) or [chocolatey](https://chocolatey.org/packages/nodejs) as alternative

* A node package manager: NPM or YARN
  * NPM: Already installed along with Node.js
  * YARN: https://yarnpkg.com/

### Setup environment

#### Step 1: Get the code

Use Git to clone this project

```sh
mkdir react-hello-world && cd react-hello-world
git clone https://github.com/KSXGitHub/react-hello-world.git .
```

#### Step 2: Install necessary dependencies

If you're using NPM

```sh
npm install
```

If you're using YARN

```sh
yarn install
```

### Run, Test, Build, Deploy

#### Run overall test

```sh
npm test # OR: yarn test
```

#### Run unit tests

```sh
npm run unit-test # OR: yarn run unit-test
```

#### Run and Watch unit tests

```sh
npm run unit-test --watch # OR: yarn run unit-test --watch
```

#### Start live server

```sh
npm start # OR: yarn start
```

#### Build

```sh
npm run build # OR: yarn run build
```
