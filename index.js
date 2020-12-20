var readlineSync = require('readline-sync')


var score = 0
var username = readlineSync.question('Hi there! Whats your name? ')
console.log("\n Welcome "+username+" to 'How well do you know Soham'*************")


console.log("\n*******RULES******")
console.log('1. There are 10 Questions \n2. Each Question gives you 1 point \n3. Each wrong answer gives you -1 point')


var questionOne = {
  question : 'What is my Birth Place? \n a. Konkan \n b. Pune \n c. Mumbai  \n d. Goa \n',
  answer : 'a'
}

var questionTwo = {
  question : 'How old am I? \n a. VERY OLD\n b. 23  \n c. 22 d. 25\n',
  answer : 'b'
}

var questionThree = {
  question : 'How long have I lived in Pune? \n a. 15 years \n b.16 years \n c.17 years \n d.21 years\n',
  answer : 'd'
}

var questionFour = {
  question : 'Which pet did Soham adopt in 2018 \n a. Dog \n b.Hamster \n c. Rabbit \n d. Cat \n',
  answer : 'd'
}

var questionFive = {
  question : 'How many times did Soham break his left forearm? \n a.Once \n b. Twice \n c.Thrice\n d. 4 times\n' ,
  answer : 'b'
}

var questionSix = {
  question : 'What is Soham the most afraid of? \n a. Breaking his hand once more \n b. Rollercoasters c. Bumble Bees d. Trypophobia  \n',
  answer : 'b'
}

var questionSeven = {
  question : 'What is Sohams favorite movie \n a. The Shawshank Redemption \n b. The Big Short \n c. Interstellar \n d.The Departed  \n',
  answer : 'a'
}

var questionEight = {
  question : 'Who is his favorite artist? \n a. John Mayer \n b. The Lumineers  \n c. Tame Impala \n d. Red Hot Chilli Peppers \n',
  answer : 'a'
}

var questionNine = {
  question : 'What dessert does Soham dislike? \n a.Cake  \n b.Pastry  \n c.Pie  \n d.Doughnut \n',
  answer : 'd'
}

var questionTen = {
  question : 'What is his dream destination? \n a.Niagara Falls \n b.To be under the Northern Lights  \n c.To visit the RV from "Into the Wild" \n d. To see the Grand Canyon  \n',
  answer : 'b'
}

var questionArr = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen]

function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question).toLowerCase()
  if(userAnswer === answer){
    console.log('Correct Answer !')
    score +=1
  }else{
    console.log('Incorrect Answer :/')
    score -=1
  }
  console.log('Current Score '+score)
  console.log('--------------------------------------------------')
}

for(i =0; i<questionArr.length;i++){
  checkAnswer(questionArr[i].question, questionArr[i].answer)
}

var highScore  = 9;
console.log('Final Score '+score)
if(score>highScore){
  console.log('Congratulations, you have setup a new highScore '+score)  
}else{
  console.log('You were only '+ (highScore-score) +' away from the highScore')
  console.log("Better luck next time!")
}  






