/*
var name = "shreyas";
name = 21;
name = true;
console.log("Hello World");
console.log(name);
*/
// it allow dynamically typed variable which allow change variable type if it predefine !
// It is Single Threaded - execute code
/*
var a = 1;

while(1){
  a++;
}
*/

// the different type of variable in JS
/*
const Fname = "Shreyas"
let age= 21
let number = [1,24,4]
var isStudent = false

console.log(Fname,age,isStudent,number)
console.log(number[2])
*/

//#Assignment no 2 Write a function called canVote that returns true or false if the age of a user is > 18

// let userAge = [21,12,33,40,1,18,17,17.9,18.2];


// function voterCheck(ages){
//   let eligibleVoters = [];
//   for (let age of ages){
//     if(age >= 18) {
//       console.log( age + "-> let Them Vote");
//       eligibleVoters.push(age);
//     } else{
//       let timelefttovote  = 18 - age;
//       let time
//       console.log( age + "-> wait till 18+");
//     }
//   }
//   return eligibleVoters;
// }

// let result = voterCheck(userAge);
// console.log("eligibleVoters will be",result);

// or using filters
let userAge = [21, 12, 33, 40, 1, 18, 17, 17.9, 18.2];

function voterCheck(ages) {
  ages.forEach((age) => {
    let completedYears = Math.floor(age); // 17.9 -> 17, 18.2 -> 18

    if (completedYears >= 18) {
      console.log(`${age}: Let them vote!`);
    } else {
      let yearsLeft = 18 - completedYears;
      let unit = yearsLeft === 1 ? "year" : "years";
      console.log(`${age}: Wait ${yearsLeft} more ${unit} to vote.`);
    }
  });
}

voterCheck(userAge);

/*
21: Let them vote!
12: Wait 6 more years to vote.
33: Let them vote!
40: Let them vote!
1: Wait 17 more years to vote.
18: Let them vote!
17: Wait 1 more year to vote.
17.9: Wait 1 more year to vote.
18.2: Let them vote!
*/
