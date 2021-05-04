import { countAsAYes, countAsANo, countSpacewalk } from './utils.js';

// import functions and grab DOM elements
const button = document.getElementById('button');
const resultDisplay = document.getElementById('result');
const headerHeight = document.querySelector('body');

// initialize state

// set event listeners to update state and DOM
button.addEventListener ('click', () => {
    //alert user the quiz is going to start
    alert('Let\'s test your new knowledge.');

    //confirm if user is ready to start the quiz
    const quizStartConfirm = confirm('Are you ready?');
    if (quizStartConfirm === false) { 
        alert('Study harder and come back when you\'re ready!');
        return;
    }

    //get user first + last name
    const userFirstName = prompt('What\'s your first name?');    
    const userLastName = prompt('What\'s your last name?');

    //ask question 1
    const answerOne = prompt(`Ok ${userFirstName}, did Mae Jemison fly on the Endeavor?`);    
    //initialize state
    let score = 0;
    //evaluate answer
    if (countAsAYes(answerOne)) {
        score++;
    }


    //ask question 2
    const answerTwo = prompt('Was Sally Ride the first woman in space?');
        //evaluate answer
    if (countAsANo(answerTwo)) {
        score++;
    }

    
    //ask question 3
    const answerThree = prompt('Has Stephanie Wilson flown to space three times?');    
    //evaluate answer
    if (countAsAYes(answerThree)) {
        score++;
    } 

    //ask bonus question
    const answerFour = prompt('Bonus Points: What is the name of the woman who shares the record for the longest single spacewalk?');
     //evaluate answer
    if (countSpacewalk(answerFour)) {
        score++;
    }

    const scorePercentage = parseInt((score / 3) * 100);
    headerHeight.style.setProperty('--header-height', '200px');
    resultDisplay.textContent = `${userFirstName} ${userLastName}, thanks for playing! You got ${score} questions right. Your scored ${scorePercentage}%`;

});