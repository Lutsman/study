// Напиши скрипт со следующим функционалом:
//
//     При загрузке страницы пользователю предлагается в prompt ввести число.
//     Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//     Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//     пока пользователь не нажмет Cancel в prompt.
//     После того как пользователь прекратил ввод нажав Cancel,
//     если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//     Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
//     Если хочешь, в случае некорректного ввода, показывай alert с текстом
// 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно,
//     после чего снова пользователю предлагается ввести число в prompt.

let input = prompt('Введите число!');
const numbers = [];
let total = 0;
let number = numbers[0];

while (input !== null) {

    if (isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
        input = prompt('Введите число!');
    } else if (input === null) {
        for (let number of numbers) {
            total += Number(number);
            console.log('Общая сумма чисел равна ' + total);
        }
    } else if (input !== null) {
        numbers.push(input);
        input = prompt('Введите число!');
    }
}
for (let number of numbers) {
    total += Number(number);
}
console.log('Общая сумма чисел равна ' + total);
