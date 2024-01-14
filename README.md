# Webpack Starter

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/timothyguo86/webpack-starter/blob/main/LICENSE)

A clean foundational setup for your upcoming frontend project built on [Webpack](https://webpack.js.org/).

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Running Tests](#running-tests)
- [Linting](#linting)
- [Webpack Configuration](#webpack-configuration)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Overview

This starter kit provides a foundational setup for your frontend projects using [Webpack](https://webpack.js.org/). It includes configurations for development and production builds, as well as linting and testing setups.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/timothyguo86/webpack-starter.git

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

## Usage

- ### Development Server(with Hot Module Replacement)

This script starts the webpack development server with `Hot Module Replacement (HMR)`, allowing you to see changes in real-time without a full page reload. It also includes an `inline source map` for easier debugging.

```bash
npm run dev

```

- ### Build for Production:

This script builds your project for production, optimizing and minifying the code.

```bash
npm run build

```

## Running Tests

This script runs [Jest](https://jestjs.io/) tests. `Jest` is configured to handle stylesheets through [identity-obj-proxy](https://www.npmjs.com/package/identity-obj-proxy) and use [babel-jest](https://www.npmjs.com/package/babel-jest) for JavaScript.

```bash
npm run test

```

## Linting

This script runs [ESLint](https://eslint.org/) to lint your JavaScript files in the `src` directory and automatically fixes fixable issues.

```bash
npm run lint

```

## Webpack Configuration

This repository includes three webpack configuration files:

- `webpack.dev.js`: Configuration for local development.
- `webpack.prod.js`: Configuration for production.
- `webpack.common.js`: Shared configuration between `webpack.dev.js` and `webpack.prod.js`.

Feel free to customize these files based on your project requirements.

## Built With

- [Webpack](https://webpack.js.org/) - Module bundler.
- [Babel](https://babeljs.io/) - JavaScript compiler.
- [Jest](https://jestjs.io/) - JavaScript testing framework.
- [ESLint](https://eslint.org/) - JavaScript linting utility.
- [Prettier](https://prettier.io/) - Code formatter.
- [PostCSS](https://postcss.org/) - CSS tooling.
- [Lodash](https://lodash.com/) - JavaScript utility library.

Feel free to contribute by opening issues or submitting pull requests.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
