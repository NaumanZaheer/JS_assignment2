//Assignment 2

//Task1
console.log("task #1")
for(let i = 0; i < 10 ; i++)
{
    console.log(i+1)
}

//Task2
console.log("task #2")
let i = 0;
while(i <= 20)
{
    console.log(i);
    i+=2;
}

//Task3
console.log("task #3")
let number = Number(prompt("Enter a max number for Fibnoacci Series"),);

let first = 0;
let second = 1;

if (number >= 1) {
console.log(first);
}

if (number >= 2) {
console.log(second);
}

for (let i = 3; i <= number; i++) {
let next = first + second;
console.log(next);
first = second;
second = next;
}

//Task4
console.log("task #4")
number = Number(prompt("Enter number to check if it is prime or not : "),);
let bool = true;
for(let i = 2 ; i <= number/2 ; i++)
{
    if(number%i == 0)
    {
        bool = false;
        break;
    }
}
(bool) ? console.log(`${number} is Prime !`) : console.log(`${number} is not Prime !`);

//Task5
console.log("task #5")

const arr = [3 , -5 , 4 , 2 , 11 ,-9];
let sum = 0;
for(let i = 0; i < arr.length ; i++)
{
    if(arr[i] > 0)
    sum+=arr[i];
}
console.log(`Sum of positive array elements = ${sum}`);

//Task6
console.log("task #6")

for(let i = 10 ; i > 0 ; i--)
{
    console.log(i);
}

//Task7
console.log("task #7")
let string = prompt(`Enter a string to check if it is palindrome or not`,);
bool = true;
for(let i = 0 , j = string.length; i < string.length/2 ; i++ , j--)
{
    if(string[i] != string[j-1])
    {
        bool = false;
        break;
    }
}
bool ? console.log('String is Palindrome !') : console.log('String is not Palindrome !');

//Task8
console.log("task #8")
//arr from task5
let largest = arr[0];
for(let i = 1 ; i < arr.length ; i++)
{
    if(arr[i] > largest)
    largest = arr[i];
}
console.log(`Largest number in the array is ${largest}`);


//Task9
console.log("task #9")
let min = 1 , max = 100;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomWholeNumber = getRandomInt(1, 100);
console.log(randomWholeNumber);


let tries = 0;
let gnum = max/2;

alert(`Guess number from ${min} & ${max}`);
while(true)
{
    tries+=1;
    number = prompt('Enter number : ');
    if(number == randomWholeNumber)
    {
        alert(`You guessed the number : ${number} in  ${tries} tries `);
        break;
    }
    else{
        
        gnum = number;
        if(randomWholeNumber > gnum)
        alert(`Number is greater than ${gnum}`)
        else
        alert(`Number is lower than ${gnum}`)
        

    }
    
}

//Task10
console.log("task #10")
number = 8
let fact = 1;

for(let i = 1 ; i <= number ; i++)
{
    fact*=i;
}
console.log(`Factorial of given number ${number} = ${fact}`);


//Task11
console.log("task #11")
number = prompt('Enter number to print its table : ',);

let y = 1;
let table;
do{

    table = number * y;
    console.log(`${number} X ${y} = ${table}`);
    y++;

}while(y<=10);



//Task12
console.log("task #12")

let str = ['Apple' , 'Mango' , 'Bannnana' , 'Oranges' , 'Peaches'];

for(let i = 0 ; i < str.length ; i++)
{
    if(str[i].includes('A') || str[i].includes('E') || str[i].includes('I') || str[i].includes('O') || str[i].includes('U'))
    {
        console.log(str[i]);
    }
}



//Task13
console.log("task #13")

let arr2 = [1,2,3,4,5,6,7,8,9,10];
sum = 0;
let avg;
for(let i = 0 ; i < arr2.length ; i++)
{
    sum+=arr2[i];
}
avg = sum/arr2.length;
console.log(arr2.length);
console.log(`Average of arr2 list of numbers = ${avg}`);



