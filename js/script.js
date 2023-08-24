// example api : https://opentdb.com/api.php?amount=10&category=11&difficulty=easy

// ! =============> import get quiz and get question classes
import { GetQuiz } from "./quiz.js";
import { GetQuestion } from "./getquestions.js";


// ! =============> html elements

// ! =============> home page
// ? for selecting catigory
const catigory = document.getElementById('catigory');

// ? for selecting diffculty
const diffeculty = document.getElementById('diffeculty');

// ? for selecting question number
const questionNumber = document.getElementById('questionNumber');

// ? for make quiz button
const makeQuiz = document.getElementById('makeQuiz');

// ? questions array 
export let questionsResult;

// ? foe showing alert 
export const alert = document.getElementById('alert');



// ! =============> getquestions page
// ? show question
export const questionContainer = document.getElementById('question');

// ? for showing total answer or length of the array
export const totalQuestions = document.getElementById('totalQuestions');

// ? for showing current question
export const currentQuestion = document.getElementById('currentQuestion');

// ? for showing category
export const categoryContainer = document.getElementById('showCat');

// ? for showing choices for the quenstion container
export const choices = document.getElementById('choices');

// ? exporting the newquiz to change score
export let newQuiz;

// ! =============> end quiz page
// ? for showing score
export const result = document.getElementById('result');

// ? try again button
const tryAgainBtn = document.getElementById('tryAgainBtn');

// ! =============> END of html elements


// ! =============> initial values
// ? hiding questions and end quiz pages
$('.questions').hide(0);
$('.endQuiz').hide(0);
$('#xmark').hide(0);
$('#check').hide(0);
// ! =============> initial values END


// ! =============> EVENTS
// * making a quiz event

makeQuiz.addEventListener('click', async () => {

    // ? sending paramateres to constructor to make an obj
    newQuiz = new GetQuiz(catigory.value, diffeculty.value, questionNumber.value);
    // console.log(newQuiz);
    questionsResult = await newQuiz.getApi();
    console.log(questionsResult);

    // ? sending index to show questions
    let newQuestion = new GetQuestion(0)
    // console.log(newQuestion);
    newQuestion.display();
    // console.log(newQuestion.allChoices());
})

// * try again button
tryAgainBtn.addEventListener('click', () => {
    $('.endQuiz').hide(300);
    $('.home').show(500);

    // ? getting inputs back to initial values
    catigory.value = ''
    diffeculty.value = 'easy'
    questionNumber.value = ''
})
// ! =============> EVENTS END



