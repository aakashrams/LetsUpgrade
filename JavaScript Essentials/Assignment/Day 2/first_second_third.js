console.group('Question 1: Write the JS code which takes input from user and logs it in console');
let input = prompt('Please Enter your name');
console.log(input);
console.groupEnd('Question 1: Write the JS code which takes input from user and logs it in console');

console.group("Question 2: Explain with examples with the remaining methods of String and Array");
console.log("String");
let char = 'Quick Gun Murugan';
console.log(char.charCodeAt(0));// Returns the unicode of the character
char = char.replace('Murugan', 'Vinayakar'); // Replaces Vinayakar in place of Murugan 
console.log(char);
console.log(char.match('uick'));//Returns the index that is matched with the specied characters in array format
console.log(char.slice(6,15));//Returns the characters that are present within the specified limit
console.log(char.split(" "));//Splits the character before and after the specified character and returns in array
let sub = char.substring(6, 15);//Makes the variable to have a sub set from the main variable. It includes the start number character but does not include the end number character
console.log(sub);
console.log("Array");
let arr = rev = ['One','two','three','four'];
console.log(arr);
rev = rev.reverse();//Reverse the array
console.log(rev);
console.groupEnd("Question 2: Explain with examples with the remaining methods of String and Array");

console.group("Question 3: Ask the user if he is 21+ and log the value");
let age = confirm ("Are you above 21 years old?");
if(age == true)
console.log("Can Drink");
else
console.log("Cannot Drink");
console.groupEnd('Question 3: Ask the user if he is 21+ and log the value');