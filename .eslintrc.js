const esLintConfig = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-undef": 0,
    "prefer-const": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-extra-semi": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
}

module.exports = esLintConfig
