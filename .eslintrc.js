module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-var": "error",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-empty-function": ["error", {"allow": ["arrowFunctions"]}],
    }
}
