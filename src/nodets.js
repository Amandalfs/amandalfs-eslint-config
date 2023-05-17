const nodets = require('./.node-ts.json');

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "camelcase": "off",
        "no-useless-constructor":"off"
    },
    settings: {
        'import/parsers': {
          [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    }
}