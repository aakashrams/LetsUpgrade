console.time('Time taken');
console.group('Question 1: Exploring console');
console.log('console.log = Used to display in the console');
console.error('console.error = Used to show the error in console');
console.warn('console.warn = Used to show the warning in the console');
//console.clear();
console.log('console.clear = Used to clear the console');
console.log('console.count = Used to count the number in that function');
console.table({'10-July-2020':'Demo Class','12-July-2020':'Day 1','13-July-2020':"Day 2"});
console.groupEnd('Question 1: Exploring console');
console.timeEnd('Time taken');

console.group('Question 2: Difference between var, let, const');
console.group('var');
var name = "Aakash Ram S";
var email = "aakashram001@gmail.com"
console.log(name);
console.log(email);
console.groupEnd('var');
console.group('let');
{
    let name = 'Ram';
    let js = 'JavaScript';
    console.log({name, js});
}
console.groupEnd('let');
console.group('const');
const assign = 'DAY1';
//assign = "Day 2";   ---> Gives an Error
console.log(assign);
console.groupEnd('const');
console.table({'var':'Used to declare it globally','let':'Used to declare within the scope or locally','const':'The value assigned to the variable cannot be changed after the declaration'});
console.groupEnd('Question 2: Difference between var, let, const');
console.group('Question 3: Introduction of Datatypes');
console.log('There are 8 data types in JavaScript');
var datatype = ['number','bigint','string','boolean','null','undefined','object','symbol'];
console.log(datatype);
console.groupEnd('Question 3: Introduction of Datatypes');
