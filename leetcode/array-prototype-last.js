/**
 * LeetCode 2619 — Array Prototype Last
 *
 * Требуется расширить прототип массива, добавив метод `.last()`,
 * который будет возвращать последний элемент массива.
 * Если массив пустой — метод должен возвращать -1.
 *
 * Примеры:
 * [null, {}, 3].last() → 3
 * [].last() → -1
 *
 * Ограничения:
 * - Входной массив всегда валиден как JSON-массив
 * - 0 <= arr.length <= 1000
 */


/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1];
};
const arr = [1,2,3].last()
console.log(arr)