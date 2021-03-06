export default {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "globals": {
        "describe": true,
        "it": true,
        "expect": true,
        "fetch": true,
        "navigator": true,
        "__DEV__": true,
        "XMLHttpRequest": true,
        "FormData": true,
    },
    "rules": {
        // overrides
        "react-native/no-unused-styles": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-use-before-define": 0,
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
        "arrow-body-style": 0,
        "import/prefer-default-export": 0,
        "class-methods-use-this": 0
    }
};

