"use strict";

// Rules to be applied.
const rules = {
  "array-bracket-newline": [
    {
      minItems: 3,
      multiline: true
    }
  ],
  "array-bracket-spacing": ["never"],
  "array-element-newline": [
    {
      minItems: 3,
      multiline: true
    }
  ],
  "block-spacing": ["always"],
  "brace-style": ["1tbs"],
  "camelcase": [
    {
      allow: [],
      ignoreDestructuring: false,
      properties: "always"
    }
  ],
  "comma-dangle": ["never"],
  "comma-spacing": [
    {
      after: true,
      before: false
    }
  ],
  "comma-style": ["last"],
  "curly": ["all"],
  "dot-location": ["property"],
  "dot-notation": [],
  "eol-last": ["always"],
  "eqeqeq": ["smart"],
  "func-call-spacing": ["never"],
  "indent": [2, { SwitchCase: 2 }],
  "jsx-quotes": ["prefer-double"],
  "key-spacing": [
    {
      afterColon: true,
      beforeColon: false
    }
  ],
  "keyword-spacing": [
    {
      after: true,
      before: true
    }
  ],
  "new-parens": ["always"],
  "no-multiple-empty-lines": [
    {
      max: 1, maxEOF: 0, maxBOF: 0
    }
  ],
  "no-else-return": [],
  "no-implicit-coercion": [],
  "no-lonely-if": [],
  "no-multi-spaces": [{ ignoreEOLComments: true }],
  "no-return-await": [],
  "no-trailing-spaces": [],
  "no-whitespace-before-property": [],
  "object-curly-newline": [
    {
      minProperties: 3,
      multiline: true
    }
  ],
  "object-curly-spacing": ["always"],
  "object-property-newline": [{ allowMultiplePropertiesPerLine: true }],
  "quotes": ["double"],
  "semi": ["always"],
  "space-before-blocks": ["always"],
  "space-before-function-paren": [
    {
      anonymous: "always",
      asyncArrow: "always",
      named: "never"
    }
  ],
  "space-in-parens": ["never"],
  "spaced-comment": ["always", { "markers": ["/"] }],
  "switch-colon-spacing": [
    {
      after: true,
      before: false
    }
  ],
  "template-tag-spacing": ["never"],
  "unicode-bom": ["never"],
  "wrap-iife": ["inside"],
  "wrap-regex": [],
  "yoda": ["never"],
  "import/order": [{ "newlines-between": "always" }]
};

// Set rule level to be `warning`.
Object.keys(rules).forEach(key => {
  rules[key].unshift("warn");
});

module.exports = { rules };
