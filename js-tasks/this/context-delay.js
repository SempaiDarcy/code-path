// const person = {
//     name: 'Alice',
//     sayName() {
//         setTimeout(function () {
//             console.log(this.name);
//         }, 1000);
//     }
// };
//
// person.sayName();
// Вопрос:Что выведется в консоли и почему?

// const person = {
//     name: 'Alice',
//     sayName() {
//         setTimeout(function () {
//             console.log(this.name);
//         }.bind(this), 1000);
//     }
// };
//
// person.sayName();

const person = {
    name: 'Alice',
    sayName() {
        setTimeout(()=> console.log(this.name), 1000);
    }
};

person.sayName();