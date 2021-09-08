# imperative-promise

Usage:

```ts
import { ImperativePromise } from "imperative-promise";

const ip = new ImperativePromise();

ip.resolve("OK");

const result = await ip.promise; // OK
```
