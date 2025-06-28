// Задача: Максимум в объекте
// Условие:
// У тебя есть объект вида: { a: 2, b: 5, c: 1 }
// Напиши функцию, которая возвращает ключ с наибольшим значением.

// Пример:
// Ввод: { a: 2, b: 5, c: 1 }
// Вывод: "b"

let obj = { a: 2, b: 5, c: 1}
//
// function f1 (obj) {
//     let maxK = ''
//     let maxV = -Infinity
//
//     for (const k in obj) {
//         if (obj[k]>maxV) {
//             maxV = obj[k]
//             maxK = k
//         }
//     }
//     return maxK
// }
//
// console.log(f1(obj));

function f2(obj) {
    const keys = Object.keys(obj)
    let maxK = ''
    let maxV = -Infinity

    for (let i = 0; i< keys.length; i++) {
        const k = keys[i]
        const v = obj[k]
        if (v>maxV) {
            maxV = v
            maxK = k
        }
    }
    return maxK
}

console.log(f2(obj));