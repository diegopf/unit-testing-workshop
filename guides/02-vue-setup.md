# Vue setup

## Install dependencies

```
npm i -D @vue/cli-plugin-typescript @vue/cli-service @vue/test-utils@1.3.0 vue-jest vue-template-compiler@2.6.14
```

## Jest config

We need to tell Jest to transform the Vue SFC to something it can understand. In order to do that we only
need to adjust the configuration to use `vue-jest` with '.vue' files.

An additional thing we need to change is the `testEnvironment` to `jsdom` so our tests will run on a browser-like environment.

```
  testEnvironment: "jsdom",
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
  }
```

## Typescript configuration

By default typescript does not understand vue SFC, so we need to tell typescript how a `.vue` file looks like. We only need to
add the following

```ts
// src/vue-shims.d.ts

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

## Links

[vue cli](https://cli.vuejs.org/)

[vue-jest](https://github.com/vuejs/vue-jest)

[vue-test-utils](https://v1.test-utils.vuejs.org/)

[vue-cli-plugin-typescript](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript)

[jsdom](https://github.com/jsdom/jsdom)
