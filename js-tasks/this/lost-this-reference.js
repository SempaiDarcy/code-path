// У тебя есть объект team, в котором вложен объект leader.
// У лидера есть метод sayHi, который должен вернуть this.name.

// const team = {
//     name: "Dev Team",
//     leader: {
//         name: "Alice",
//         sayHi: function () {
//             return this.name;
//         }
//     }
// };
//
// const hi = team.leader.sayHi;
// console.log(hi());
//  Вопросы:
//     Что выведется в консоли?
//
//     Почему так произошло?
//
//     Как сделать так, чтобы hi() возвращал "Alice"?

// const team = {
//     name: "Dev Team",
//     leader: {
//         name: "Alice",
//         sayHi: function () {
//             return this.name;
//         }
//     }
// };
//
// const hi = team.leader.sayHi();
// console.log(hi);

// const team = {
//     name: "Dev Team",
//     leader: {
//         name: "Alice",
//         sayHi: function () {
//             return this.name;
//         }
//     }
// };
//
// const hi = team.leader.sayHi.bind(team.leader);
// console.log(hi());

// const team = {
//     name: "Dev Team",
//     leader: {
//         name: "Alice",
//         sayHi: function () {
//             return this.name;
//         }
//     }
// };
//
// const hi = team.leader.sayHi.call(team.leader);
// console.log(hi);