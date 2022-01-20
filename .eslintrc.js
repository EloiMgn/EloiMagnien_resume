module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 1,
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx']
    }],
    'linebreak-style': ['warn', 'windows'],
    'react/prefer-stateless-function': [0, {
      ignorePureComponents: true
    }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: false
    }],
    quotes: [1, 'single'],
    'no-unused-vars': ['warn', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false
    }],
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'no-plusplus': 0,
    'react/no-array-index-key': 0,
    'react/button-has-type': 0,
    'func-names': 0,
    'react/function-component-definition': 0,
    'click-events-have-key-events': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    camelcase: 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'no-var': 0,
    'no-unused-expressions': 0
  }
}
