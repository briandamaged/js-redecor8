module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    "extends": "eslint:recommended",
    "plugins": [
        "mocha"
    ],
    "rules": {
        "indent": [
            "warn",
            2,
            {
                VariableDeclarator: {
                    'var': 1,
                    'let': 1,
                    'const': 3,
                },
                SwitchCase: 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": [
            "warn"
        ]
    }
};