const chalk = require('chalk');
var score = 0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("hii!!! my name is Tehkum. \nCan i have your name? ");
console.log(chalk.redBright("so " + userName + " Basically this quiz is about me and you are here because I want to know how much do you know me. Lets start the quiz. You have to write only name of the person not with surname. "))
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.cyan(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("yay!!! you are correct"))
    score++;
  }
  else {
    console.log(chalk.red("nah!!! wrong answer"))
  }
}
var questions = [
  {
    question: "What is my Birth date?(format - dd/mm)\nYour answer: ",
    answer: "13/10",
  },
  {
    question: "To whom animesh bhaiya proposed?\nYour answer: ",
    answer: "prerna",
  },
  {
    question: "Who was my girlfriend in school time\nYour answer: ",
    answer: "garima",
  },
  {
    question: "Who was my roommate in first year in 301-B?\nYour answer: ",
    answer: "atul",
  },
  {
    question: "who slapped me in the college?\nYour answer: ",
    answer: "sahil",
  },
  {
    question: "who was my rommate in first year in 301-C?\nYour answer: ",
    answer: "gaurav",
  },
  {
    question: "In which subject I failed in first year?\nYour answer: ",
    answer: "electrical",
  },
  {
    question: "Who is most annoying person in college?\nYour answer: ",
    answer: "shreyansh",
  },
  {
    question: "Who is called singer?\nYour answer: ",
    answer: "manan",
  },
  {
    question: "who stole the prism in physics lab?\nYour answer: ",
    answer: "mayank",
  },
  {
    question: "Who in our class will not have beard in his lifetime\nYour answer: ",
    answer: "manav",
  },
  {
    question: "A person who I like the most\nYour answer: ",
    answer: "Ummal",
  },
  {
    question: "The person who inspired me for coding?\nYour answer: ",
    answer: "atul",
  },
];
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
  console.log(chalk.cyan("-------------------------------"))
}
console.log(chalk.blue("your score is " + score))
if (score >= 9) {
  console.log(chalk.bgCyan("Congrats!!! you scored well"))
}
else {
  console.log(chalk.bgCyan("Maybe you can score well in next turn"))
}
console.log("if you have a nice score, click the screenshot and send to me")
console.log(chalk.blue.bgYellowBright("current winners are:"))
var winner = [
  {
    wName: "Tehkum",
    wScore: 13,
  },
  {
    wName: "Brad pitt",
    wScore: 12,
  },
  {
    wName: "Tom hardy",
    wScore: 11,
  }
];
for (var j = 0; j < winner.length; j++) {
  console.log(chalk.magenta(j + 1 + ")." + winner[j].wName + "-->" + winner[j].wScore))
}