import { ImperativePromise } from "../src";

async function run() {
  const ip = new ImperativePromise();

  ip.resolve("OK");

  const result = await ip.promise; // OK

  console.log(result);
}

run();
