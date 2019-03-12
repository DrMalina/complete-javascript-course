
// function constructor
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('John', 1992, 'doctor');
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

/*function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you explain what UX is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log(name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/*
//  Coding challenge 7 BASIC
(function (){
    //Question constructor
    var Question = function(question, answers, correct) {
        this.question = question;
        this.answers = answers ;
        this.correct = correct;
    }

    //Questions
    var q1 = new Question("What was the name of Deanerys mother?", 
                            ['Rhaella', 'Elia', 'Rhaenys'],
                             0);
    var q2 = new Question("Who is called the King in The North?",
                            ['Ned Stark', 'Ramsey Bolton', 'Jon Snow'],    
                            2);
    var q3 = new Question("Where did Jorah Mormont serve?", 
                            ['Second Sons', 'Golden Company', 'Unsullied'],    
                            1);

    //All questions in arr
    var questionsArr = [q1,q2,q3];

    // Method to display question with answers in console
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i=0; i < this.answers.length; i++) {
            console.log(i+' : '+this.answers[i]);
        }
    }

    //Method to compare user answer with correct one
    Question.prototype.checkAnswer = function(answer) {
        answer == this.correct ? console.log('Correct!') : console.log('Incorrect :(');
    }

    //Generate random question and display it
    var rdmQuestion = questionsArr[Math.floor(Math.random() * 3)];
    rdmQuestion.displayQuestion();

    //Prompt user input field
    var userAnswer = prompt('What is the correct answer?');

    //Check if correct
    rdmQuestion.checkAnswer(userAnswer);
})();
*/

//  Coding challenge 7 EXPERT OWN 
(function (){
    //var score = 0;

    //Question constructor
    var Question = function(question, answers, correct) {
        this.question = question;
        this.answers = answers ;
        this.correct = correct;
    }

    // Method to display question with answers in console
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i=0; i < this.answers.length; i++) {
            console.log(i+' : '+this.answers[i]);
        }
    }

    //Method to compare user answer with correct one
    Question.prototype.checkAnswer = function(answer, callback) {
        
        var sc;

        if(answer == this.correct) {
            console.log('Correct!');
            sc = callback(true);

        } else {
            console.log('Incorrect :(');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    /*
    //Method to compare user answer with correct one
    Question.prototype.checkAnswer = function(answer) {
        //answer == this.correct ? console.log('Correct!') : console.log('Incorrect :(');

        if(answer == this.correct) {
            score++;
            console.log('Correct!');
        } else {
            console.log('Incorrect :(');
        }

        console.log('Your current score is: '+ score);
        console.log('-----------------');
    }
    */

    //Method to display score
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: '+ score);
        console.log('-----------------');
    }

    //Questions
    var q1 = new Question("What was the name of Deanerys mother?", 
                            ['Rhaella', 'Elia', 'Rhaenys'],
                             0);
    var q2 = new Question("Who is called the King in The North?",
                            ['Ned Stark', 'Ramsey Bolton', 'Jon Snow'],    
                            2);
    var q3 = new Question("Where did Jorah Mormont serve?", 
                            ['Second Sons', 'Golden Company', 'Unsullied'],    
                            1);

    //All questions in arr
    var questionsArr = [q1,q2,q3];
    
    //Generate random question and display it
    var rdmQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];
    rdmQuestion.displayQuestion();

    //Prompt user input field
    var userAnswer = prompt('What is the correct answer?');

    function score() {
        var sc = 0;
        return function(correct){
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    //Check if correct
    rdmQuestion.checkAnswer(userAnswer, keepScore);
    nextQuest(rdmQuestion);

    //Generate new question
    function nextQuest(prev) {

        //random new question
        var newQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];

        //if the same as prev question start again function
        if(newQuestion === prev) {
            return nextQuest(newQuestion);            
        }
        else {
            var ans;
            newQuestion.displayQuestion();
            ans = prompt('What is the correct answer?');

            if(ans !== null){ //If user cancels, quiz stops
                newQuestion.checkAnswer(ans, keepScore);
                return nextQuest(newQuestion); //loop
            }            
        }
    }

})();



/*//  Coding challenge 7 EXPERT REVISED
(function (){

    //Question constructor
    var Question = function(question, answers, correct) {
        this.question = question;
        this.answers = answers ;
        this.correct = correct;
    }

    // Method to display question with answers in console
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i=0; i < this.answers.length; i++) {
            console.log(i+' : '+this.answers[i]);
        }
    }

    //Method to compare user answer with correct one
    Question.prototype.checkAnswer = function(answer, callback) {
        
        var sc;

        if(answer == this.correct) {
            console.log('Correct!');
            sc = callback(true);

        } else {
            console.log('Incorrect :(');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: '+ score);
        console.log('-----------------');
    }

    //Questions
    var q1 = new Question("What was the name of Deanerys mother?", 
                            ['Rhaella', 'Elia', 'Rhaenys'],
                             0);
    var q2 = new Question("Who is called the King in The North?",
                            ['Ned Stark', 'Ramsey Bolton', 'Jon Snow'],    
                            2);
    var q3 = new Question("Where did Jorah Mormont serve?", 
                            ['Second Sons', 'Golden Company', 'Unsullied'],    
                            1);

    //All questions in arr
    var questionsArr = [q1,q2,q3];

    

    function score() {
        var sc = 0;
        return function(correct){
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    //Generate new question
    function nextQuest() {        
        var rdmQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];
        rdmQuestion.displayQuestion();        
        var userAnswer = prompt('What is the correct answer?');       

        if(userAnswer !== null) {
            //Check if correct
            rdmQuestion.checkAnswer(userAnswer, keepScore); 
            nextQuest();            
        }        
    }

    nextQuest();

})();
*/









