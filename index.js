//Welcome message
readlineSync = require('readline-sync');
console.log("Welcome to the DO YOU KNOW NEERAJ quiz!");
var username = readlineSync.question("What's your name? ");
console.log("\nHello "+username+" let's begin");
console.log("--------------------------------");

//questions
var questions = [
{
 question: "Where do I live? ",
 answer: "hyderabad"
},
{
  question: "What's my age? ",
  answer: "21",
},
{
  question: "which college am I from? ",
  answer: "mallareddy"
},
{
  question: "which school am I from? ",
  answer: "oxford"
},
{
  question: "Do I have a dog? ",
  answer: "no"
}
]

//answerCheck
var score = 0;
function play(question, answer)
{
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You're correct!");
    score++;
  }
  else{
    console.log("Oops that's incorrect!");
  }
  console.log("score: ",score);
  console.log("--------------------------------");
}

//toTraverse
for(i=0; i<questions.length; i++)
{
  var current = questions[i];
  play(current.question, current.answer);
}

//showScore
console.log(username+" your final score is: ",score);

//highScores data
var highScores = [
  {
    name: "Baburao Ganpatrao Apte",
    score: 5
  },
  {
    name: "Raju",
    score: 3
  }
]

//finalMessage
console.log("\nHere are the high scores:")
for(i=0; i<highScores.length; i++)
{
  console.log(highScores[i]);
}
console.log("Did you beat the highscores? ping me to get it updated");