// Задача: Возврат объекта из конструктора

function User(name) {
    this.name = name;
    return {
        name: "Override",
        getName: function () {
            return this.name;
        }
    };
}

const user = new User("Alice");
console.log(user.getName());
//  Вопросы:
//     Что выведется в консоль?
//
//     Почему именно это?
//
//     Как сделать так, чтобы user.getName() вернул 'Alice'?
//
//  Важно: Объясни словами:
//
//     что делает return {...} в конструкторе;
//
// что теперь находится в user;
//
// откуда берётся this внутри getName.