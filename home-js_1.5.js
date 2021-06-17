
// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
//
//     Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
//     Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
//
//     Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
//
//     Ниже приведен список стран и стоимость доставки.
//
//     Китай - 100 кредитов
//     Чили - 250 кредитов
//     Австралия - 170 кредитов
//     Индия - 80 кредитов
//     Ямайка - 120 кредитов


const destinationCountry = prompt('Введите название страны');
let possibleCountry;
let price;
const china = 'Китай';
const australia = 'Австралия'
const chile = 'Чили';
const india = 'Индия';
const jamaica = 'Ямайка';

if(destinationCountry.toLowerCase() === china.toLowerCase()){
    possibleCountry = china;
    price = 100;
} else if(destinationCountry.toLowerCase() === australia.toLowerCase()){
    possibleCountry = australia;
    price = 170;
}else if(destinationCountry.toLowerCase() === chile.toLowerCase()){
    possibleCountry = chile;
    price = 150;
}else if(destinationCountry.toLowerCase() === india.toLowerCase()){
    possibleCountry = india;
    price = 120;
} else if(destinationCountry.toLowerCase() === jamaica.toLowerCase()){
    possibleCountry = jamaica;
    price = 140;
}
console.log(price);
console.log(possibleCountry);

