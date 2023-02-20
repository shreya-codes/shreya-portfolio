module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:react/recommended",
    "standard-with-typescript",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
     "prettier/prettier": ["error" ,
  {
    "endOfLine": "auto"
  }
],
"import/no-cycle": "error"},
};
