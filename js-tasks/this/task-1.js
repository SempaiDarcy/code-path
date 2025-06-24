// function print() {
//     console.log(this.value);
// }
//
// const a = { value: 10 };
// const b = { value: 20 };
//
// const bound = print.bind(a);
// bound.call(b);

// const obj = {
//     val: 42,
//     method() {
//         const arrow = () => this.val;
//         return arrow();
//     }
// };
//
// console.log(obj.method());

// const obj = {
//     count: 0,
//     inc() {
//         setTimeout(function () {
//             this.count++;
//             console.log(this.count);
//         }, 1000);
//     }
// };
//
// obj.inc();

// class Counter {
//     constructor() {
//         this.count = 0;
//     }
//
//     inc() {
//         this.count++;
//         console.log(this.count);
//     }
// }
//
// const c = new Counter();
// const incFunc = c.inc.bind(c);
// incFunc();


// const obj = {
//     foo: 2,
//     test: function () {
//         return (() => this.foo)();
//     }
// };
//
// console.log(obj.test());
