# talevuek

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Native CDD expirience made just for Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `talevuek` dependency to your project

```bash
yarn add talevuek # or npm install talevuek
```

2. Add `talevuek` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'talevuek',

    // With options
    ['talevuek', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Stas <stasoft91@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/talevuek/latest.svg
[npm-version-href]: https://npmjs.com/package/talevuek

[npm-downloads-src]: https://img.shields.io/npm/dt/talevuek.svg
[npm-downloads-href]: https://npmjs.com/package/talevuek

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/talevuek.svg
[license-href]: https://npmjs.com/package/talevuek
