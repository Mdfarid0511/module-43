// 1. using of let and constant.

 let numberOne = 10;
numberOne = 0;
 console.log(numberOne) 

const myName = 'Farid';
const countryName = 'I am Bangladeshi'
console.log(countryName, ':', myName); 




// 2. How to write the 6 types of condition (>, <, >=, <=, ===, !==) use of (&& ,||)

function twoNumbers (num1, num2){

   if(num1 > num2){
      console.log(num1, 'is bigger then', num2);
   }

   else{
      console.log(num2, 'is bigger then', num1)
   }
}
twoNumbers(10, 12); 


function gradingSystem (grade){
   if(grade <= -1 || grade > 100){
      console.log('ohhh,', grade, 'its an unvalid number, please try again' )
   }

  else if(grade <33) {
      console.log('sorry, try for next time');
   }

    else if (grade <= 50){
       console.log('you get C')
    }

    else if (grade <= 70){
       console.log('you get B')
    }

    else if(grade < 90){

      confirm.log('you got A')
    }

    else{
       console.log('congrats!! you get A+')
    }
}
gradingSystem('bangladesh')





//3. Use of normal function
 
 function addNumber(num1, num2){
   
   const sum = num1 + num2;
   return sum;
}
const twoNumbers = addNumber(10, 20);
console.log(twoNumbers); 


// 3.1 use of arrow function
const addNumber = (num1, num2) =>{
   const sum = num1 + num2;
   return sum; 
}

const twoNumbers = addNumber(10, 30);
console.log(twoNumbers);


const numbers = (num)=>{

   for ( let i = 1; i <num; i++){
      console.log(i);
   }
}
numbers(10);


const numbers = (num)=>{

   for ( let i = 1; i <num; i++){
      console.log(i);
   }
}
numbers(10);

// print all of the even number in 1 - 100 (function and loop)
function evenNumber(number) {
   for(let i = 1; i<=number; i++){
      if( i % 2 === 0){
         console.log(i)
      }
   }
}
evenNumber(100)


// print all of the number in 1 - 100 which are divided by 3(function and loop)

const oddNumbers = (number) =>{
   for( i = 1; i < number ; i++){
      if(i % 2 === 1){
         console.log(i)
      }
   }
} 
oddNumbers(100);





// Uses of loop (for, while, do while)

// for loop 
const friendName = ['farid', 'abir', 'rony'];
for(let i=0; i<1; i++){
   console.log(friendName);
} 

// while loop
let number = 1;
while(number < 10){
   console.log(number);
   number++

   // do while loop
let i = 1;
do{
      if(i%2 === 0){
         console.log(i);
      }  
      i++ ;
}
while(i<20)


// for of loop (specially use for array)
const numbers = [10, 20, 50, 85, 30];
   
   for (const number of numbers) {
      console.log(number)  
   }

// for in loop (this loop is specially use for object)
function myPhones (){
   const numbers = [10, 20, 50, 85, 30];
   const phones = {
   
      Brand:'samsung', color:'red', quality: 'Good', Quantity:20,
      Brand: 'Sony', color:'Yellow', Quality: 'Vary-good', Quantity: 82,
      Brand: 'Nokia', color:'Green', Quality: 'Also-good', Quantity: 58
   
   }
   for (const number in numbers) {
      console.log(number)  
   }
}
myPhones()
}




// Use of array (length, index, push, pop, indexOf, includes)
// normal
const numbers = [10, 50, 80, 70,30, 125, 25];
console.log(...numbers);
const phones = ['Samsung', 'Sony', 'IPhone', 'Nokia']
console.log(...phones);

// use of length
const numbers = ['Samsung', 'Sony', 'IPhone', 'Nokia'];
const totalLength = numbers.length;
console.log(totalLength);             

// use of push
const numbers = [10, 50, 80, 70,30, 125, 25];
numbers.push (100);
console.log(...numbers);

const phones = ['Samsung', 'Sony', 'IPhone', 'Nokia']
phones.push('xaomi');
console.log(phones);

// use of pop
const names = ['faruk', 'biddud', 'ashick', 'rabbi', 'sohag'];
names.pop();
console.log(names)

// use of indexOf
const names = ['faruk', 'biddud', 'ashick', 'rabbi', 'sohag'];
names.push('patu')
names.pop();
names[1] = 'nadu';
const nweName = names.indexOf('sohag')
console.log(nweName);
 


// use of object

// Normal declaration
const phones = {
   brand:'samsung', color:'yellow', quality:'good', quantity:'20',
   brand:'sony', color:'green', quality:'not-bad', quantity:'10',
   brand:'nokia', color:'yellow', quality:'good', quantity:'28',
   brand:'xaomi', color:'white', quality:'good', quantity:'23',

}

console.log(phones.brand)
console.log(phones['brand'])













