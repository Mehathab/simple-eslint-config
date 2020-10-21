# simple-eslint-config

A simple eslint configuration using AirBnb style guides and Prettier setup

## Install

`npm i -D @simple/eslint-config`
<br>or</br>
`yarn add -D @simple/eslint-config`

## Usage

### Eslint

1. Create .eslintrc file at your project root level.
2. Add the below code to .eslintrc
    ```
    {
        "extends": "@simple/eslint-config/.eslintrc"
    }
    ```

### Prettier

1. Create .prettierrc at your project root level.
2. Add the below code to .prettierrc
    ```
    "@simple/eslint-config/.prettierrc"
    ```
