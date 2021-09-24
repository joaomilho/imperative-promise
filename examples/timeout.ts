import { ImperativePromise } from "../src";

async function run() {
  const ip = new ImperativePromise({ timeout: 10 });

  setTimeout(() => {
    ip.resolve("Too late");
  }, 1000);

  const result = await ip.promise;

  console.log(result);
}

run();
