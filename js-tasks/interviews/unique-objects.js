// Что будет выведено в консоль?
const items = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' },
    { id: 2, name: 'Bob' },
];

const uniqueItems = Array.from(new Set(items));
console.log(uniqueItems);
