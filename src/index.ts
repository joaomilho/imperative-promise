export class ImperativePromise<T> {
  promise: Promise<T> | undefined;
  imperativeResolve: ((value: T | PromiseLike<T>) => void) | undefined;
  imperativeReject: ((reason?: any) => void) | undefined;
  interval: NodeJS.Timeout | undefined;

  constructor(opts: { timeout: number } = { timeout: 10000 }) {
    this.promise = new Promise<T>((resolve, reject) => {
      this.imperativeResolve = resolve;
      this.imperativeReject = reject;

      this.interval = setTimeout(() => {
        reject(new Error("Timeout"));
      }, opts.timeout);
    });
  }

  resolve(value: T) {
    this.imperativeResolve?.(value);
    this.interval && clearInterval(this.interval);
  }

  reject(reason?: any) {
    this.imperativeReject?.(reason);
    this.interval && clearInterval(this.interval);
  }

  cancel() {
    this.promise = undefined;
    this.imperativeResolve = undefined;
    this.imperativeReject = undefined;
    this.interval && clearInterval(this.interval);
  }
}
