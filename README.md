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
- 📦 `pm2` for process management.
- 👌 Airbnb's ESlint configuration and Standard Stylelint - performing code formatting on commit. Stop worrying about code style consistency.
- 📝 `browserslist` to share target browsers between different front-end tools.
- 🌍 Server Side Rendering with `next.js`.
- 🔧 Centralised application configuration with helpers to avoid boilerplate in your code. Also has support for environment variables.
- 💅 `styled-components` to style your apps without stress.
- ⛑ SEO friendly - provides control of title/meta from within your pages.
- 📊 Google Analytics support.
- 🐞 Error tracking with Sentry.
- ⚙️ Offline mode with Service Workers.
- 👮 Security on the `express` server using `helmet` and `hpp`.
- 🏜 Asset bundling support. e.g. images/svgs/fonts.

## Table of Contents

- [Installation and setup](#installation-and-setup)
- [Commands](#commands)
  - [dev](#dev)
  - [build](#build)
  - [start](#start)
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

Builds the project for production, producing the bundled assets.

### start

```sh
$ npm start
```

Starts a production server. You must run `npm run build` before running this command.

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

- `SITE_URL`: The URL where the site will be running, e.g., `http://localhost:3000`
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

By default, configurations for ESlint, Stylelint are "> 3%, Chrome >= 66, Firefox >= 59, Edge >= 15, Explorer >= 11, Safari >= 11, iOS >= 10.3" based on [browserl.ist](https://browserl.ist/?q=%3E+3%25%2C+Chrome+%3E%3D+66%2C+Firefox+%3E%3D+59%2C+Edge+%3E%3D+15%2C+Explorer+%3E%3D+11%2C+Safari+%3E%3D+11%2C+iOS+%3E%3D+10.3.2).

## LICENSE

[MIT License](https://opensource.org/licenses/MIT) - [PICUS](https://picuscreative.com)
