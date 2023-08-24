// !  =============> importing question html components from script.js
import { questionsResult, questionContainer, categoryContainer, totalQuestions, currentQuestion, choices, newQuiz ,result} from "./script.js";


// todo class for making questions
// ? prob
// ! catigory (done)
// ! questions (done)
// ! wrong answers (done)
// ! correct answers (done)
// ! all answers (done)
// ! index (done)

// ? methods 
// ! display question (done)
// ! check answers (done)
// ! go to next question (done)


export class GetQuestion {
    // ! probs
    constructor(index) {
        this.category = questionsResult[index].category;
        this.correctAnswer = questionsResult[index].correct_answer;
        this.difficulty = questionsResult[index].difficulty;
        this.incorrectAnswers = questionsResult[index].incorrect_answers;
        this.question = questionsResult[index].question;
        this.index = index;
        this.allAnswers = this.allChoices();
    }

    // ! method to add correct answer to incorrect answer array
    allChoices() {
        // ? adding the correct answer to incorrect answers array then randomizing by using sort array method
        return this.incorrectAnswers.concat(this.correctAnswer).sort()
    }

    // ! display questions method
    display() {
        // ? show question page
        $('.questions').show(600);

        // ? changing inner html values according to questionsResult array
        questionContainer.innerHTML = this.question;
        totalQuestions.innerHTML = questionsResult.length;
        currentQuestion.innerHTML = this.index + 1;
        categoryContainer.innerHTML = this.category;

        // ? ====> making a map loop on all answers array to show choices in terms of buttons
        // ? then inserting it into the choices container
        // ? map higher order func must take an arrow or anonymus func
        const allChoices = `

    ${this.allAnswers.map((x) => {
            return `
    <div class="col-lg-6">
    <div>
        <button class="btn btn-outline-dark text-white w-100 border-2 border-white"
            id="submitQuizType">${x}</button>
    </div>
    </div>   
    `
        }).join("")}
    `


        choices.innerHTML = allChoices;

        // ? after making choices we can now make a nude list on them
        // ? add event listner on all answers
        const allChoicesArr = document.querySelectorAll('#choices button');
        // console.log(allChoicesArr);
        for (let i = 0; i < allChoicesArr.length; i++) {
            allChoicesArr[i].addEventListener('click', (e) => {
                // ?calling the check answers method in an arrow func
                this.checkAnswers(e)
                this.nextQuestion()
            })
        }
    }

    // ! check answers method
    checkAnswers(e) {
        // console.log(e.target.innerHTML);
        // ? if statement to compare selected answer to correct answer
        if (e.target.innerHTML.toLowerCase() == this.correctAnswer.toLowerCase()) {
            // console.log('correct');
            $('#check').toggle(100).slideUp(300);
            newQuiz.score++;
            console.log(newQuiz.score);
        } else {
            // console.log('wrong');
            $('#xmark').toggle(100).slideUp(300);
        }
    }


    // ! next question
    nextQuestion() {
        // ? adding 1 to index so we go to next question
        this.index += 1
        if (this.index > questionsResult.length - 1) {
            console.log('game over');
            $('.questions').hide(500)
            $('.endQuiz').show(600)
            result.innerHTML = newQuiz.score;
        }
        else {
            // ?making a new question 

            let nextQuest = new GetQuestion(this.index)
            nextQuest.display()
        }
    }








}

