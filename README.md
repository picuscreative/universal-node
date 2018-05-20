[<img width="110" src="https://avatars3.githubusercontent.com/u/38539999?s=200&v=4g" />](https://picuscreative.com)

# universal-node

PICUS' template for universal Node/React applications. It offers you the required tooling for your universal JavaScript application, as well as an opinionated full-stack ready to kick-off your next project.

[<img src="https://img.shields.io/david/picuscreative/universal-node.svg" />](https://david-dm.org/picuscreative/universal-node)
[<img src="https://img.shields.io/david/dev/picuscreative/universal-node.svg" />](https://david-dm.org/picuscreative/universal-node?type=dev)


## What’s Included?

- 👀 `react` as the view.
- 🎛 Preconfigured with `redux`.
- 🚄 `express` server.
- 🛢️ `sequelize` ORM for data persistence.
- ☕ `testcafe` as the E2E test framework.
- 👌 Airbnb's ESlint configuration and Standard Stylelint - performing code formatting on commit. Stop worrying about code style consistency.
- 📝 `browserslist` to share target browsers between different front-end tools.
- 🌍 Server Side Rendering with `next.js`.
- 🖌 `postcss` and `cssnext` support.
- 🔧 Centralised application configuration with helpers to avoid boilerplate in your code. Also has support for environment variables.
- ⛑ SEO friendly - provides control of title/meta from within your pages.
- 📊 Google Analytics support.
- 🐞 Error tracking with Sentry.
- 👮 Security on the `express` server using `helmet` and `hpp`.
- 🏜 Asset bundling support. e.g. images/svgs/fonts.


## Table of Contents

- [Installation and setup](#installation-and-setup)
- [Commands](#commands)
    - [dev](#dev)
    - [build](#build)
    - [start](#start)
    - [test](#test)
    - [lint](#lint)
    - [docs](#docs)
- [Environment variables](#environment-variables)
- [Browserslist](#browserslist)


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

Runs the project's User Acceptance Tests using [TestCafé](http://devexpress.github.io/testcafe/) for desktop environment. There is a version `npm run test:mobile` to be used for mobile environments, feel free to change the current emulation settings in `package.json`.

**Note**: It's mandatory that a server process is already running via [npm run dev](#dev) or [npm start](#start) before executing the test suite.

### lint

```sh
$ npm run lint
```

Runs [ESlint](https://eslint.org/) and [Stylelint](https://stylelint.io/) on the project.

We use conventional commit messages: [commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional).

### docs

```sh
$ npm run docs
```

Runs [react-docgen](https://github.com/reactjs/react-docgen) to generate Markdown documentation for each component available in `components`. By default it generates a `doc.md` inside the component directory.


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


## Browserslist

By default, configurations for ESlint, Stylelint, PostCSS are "> 3%, Chrome >= 58, Firefox >= 58, Edge >= 16, Explorer >= 10, iOS >= 9.0" based on [browserl.ist](http://browserl.ist/?q=%3E+3%25%2C+Chrome+%3E%3D+58%2C+Firefox+%3E%3D+58%2C+Edge+%3E%3D+16%2C+Explorer+%3E%3D+10%2C+iOS+%3E%3D+9.0).


## LICENSE

[MIT License](https://opensource.org/licenses/MIT) - [PICUS](https://picuscreative.com)
