// Hi, I'm a comment!

//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

/*
var firstCharacter = function (string){
    return string.substring (0,1);
}

console.log(firstCharacter("Kara"));
console.log(firstCharacter("ara"));
console.log(firstCharacter(""));
console.log(firstCharacter());
*/





//Write a function that takes a string and returns the last character of a string. 
//Test your function on a few inputs, including the empty string.

/*
var lastCharacter = function (string) {
    return string.substring(string.length - 1, string.length);
}

console.log(lastCharacter("Super"));
console.log(lastCharacter("Fun"));
console.log(lastCharacter());
*/





//Write a function that takes a string and a number, and returns the character at the position 
//represented by the number. The indexing of number should start at 0. Test your function on a 
//few inputs, including the empty string.

//Kash's way: better? way
/*
function charAtNumber(str, number){
    return str[number];
}

console.log(charAtNumber("Kash", 2));
console.log(charAtNumber("Koala", 1));
console.log(charAtNumber("", 4));
*/








//Write a function that takes two numbers and adds them together. Test your function on a few 
//inputs. Write in the comments what happens when you pass something other than a number to your 
//function.

function addTwoNumbers(number1,number2) {
    return number1 + number2;
}

console.log(addTwoNumbers(2,5));
console.log(addTwoNumbers(4, 76));
console.log(addTwoNumbers(4, "cat"));

//when I put a string into my function, it prints the number next to the string. If the inputs are
// 6, "1", it will return 61. If the inputs are "cat", 3. It will return cat3.