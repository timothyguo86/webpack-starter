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
- [Browser Support](#browser-support)
- [IDE Configuration](#ide-configuration)
- [Built With](#built-with)
- [Features](#features)
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

This script runs [ESLint](https://eslint.org/) to lint your JavaScript files in the `src` directory and automatically fixes fixable issues. The default `eslint` configuration is based on [Airbnb's JS config](https://www.npmjs.com/package/eslint-config-airbnb-base) with tweaks defined in the `.eslintrc`.

```bash
npm run lint
```

## Prepare

This script was initially setup for installing the [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged). It sets up the `.husky` directory, which you can ignore. When you run `git commit -m <message>`, Husky executes the `.husky/pre-commit` script through `lint-staged`. This ensures linting and other tasks are performed on staged git files before committing.

```bash
npm run prepare
```

## Webpack Configuration

This repository includes three webpack configuration files:

- `webpack.dev.js`: Configuration for local development.
- `webpack.prod.js`: Configuration for production.
- `webpack.common.js`: Shared configuration between `webpack.dev.js` and `webpack.prod.js`.

Feel free to customize these files based on your project requirements.

## Browser Support

Modify the `.browserslistrc` queries, e.g., `last 2 versions`, to ensure compatibility with Babel and PostCSS bundling configurations.

## IDE Configuration

Modify `.editorconfig` to maintain consistent coding styles for multiple developers working on the same project across various IDEs.

## Built With

- [Webpack](https://webpack.js.org/) - Module bundler.
- [Babel](https://babeljs.io/) - JavaScript compiler.
- [Jest](https://jestjs.io/) - JavaScript testing framework.
- [ESLint](https://eslint.org/) - JavaScript linting utility.
- [Prettier](https://prettier.io/) - Code formatter.
- [PostCSS](https://postcss.org/) - CSS tooling.
- [SASS](https://sass-lang.com/) - CSS preprocessor.
- [Autoprefixer](https://github.com/postcss/autoprefixer) - CSS Vendor Prefixes.
- [CSSnano](https://cssnano.co/) - CSS Minification Tool
- [Husky](https://github.com/typicode/husky) - Git hooks.
- [Lint-staged](https://github.com/lint-staged/lint-staged) - Pre-commit hooks.
- [modern-normalize](https://github.com/sindresorhus/modern-normalize) - Normalize browsers' default style.

## Features

- ### Cache Management and Performance Boost:

The build hashes the bundled `_.css` and `_.js` files, ensuring that the browser fetches the latest version whenever their content changes. This enhances cache management and website performance by efficiently handling file updates.

- ### Modern Normalize:

Utilizes [modern-normalize](https://github.com/sindresorhus/modern-normalize), a modern alternative to traditional CSS resets or normalizations, ensuring consistent rendering across different browsers while maintaining a modern and clean baseline for styling. You can import the `modern-normalize` CSS file into your `main.scss` using the following directive:

```scss
// main.scss

// Import modern-normalize
@import 'modern-normalize/modern-normalize.css';

// Your other SCSS styles here
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
