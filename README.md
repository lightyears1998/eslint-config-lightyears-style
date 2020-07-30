# eslint-config-lightyears-style

This is my favorite ESLint configuration.

May also interested in:

``` yml
extends:
  - eslint:recommended
  - plugin:@typescript-eslint/eslint-recommended
  - plugin:@typescript-eslint/recommended
  - plugin:import/errors
  - plugin:import/warnings
  - plugin:import/typescript
```

``` yml
rules:
  no-console:
    - warn
```

---

You can refer to [this](https://eslint.org/docs/developer-guide/shareable-configs) if you'd like to make your own shareable config.