/**
 * LeetCode 2620 — Счётчик
 *
 * Учитывая целое число `n`, верните функцию counter.
 * Эта функция при первом вызове возвращает `n`,
 * а затем при каждом последующем вызове возвращает на 1 больше предыдущего значения.
 *
 * Пример 1:
 * const counter = createCounter(10);
 * counter(); // 10
 * counter(); // 11
 * counter(); // 12
 *
 * Пример 2:
 * const counter = createCounter(-2);
 * counter(); // -2
 * counter(); // -1
 * counter(); // 0
 * counter(); // 1
 * counter(); // 2
 *
 * Ограничения:
 * -1000 <= n <= 1000
 * 0 <= calls.length <= 1000
 * Каждый вызов: calls[i] === "call"
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function(n) {
//     return function() {
//
//     };
// }
//  const counter = createCounter(10)
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

var createCounter = function(n) {
    return function() {
        return n++
    };
}
 const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
