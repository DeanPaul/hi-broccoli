module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        // warn
        // 'import/first': 'warn',
        'spaced-comment': 'warn',
        camelcase: 'warn',
        'max-len': ['warn', { code: 150 }],
        'operator-assignment': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-template': 'warn',
        'eol-last': 'warn',
        // 'object-curly-spacing': 'warn',
        'no-return-assign': 'warn',
        // off
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        'comma-dangle': 'off',
        'linebreak-style': 'off',
        'no-restricted-syntax': 'off',
        radix: 'off',
        'consistent-return': 'off',
        'no-plusplus': 'off',
        'import/prefer-default-export': 'off',
        'arrow-parens': 'off'
    }
};