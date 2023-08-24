// ! =============> importing alert so it is visable to this js file
import { alert } from "./script.js";


// todo class for making quiz
// ?prob
// ! select cat (done)
// ! select diff (done)
// ! select number of questions (done)

// ? methods 
// ! get api (done)
// ! hide home page (done)


export class GetQuiz {
    // ! probs
    constructor(cat, diff, qNum) {
        this.catigory = cat;
        this.diffculty = diff;
        this.questionNumber = qNum;
        this.score = 0;
    }

    // ! get api method
    async getApi() {
        // ? if statement for showing alert if the user didnt inser a question number
        if (this.questionNumber == '') {
            // console.log('error');
            // console.log(alert);
            alert.innerHTML = 'pls select question number';
            return
        } else {
            // ? getting api data
            alert.innerHTML = '';
            const questions = await fetch(`https://opentdb.com/api.php?amount=${this.questionNumber}&category=${this.catigory}&difficulty=${this.diffculty}`)
            const questionsData = await questions.json();
            let questionsResults = questionsData.results;
            // console.log(questionsResults);
            this.hideHome()
            return questionsResults;
        }
    }

    // ! hide home page method
    hideHome() {
        $('.home').hide(500);
    }
}