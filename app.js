const num1 = Math.ceil(Math.random() *10) // get random # assigned to variable num1
const num2 = Math.ceil(Math.random() *10) // get random # assigned to variable num2
const formEl = document.getElementById("form") // form element attached 
const inputEl= document.getElementById("input") // input element attached
const questionEl = document.getElementById("question"); // declare variable and attach document to question ID
questionEl.innerText = `What is ${num1} multiplied by ${num2}? `  // print questionEL to innertext with question and num variables

let correctAns = num1 * num2  // answer variable 

let score = 0  //  declare score at 0 at start of game. 

formEl.addEventListener("submit", () => {  // add event listner upon click of submit button
const userAns = +inputEl.value
if(userAns === correctAns){  // if user's Answer is same as correct answer variable increment score if not decrement score
score++;
console.log(score)
} else {
  score--;
  console.log(score)
}
;
});


