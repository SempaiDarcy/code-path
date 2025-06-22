// Задача: Потеря this при передаче метода
// У тебя есть объект user с методом sayHello. Потом ты передаёшь этот метод как callback в другую функцию run.

// const user = {
//     name: "Alice",
//     sayHello() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };
//
// function run(callback) {
//     callback();
// }
//
// run(user.sayHello);
// Вопросы:
//     Что выведется в консоль?
//
//     Почему this теряется?
//
//     Как передать метод sayHello, чтобы он вывел 'Hello, I'm Alice', не переписывая сам объект user?

// const user = {
//     name: "Alice",
//     sayHello() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };
//
// function run(callback) {
//     callback();
// }
//
// run(()=>user.sayHello());

// const user = {
//     name: "Alice",
//     sayHello() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };
//
// function run(callback) {
//     callback();
// }
//
// run(user.sayHello.bind(user));

const user = {
    name: "Alice",
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

function run(callback) {
    callback();
}

run(()=>user.sayHello.call(user));