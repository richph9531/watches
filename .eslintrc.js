module.exports = {
  plugins: ['jest'],
  extends: ['eslint-config-airbnb/base', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  globals: {
    expect: false,
    test: false,
    describe: false,
    jest: false,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': [1, 'as-needed'],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-restricted-syntax': [1],
    'object-curly-newline': [1],
    'no-useless-escape': [1],
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
  },
};
