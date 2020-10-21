# @simple-node-config/eslint

A simple eslint configuration using AirBnb style guides and Prettier setup

## Install

`npm i -D @simple-node-config/eslint`
<br>or</br>
`yarn add -D @simple-node-config/eslint`

## Usage

### Eslint

1. Create .eslintrc file at your project root level.
2. Add the below code to .eslintrc<br/>
   `{"extends": "@simple-node-config/eslint/eslintrc"}`

### Prettier

1. Create .prettierrc.js at your project root level.
2. Add the below code to .prettierrc.js<br/>
   `module.exports = { ...require('./configs/prettierrc'), };`
