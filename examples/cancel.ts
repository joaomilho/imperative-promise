import { ImperativePromise } from "../src";

async function run() {
  const ip = new ImperativePromise();

  ip.cancel();

  const result = await ip.promise;

  console.log(result);
}

run();
