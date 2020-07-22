console.group('Question 1: Number is Odd or Even');
let number = prompt("Enter the number");
console.log(((number%2)==0)?`Entered Number is ${number} and it is Even`:`Entered Number is ${number} and it is Odd`);
console.groupEnd('Question 1: Number is Odd or Even');

console.group('Question 2: OS name and version');
let OS = prompt("Enter the OS and Version of your Mobile Phone");
let name = OS.split(" ");
console.log(`The OS name is ${name[0]} and version is ${name[1]}`);
console.groupEnd('Question 2: OS name and version');

console.group('Question 3: Grading');
//Conditional Statements
let mark = marks = prompt('Enter your mark');
let grade = grades = " ";
if(mark >=50 && mark <60)
grade = 'D';
else if(mark >=60 && mark <70)
grade = 'C';
else if(mark >=70 && mark <80)
grade = 'B';
else if(mark >=80 && mark <90)
grade = 'A';
else if(mark >=90 && mark <=100)
grade = 'S';
else
grade = 'U';
console.log(`Mark is ${mark} and your grade is ${grade}`);

//Ternary 
(marks >=50 && marks <60)?grades = 'D':(marks >=60 && marks <70)?grades = 'C':(marks >=70 && marks <80)?grades = 'B':(marks >=80 && marks <90)?grades = 'A':(marks >=90 && marks <=100)?grades = 'S':grades = 'U';
console.log(`Mark is ${marks} and your grade is ${grades}`);

//Switch Case
switch(Number(mark)){
    case 50:
        case 51:
            case 52:
                case 53:
                    case 54:
                        case 55:
                            case 56:
                                case 57:
                                    case 58:
                                        case 59:
                                            console.log(`Mark is ${mark} and your grade is D`);
                                            break;
    case 60:
        case 61:
            case 62:
                case 63:
                    case 64:
                        case 65:
                            case 66:
                                case 67:
                                    case 68:
                                        case 69:
                                            console.log(`Mark is ${mark} and your grade is C`);
                                            break;
     case 70:
        case 71:
            case 72:
                case 73:
                    case 74:
                        case 75:
                            case 76:
                                case 77:
                                    case 78:
                                        case 79:
                                            console.log(`Mark is ${mark} and your grade is B`);
                                            break;
    case 80:
        case 81:
            case 82:
                case 83:
                    case 84:
                        case 85:
                            case 86:
                                case 87:
                                    case 88:
                                        case 89:
                                            console.log(`Mark is ${mark} and your grade is A`);
                                            break;                                   
    case 90:
        case 91:
            case 92:
                case 93:
                    case 94:
                        case 95:
                            case 96:
                                case 97:
                                    case 98:
                                        case 99:
                                            case 100:
                                            console.log(`Mark is ${mark} and your grade is S`);
                                            break;
    default:
        console.log(`Mark is ${mark} and your grade is U`);
}
console.groupEnd('Question 3: Grading');