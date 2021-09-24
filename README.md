# imperative-promise

A TS library for imperative promises.

## Why

In some rare use cases – like locks – one needs to be able to have a reference to a promise and resolve or reject it manually. 

But rolling your own imperative promise has its gotchas. For instance, once you lift the resolve method from a promise, node will not wait for it to either resolve or reject before exiting.

This library solves this and other problems.

## Install

```sh
yarn add imperative-promise
npm install imperative-promise
```

## Usage

Resolve:

```ts
import { ImperativePromise } from "imperative-promise";

const ip = new ImperativePromise<string>();

ip.resolve("OK");

const result = await ip.promise; // OK
```

Rejecting:

```ts
import { ImperativePromise } from "imperative-promise";

const ip = new ImperativePromise();

ip.reject(new Error("Boom"));

const result = await ip.promise; // throw Boom
```

Canceling:

```ts
import { ImperativePromise } from "imperative-promise";

const ip = new ImperativePromise();

ip.cancel();

const result = await ip.promise; // undefined
```

Timeout:

```ts
import { ImperativePromise } from "imperative-promise";

const ip = new ImperativePromise({ timeout: 1000 });

const result = await ip.promise; 

// 1s later, throw Timeout
```