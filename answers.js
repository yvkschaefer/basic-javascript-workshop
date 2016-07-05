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

function stringNumber(str, num) {
    return str.substring(num - 1, num);
}

console.log(stringNumber("Face", 2));
console.log(stringNumber("Seventeen", 6));
console.log(stringNumber(""));