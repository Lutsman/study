// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную
// строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Напиши фукцнию findLongestWord(string),
//     которая принимает параметром произвольную строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   const arrowFromString = string.split(' ');
//   let longestWord = arrowFromString[0]
//
//     for(let i = 0; i < arrowFromString.length-1; i += 1){
//
//        if(arrowFromString[i + 1].length > longestWord.length){
//
//            longestWord = arrowFromString[i + 1];
//
//        }
//     }
//     return (longestWord);
// };

const findLongestWord = function (string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};


//как Репета


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'