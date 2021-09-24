import { ImperativePromise } from "../src";

async function run() {
  const ip = new ImperativePromise();

  ip.reject(new Error("Boom"));

  const result = await ip.promise;

  console.log(result);
}

run();
