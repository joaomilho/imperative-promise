import { ImperativePromise } from ".";

test("resolve", async () => {
  const ip = new ImperativePromise<string>();
  ip.resolve("OK");

  await expect(ip.promise).resolves.toBe("OK");
});

test("reject", async () => {
  const prom = new ImperativePromise<string>();
  prom.reject(new Error("Ooops"));

  await expect(prom.promise).rejects.toThrowError("Ooops");
});

test("cancel", async () => {
  const prom = new ImperativePromise<string>();
  prom.cancel();

  expect(prom.promise).toBe(undefined);
});

test("timeout", async () => {
  const prom = new ImperativePromise<string>({ timeout: 1 });

  await expect(prom.promise).rejects.toThrowError("Timeout");
});

test("timeout before resolve", async () => {
  const prom = new ImperativePromise<string>({ timeout: 1 });

  setTimeout(() => prom.resolve("OK"), 2);

  await expect(prom.promise).rejects.toThrowError("Timeout");
});

test("timeout after resolve", async () => {
  const prom = new ImperativePromise<string>({ timeout: 2 });

  setTimeout(() => prom.resolve("OK"), 1);

  await expect(prom.promise).resolves.toBe("OK");
});
