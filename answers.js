// Hi, I'm a comment!

//Q1. Write a function that takes a string and returns the first character of the string. 
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





//Q2. Write a function that takes a string and returns the last character of a string. 
//Test your function on a few inputs, including the empty string.

/*
var lastCharacter = function (string) {
    return string.substring(string.length - 1, string.length);
}

console.log(lastCharacter("Super"));
console.log(lastCharacter("Fun"));
console.log(lastCharacter());
*/





//Q3. Write a function that takes a string and a number, and returns the character at the position 
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








//Q4. Write a function that takes two numbers and adds them together. Test your function on a few 
//inputs. Write in the comments what happens when you pass something other than a number to your 
//function.

/*
function addTwoNumbers(number1,number2) {
    return number1 + number2;
}

console.log(addTwoNumbers(2,5));
console.log(addTwoNumbers(4, 76));
console.log(addTwoNumbers(4, "cat"));

//when I put a string into my function, it prints the number next to the string. If the inputs are
// 6, "1", it will return 61. If the inputs are "cat", 3. It will return cat3.
*/





//Q5. Write a function that takes two numbers and multiplies them together. Test your function on 
//a few inputs. Write in your comments what happens when you pass something other than a number to 
//your function.

/*
function multiplyUs(num1, num2){
    return num1 * num2;
}
console.log(multiplyUs(2,15));
console.log(multiplyUs(15,true));
console.log(multiplyUs(false,17));
console.log(multiplyUs(3,6));
console.log(multiplyUs("five", 3));
*/

//If you put in a string into this function, it will return NaN at this stage. I suspect the * 
//multiplication sign is why this happens.




//Q6. Write a function that takes two numbers and a string. If the string is ‘add’, then return 
//the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is 
//‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.

/*
function changeableMath(num1, num2, str){
    if (str === 'add'){
         return num1 + num2;
    }
    else if (str === 'subtract'){
         return num1 - num2;
    }
    else if (str === 'mult'){
        return num1 * num2
    }
    else if (str === 'div'){
        return num1 / num2
    }
    else {
        return 0
    }
}

console.log(changeableMath(2, 3, 'mult'));
console.log(changeableMath(3, 5, 'subtract'));
console.log(changeableMath(5, 3, 'add'));
console.log(changeableMath(16, 4, 'div'));
console.log(changeableMath(16, 5, 'div'));
console.log(changeableMath("Mathematics"));
*/









//Q7. Write a function that takes a string and a number, and returns the string repeated that 
//many number of times. Test your function with various inputs.

/*
function repeatMe(str, num){
   var i = 0;
   while(i < num){
       console.log(str);
       i++;
   }
}
repeatMe('Cats and', 2);
repeatMe('Dogs', 4);
*/







//Q8. Write a function that takes a string, and returns the reverse of that string. For example, 
//if you pass the function the string “hello”, it should return “olleh”. Test your function on a 
//few inputs, including the empty string.

/*
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('Kayak'));
console.log(reverseString('the mirror of erised.'));
console.log(reverseString('ishow not your face but your hearts desire'));
console.log(reverseString(''));
*/



//Q9. Write a function that takes a number and returns the factorial of a number. The factorial 
//of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including 
//negative numbers.

function factorial(n){
    if (n === 0) {
        return 1;
    }
    else if (n < 0){
        console.log("oops, please use a positive number");
    }
    else {
        return n * (factorial(n -1));
    }
}
console.log(factorial(7));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-9));

//problematic with my negative numbers, returns as undefined.









//Q10. Write a function that takes a phrase as a string, and returns the longest word in that 
//phrase. If the phrase contains more than one such word, return the first occurrence. Test your 
//function on a few inputs.



//Q11. Write a function that takes a phrase, and returns the same phrase with every word 
//capitalized. For example, if you pass your function "hello world", it should return "Hello 
//World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return 
//"Hello World". Test your function of a few inputs.



//Q12. Write a function that takes an array and returns the largest number of the array. Test 
//your function on a few inputs.



//Q13. Write a function that takes an array, and returns a filtered array. The filtered array 
//should only contain the truthy values from the initial array. Hint: there is an array method 
//called filter that can help you with this :)




//Q14. Write a function that takes an array of numbers, and returns the sum of all the numbers in 
//the array.





//Q15. Write a function that takes two arrays, and returns an array of all elements that are 
//only in one array. For example, with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. 
//Test your function on different inputs. Hint: you should look up array methods indexOf and 
//slice.





//Q16. Mini Challenge: write a function that takes an array and a function as arguments. The 
//function should return a new array that maps every element of the input array by passing it 
//through the function you received. You are not allowed to use Array.map for this challenge, 
//otherwise it would be too easy :)

