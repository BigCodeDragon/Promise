class MyPromise {
  static PENDING = "pending";
  static FUllFILLED = "fullfilled";
  static REJECT = "reject";
  constructor(fn) {
    this.result = null;
    this.status = MyPromise.PENDING;
    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(result) {
    if (this.status === MyPromise.PENDING) {
      this.result = result;
      this.status = MyPromise.FUllFILLED;
    }
  }
  reject(result) {
    if (this.status === MyPromise.PENDING) {
      this.result = result;
      this.status = MyPromise.REJECT;
    }
  }
  then(onFullFilled, onReject) {
    
    if (this.status === MyPromise.FUllFILLED) {
      onFullFilled(this.result);
    }
    if (this.status === MyPromise.REJECT) {
      onReject(this.result);
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve(123);
});
promise.then((result) => console.log(result));
