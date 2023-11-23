var questions = 2;  correct = 0;  low = 3; high = 9;
function main(){
  setup();
  for (question = 1; question <= questions; question++) {
    correct += multiply(question);
  }
  let percentRight = (correct / questions) * 100;
  alert("You got " + percentRight + " percent correct the first time");
  if (percentRight == 100) alert("Charlie, you've won!");
}
function setup() {
  let change = confirm("Change setup?");
  if (change == true) {
    questions = parseInt(prompt("Questions?"));
    low = parseInt(prompt("Lowest factor?"));
    high = parseInt(prompt("Highest factor?"));
  }
} 
function multiply(question){
  correct = 0;
  let x = Math.floor(Math.random()*((high+1)-low))+low;
  let y = Math.floor(Math.random()*((high+1)-low))+low;
  let product = x*y;  
  let answer = prompt("Question " + question + ": What is "+x+" * "+y+"?");
  if (product == answer) correct = 1;
  else while (product != answer) {
      answer = prompt("Incorrect. What is "+x+" * "+y+"?");
    }
  return correct;
}
