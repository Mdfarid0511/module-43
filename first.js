// 1. using of let and constant.

/*********************************************
 let numberOne = 10;
numberOne = 0;
 console.log(numberOne) 

const myName = 'Farid';
const countryName = 'I am Bangladeshi'
console.log(countryName, ':', myName); 
***********************************************/



// 2. How to write the 6 types of condition (>, <, >=, <=, ===, !==) use of (&& ,||)

/*************************************************
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

****************************************************/



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
 



// print all of the even number in 1 - 100 (function and loop)



