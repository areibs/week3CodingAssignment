//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3,9,23,64,2,8,28,93];

//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!
let first = ages[0]; 
let last = ages[ages.length - 1];
console.log(last-first);

console.log(ages[ages.length - 1]-ages [0]);


//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push (17,190);

console.log(ages[ages.length - 1]-ages [0]);

//1c.	Use a loop to iterate through the array and calculate the average age. 
let total = 0
for (let i = 0; i < ages.length; i ++) {
    console.log(ages[i]);
total = total + ages[i];
}
console.log("average age of array:", total / ages.length);


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let charCount = 0;
for (let i = 0; i < names.length; i++) {
    console.log("length of letters in each name", names[i].length);
    charCount = charCount + names[i].length;}

    console.log("amount of letters in all names:", charCount);
    console.log("average number of letters per name", charCount/ names.length);


//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let finalName = ''
for (let i = 0; i < names.length; i ++) {
    console.log(names[i]);
finalName = finalName + '' + names[i];
}
//two different ways to join together
console.log(finalName)

console.log(names.join(''));



//3.	How do you access the last element of any array?
nameOfArray = [1,2,3,4,5]
console.log(nameOfArray[nameOfArray.length-1])
//4.	How do you access the first element of any array?
console.log(nameOfArray[0])
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:


//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
namesArray = ["Kelly", "Sam", "Kate"];
let letterCount = 0;
for (i = 0; i < namesArray.length; i++) {
    console.log("length of letters in each name", namesArray[i].length);
    namesArray[i].length = letterCount + namesArray[i].length
    }
console.log(letterCount)


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

let repeatWord = (word,n) => {
for(let i = 0; i < n; i++){
   console.log(word[i] * n);
}}
repeatWord("Yo", 5)


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.

function createFullName (firstName, lastName) {
    console.log (firstName + ' ' + lastName);
}
createFullName("Alyssa", "Reibel");

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function numbers(num1, num2, num3) {
    if ((num1 + num2 + num3) > 100) {
        console.log (true);
    } else {
        console.log(false);
    }
}
numbers(74, 24, 19)

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

let books = [9,5,3,2,8,5];
let totalBooks = 0
for (let i = 0; i < books.length; i ++) {
    console.log(books[i]);
totalBooks = totalBooks + books[i];
}
console.log("average amount of books:", totalBooks / books.length);

        

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    }
    else {
        return false;
}}

//13.	Create a function of your own that solves a problem.

function willSing(musicIsPlaying, inCar) {
    if (musicIsPlaying == true && inCar == true) {
        return true
    }
    else {
        return "no singing today";
    }
}
