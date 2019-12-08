module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: [
        "react"
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:react/recommended",
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    parserOptions: {
        ecmaVersion: 2019,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
        "max-len": ["error", { "code": 120 }],
        "multiline-ternary": ["error", "always-multiline"],
        "operator-linebreak": ["error", "before"],
        "semi": ["error", "always"],
    },
    "settings": {
        "react": {

            "version": "detect", // React version. "detect" automatically picks the version you have installed.
        },
    },
};
