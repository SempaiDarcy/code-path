// https://www.youtube.com/watch?v=6LdQBI0anMQ&t=189s 10:44
// delay — функция задержки с возвращением значения
// Условие:
//
//     Реализуйте функцию delay(ms, value), которая возвращает промис, резолвящийся через ms миллисекунд значением value.
//
//     Функция должна работать как с .then(), так и с await.

// const delay = (ms,value) => {
//     return new Promise((res)=>{
//         setTimeout(()=>res(value), ms)
//     })
// }
// // delay(1000, 'value').then(console.log)
//
//
// (async () => {
//     const res = await delay(1000, 'value');
//     console.log(res);
// })();


// forEach + async/await — что будет в консоли?
// Условие:
//
// Ты вызываешь функцию delay, которая возвращает промис с задержкой в ms миллисекунд и значением returnValue.
// Затем ты проходишься по массиву values с помощью forEach и внутри используешь async/await.
//
// Что будет выведено в консоль и в каком порядке?
// const delay = (ms, returnValue) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(returnValue);
//         }, ms);
//     });
// };
//
// const values = [1, 2, 3];
//
// values.forEach(async (value) => {
//     const result = await delay(1000, value);
//     console.log(result);
// });
//
// console.log('Done');


// "Как гарантировать, что 1, 2, 3 выведутся именно в таком порядке, если внутри есть асинхронный код с непредсказуемой задержкой?"
// Если delay делает случайную задержку:
// const delay = (value) => {
//     const ms = Math.floor(Math.random() * 1000);
//     return new Promise((res) => setTimeout(() => res(value), ms));
// };

// [1, 2, 3].forEach(async (v) => {
//     const r = await delay(v);
//     console.log(r);
// });
// Результат будет в любом порядке, например:
// 2
// 1
// 3

// const run = async () => {
//     const values = [1, 2, 3];
//
//     for (const value of values) {
//         const result = await delay(value); // даже если задержка рандомная
//         console.log(result);
//     }
// };
//
// run()

