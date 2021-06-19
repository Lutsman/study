// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате
// "имя":"кол-во задач".


const findBestEmployee = function (employees) {
    const numberOfTasks = Object.values(employees);
    const keys = Object.keys(employees);
    let maxTask = numberOfTasks[0];

    for (let i = 0; i < numberOfTasks.length; i += 1) {
        if (maxTask < numberOfTasks[i]) {
            maxTask = numberOfTasks[i];
        }
    }
    for (const key of keys) {
        if (employees[key] === maxTask) {
            return key;
        }
    }
};


console.log(
    findBestEmployee({
        ann: 29,
        "david": 35,
        helen: 1,
        john: 99,
    }),
); // john;

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
