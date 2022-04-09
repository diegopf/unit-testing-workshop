# Basic setup

## Installing dependencies

``` 
npm i -D typescript jest ts-jest @types/jest
```
## Setting up typescript

```
 npx tsc --init
```

## Basic jest configuration

Create a jest.config.js file on the root folder to indicate jest to
use ts-jest as preset.

https://jestjs.io/docs/getting-started#using-typescript-via-ts-jest


## Configure npm to run jest

Add one npm script to run jest by adding:

```
  "scripts": {
    "test": "jest"
  },
```

