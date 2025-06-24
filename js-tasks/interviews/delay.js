// delay — функция задержки с возвращением значения
// Условие:
//
//     Реализуйте функцию delay(ms, value), которая возвращает промис, резолвящийся через ms миллисекунд значением value.
//
//     Функция должна работать как с .then(), так и с await.

const delay = (ms,value) => {
    return new Promise((res)=>{
        setTimeout(()=>res(value), ms)
    })
}
// delay(1000, 'value').then(console.log)


(async () => {
    const res = await delay(1000, 'value');
    console.log(res);
})();
