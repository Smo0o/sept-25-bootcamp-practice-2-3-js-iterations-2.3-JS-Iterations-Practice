//PART A

for(let x=0;x<=20;x++){
  console.log("x="+x);
}

for(let k=0;k<=50;k += 5){
  console.log("multiple of k x 5 is " +k);
}


let sum = 0;
for(let z=0;z<=10;z++){
  sum = sum + z;
}
  console.log(`the sum of the numbers is ${sum}`);

//PART B

//let answer = "yes";
//while(answer != "open"){
  //console.log("wrong");
 // answer = prompt("enter open to get in");
//}``


let answer2 = ["no", "nope", "good"];
let index = 0;
let text = answer2[index];
while(text !== "good"){
    console.log("wrong password");
    index++;
    text = answer2[index];
}

console.log("correct password");


let counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"finish", "finish1"];
let numberPos = 0;
let typing = counting[numberPos];
while(typing != "finish1"){
  console.log(`your number is ${typing}`);
  numberPos++;
  typing = counting[numberPos];
}

let countdown = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ,0, "GO!"]
let countNumber = 0;
let inputCount;
do {
  inputCount = countdown[countNumber];
  console.log(`${inputCount}`)
  countNumber++;
} while (inputCount != "GO!");

let guess;

do {
  guess = Math.floor(Math.random() * 10) + 1;
  console.log(`you guessed ${guess}`);
} while (guess != 5);

console.log("you got it the answer was 5!")

let menu = 1;

do {
  console.log("1. Play 2. Exit");
  menu = Number(prompt("Enter 1 to play or 2 to exit"));
} while (menu !== 2);

console.log("You exited the menu");

let numberInput = 0;
do {
  numberInput = prompt("enter a number greater than 10");
} while (numberInput <= 10);
console.log("thank you for entering a number greater than 10");

for(let i=0; i>=10; i++)
  if(i==7){
    break;
  }

for(let j=1;j<=10;j++){
  if(j==5){
    continue;     
  }
  console.log(j);
}
for(let m=1;m<=20;m++){
  if(m==17){
    break;
  }
  if(m%2==0){
    continue;
  } 
  console.log(m);
} 


/*
  =============================================
  🧩 JavaScript Loop Practice Assignment
  =============================================
  Goal: Get comfortable writing for, while, and do...while loops in real-life scenarios.
  Each section has 3 short exercises.
  Write your code below each section comment.
  ---------------------------------------------
  */

  // 🔹 PART A – FOR LOOPS
  // 1. Counting Up:
  //    Print numbers from 1 to 20 using a for loop.
  //
  // 2. Multiples of 5:
  //    Print all multiples of 5 from 5 to 50.
  //    Hint: use i += 5 instead of i++.
  //
  // 3. Sum of First 10 Numbers:
  //    Use a for loop to calculate the sum of numbers from 1 to 10 and display the total.



  // 🔹 PART B – WHILE LOOPS
  // 1. Password Checker (simulated):
  //    Keep checking a variable `input` until it matches "open".
  //    You can simulate this with an array like ["wrong", "nope", "open"].
  //
  // 2. Add Until Finish:
  //    Keep adding numbers in an array until the word "Finish" appears.
  //
  // 3. Countdown:
  //    Start from 10 and keep counting down until you reach 0.
  //    Print each number on a new line.



  // 🔹 PART C – DO...WHILE LOOPS
  // 1. Guessing Game (simulation):
  //    Generate a random number between 1–10 using:
  //       Math.floor(Math.random() * 10) + 1
  //    Keep “guessing” until you get 5. The loop should run at least once.
  //
  // 2. Menu Simulation:
  //    Show a fake menu at least once (like “1. Play  2. Exit”) and exit when option = 2.
  //
  // 3. Number Input Validation:
  //    Ask for a number greater than 10.
  //    Keep re-checking until it’s valid (simulate input with variables).



  // 🔹 PART D – BONUS: LOOP CONTROL
  // 1. Break Example:
  //    Loop numbers 1–10. Stop completely when the number is 7.
  //
  // 2. Continue Example:
  //    Loop numbers 1–10. Skip printing when the number is 5.
  //
  // 3. Combined:
  //    Print numbers 1–20, skip even numbers, but stop entirely when you hit 17.



  // ✅ Submission
  // - Submit a single .html file containing your solutions.
  // - Include comments describing which loop type you used.
  // - Use console.log() or document.write() to display results.
