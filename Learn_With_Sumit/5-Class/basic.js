class HaveAFun {
    x = 0;

    increment(num = 1) {
        return this.x = this.x + num
    };
    decrement(num = 1) {
        return this.x = this.x - num
    };
    reset() {
        return this.x = 0
    };
};

const x = new HaveAFun();
console.log(x.increment(5));
console.log(x.increment());
console.log(x.increment());
console.log(x.increment());
console.log(x.increment());
console.log(x.increment());
console.log(x.decrement());