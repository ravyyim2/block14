//ONLY ODDS

const inputArrays = [2, 4, 6, 8, 11, 20, 15, 22];
const result = [];

for (let i = 0; i < inputArrays.length; i++) {
    if (inputArrays[i] === 11 || inputArrays[i] === 15) {
    result.push(inputArrays[i]);
}
}
console.log(result);

const inputArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result =[];
for (let i = 0; i < inputArrays.length; i++) {
    if (inputArrays[i] === 1 || inputArrays[i] === 3 || inputArrays[i] === 5 || inputArrays[i] === 7 || inputArrays[i] === 9) {
    result.push(inputArrays[i]);
}
}
console.log(result);

const inputArrays = [70, 42, 55, 81, 21, 91, 34];
const result = [];
for (let i = 0; i < inputArrays.length; i++) {
    if ( inputArrays[i] === 55 || inputArrays[i] === 81 || inputArrays[i] === 21 || inputArrays[i] === 91) {
    result.push(inputArrays[i]);
}
}
console.log(result);

//VOWEL & CONSTANT

const inputArrays = [2, 4, 6, 8, 10, 11, 12]; ;
const result = [];
for (let i = 0; i < inputArrays.length; i++) {
    if (
    inputArrays[i] === 11) {
    result.push(inputArrays[i]);
}
}
console.log(result);
const sentence = "hello";
let counter = 0;

for (let i = 0; i < sentence.length; i++) {
    if (
        (sentence[i] === "a" || sentence[i]) === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"
    ) {
        counter++;
    }
}
// reverse array
console.log(counter);

works for all
const inputArray = [20, 50, 30, 60, 200];
const reversedArray = [];

for (let i = inputArray.length - 1; i >= 0; i--) {
    reversedArray.push(inputArray[i]);
}

console.log(reversedArray); 


//FIZZBUZZ
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
} else if (i % 3 === 0) {
    console.log("Fizz");
} else if (i % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(i);
}
}