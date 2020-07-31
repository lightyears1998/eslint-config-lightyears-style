# eslint-config-lightyears-style

![Github repo size](https://img.shields.io/github/languages/code-size/lightyears1998/eslint-config-lightyears-style) ![NPM minified size](https://img.shields.io/bundlephobia/min/@lightyears1998/eslint-config-lightyears-style) ![NPM download count](https://img.shields.io/npm/dy/@lightyears1998/eslint-config-lightyears-style)

This is my favorite ESLint configuration.

You may also be interested in the following extensions:

``` yml
extends:
  - eslint:recommended
  - plugin:@typescript-eslint/eslint-recommended
  - plugin:@typescript-eslint/recommended
  - plugin:import/errors
  - plugin:import/warnings
  - plugin:import/typescript
```

and rules:

``` yml
rules:
  no-console:
    - warn
```

---

You can refer to [this](https://eslint.org/docs/developer-guide/shareable-configs) if you'd like to make your own shareable config.
