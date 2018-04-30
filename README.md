[<img width="110" src="https://avatars3.githubusercontent.com/u/38539999?s=200&v=4g" />](https://picuscreative.com)

# universal-node

PICUS' template for universal Node/React applications. It offers you the required tooling for your universal JavaScript application, as well as an opinionated full-stack ready to kick-off your next project.

[<img src="https://img.shields.io/david/picuscreative/universal-node.svg" />](https://david-dm.org/picuscreative/universal-node)
[<img src="https://img.shields.io/david/dev/picuscreative/universal-node.svg" />](https://david-dm.org/picuscreative/universal-node?type=dev)


## What’s Included?

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Next.js](https://nextjs.org/)
- [PostCSS](http://postcss.org/) with [cssnext](http://cssnext.io/) plugin
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org)
- [TestCafé](http://devexpress.github.io/testcafe/)


## Table of Contents

- [Installation and setup](#installation-and-setup)
- [Commands](#commands)
    - [dev](#dev)
    - [build](#build)
    - [start](#start)
    - [test](#test)
    - [lint](#lint)
- [Environment variables](#environment-variables)
- [Browserl.ist](#browserlist)


## Installation and setup

### 1. Install packages

```sh
$ npm install
```

### 2. Configure [Environment variables](#environment-variables)

### 3. Run database migrations and seeds (for testing purpose)

```sh
$ npm run db:migrate:seeds
```


## Commands

### dev

```sh
$ npm run dev
```

Starts a development server.

### build

```sh
$ npm run build
```

Builds the project for production, producing the bundled assets at `public/build`.

### start

```sh
$ npm start
```

Starts a production server. You must run `npm run build` before running this command.

### test

```sh
$ npm test
```

Runs the project's User Acceptance Tests using [TestCafé](http://devexpress.github.io/testcafe/).

### lint

```sh
$ npm run lint
```

Runs [ESlint](https://eslint.org/) and [Stylelint](https://stylelint.io/) on the project.

We use conventional commit messages: [commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional).

## Environment variables

Your project can consume variables declared in your environment by accessing them via `process.env`.

The following variables will be made available:

- `DB_USER`: The user name used for database connection.
- `DB_PASSWORD`: The user's password used for database connection.
- `DB_HOST`: The database connection, the value can be a IP address or a domain.
- `REACT_APP_*`: Custom variables that may be accessible in both the client and server bundles.
- `NODE_ENV`: One of `development`, `test`, `staging` or `production`.

These will be embedded at **build time**, thus are **read-only**. This means you must rebuild your application every time you change them.

### Server bundle

Besides the variables listed above, your server bundle will have access to the whole `process.env` just like a regular Node.js application.

### Client bundle

Only the variables listed above will be available.
If you need custom environment variables, you must prefix them with `REACT_APP_`. This avoids accidentally exposing sensitive environment variables, such as a private key or a database credential.

### .env file

Environment variables defined on `.env` file will be loaded into `process.env`.
Please read [dotenv](https://github.com/motdotla/dotenv) documentation for more information.

```
REACT_APP_FOO=bar
```

This file is ignored in source control and it is intended to be created from `.env.sample`, which is committed and anyone who clones the project can easily use it as a starting point.

## Browserl.ist

By default, configurations for ESlint, Stylelint, PostCSS are "> 3%, Chrome >= 58, Firefox >= 58, Explorer >= 10, iOS >= 9.0" based on [browserl.ist](http://browserl.ist/?q=%3E+3%25%2C+Chrome+%3E%3D+58%2C+Firefox+%3E%3D+58%2C+Explorer+%3E%3D+10%2C+iOS+%3E%3D+9.0).
