module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes"
  ],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        // if a commit is pertaining to the entire project 
        "*",
        // list of the package names located in the "package" directory
      ],
    ],
  },
};
