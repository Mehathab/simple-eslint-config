module.exports = {
    extends: [
        'airbnb',
        'prettier',
        'plugin:node/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': 'error',
        'no-process-exit': 'off',
        'class-methods-use-this': 'off',
        'object-shorthand': 'off',
    },
};
