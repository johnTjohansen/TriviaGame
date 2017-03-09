
var quiz = [{
  question: "How does Cordelia get her sight back?",
  choices: ["Fiona takes Madame LaLaurie's eyes", "Misty Day restores her sight", "Myrtle melon-balls out the council's eyes"],
  correctA: "2"
}, {
  question: "What kind of business does Marie Leveau own?",
  choices: ["A nail salon", "A hair salon", "A coffee shop"],
  correctA: "1"
}, {
  question: "How does Kyle kill his mother?",
  choices: ["Bludgeons her", "Buries her alive", "Cuts her throat"],
  correctA: "0"
}, {
  question: "Who cuts out Spalding's tongue?",
  choices: ["Fiona", "Spalding", "Marie Laveau"],
  correctA: "1"
}, {
  question: "What's the first thing Marie severs from Madame LaLaurie's body?",
  choices: ["Her hand", "Her head", "Her tongue"],
  correctA: "0"
}, {
  question: "What does Spalding do with Madison's dead body?",
  choices: ["He has tea parties with it", "He buries it", "He puts it in Fiona's bed"],
  correctA: "0"
}, {
  question: "What kind of music does the coven play when the Axeman passes through town?",
  choices: ["Jazz", "Opera", "Classical"],
  correctA: "1"
}, {
  question: "What does Madame LaLaurie use baby's blood for?",
  choices: ["Feeds it to her slaves", "Uses it as a moisturizer", "Puts in baked goods and eats it"],
  correctA: "1"
}, {
  question: "Who kills Spalding?",
  choices: ["Zoe", "Cordelia", "Fiona"],
  correctA: "0"
}];

var currentQuestion = 0;
var selections = [];
var correctScore = 0;
var incorrectScore = 0;
var timeoutScore = 0;
var secsLeft = 15;
var quizzer = $('#quizBox');

$("#timerQ").html(secsLeft);

/* Begin game when the Start button is clicked. Hide the button and 
   generate the first question.*/
$(document).ready(function(){

	$('.startBtn').on('click', function (s) {
	   console.log("start btn clicked");

 	   s.preventDefault();

	   if(quizzer.is(':animated')) {
	      return false;
	   };

	   currentQuestion = 0;
 	   nextQuestion();
   	   $('.startBtn').hide();
	});

  // Animates buttons on hover
	$('.button').on('mouseenter', function () {
    	$(this).addClass('active');
	});
	$('.button').on('mouseleave', function () {
    	$(this).removeClass('active');
	});

	/*When a radio button is clicked, check to see if it's the correct 
	or incorrect answer.  Compare the choice to the correct answer in the quiz array.*/
	$("body").on("click", "#myClick", function() {
		clearTimeout();
		var right = quiz[currentQuestion].correctA;
		var rightAnsr = quiz[currentQuestion].choices[right];
		var picked = $("this").text();
	console.log("picked " + picked);
	console.log("correct" + rightAnsr);
		if (picked === rightAnsr) {
			winInform();
		} else {
			wrongInform();
		};
	});
});

// If the chosen answer is correct, clear out the question and show a 
//  Correct! message for 3 seconds.
function winInform() {
	console.log("correct");
	correctScore++;
	$("#quizBox").empty();
	$("#quizBox").append("<h2>Correct!</h2>");
	setTimeout(threeSeconds, 1000 * 3);
};

// If the chosen answer is incorrect, clear out the question and show a 
//  "wrong answer" message and the correct answer for 3 seconds.
function wrongInform() {
	console.log("wrong answer");
	var rightAnsr = quiz[currentQuestion].correctA;
	incorrectScore++;
	$("#quizBox").empty();
	$("#quizBox").append("<h3>Wrong!</h3>");
	$("#quizBox").append("<h3>Correct Answer is " + 
			quiz[currentQuestion].choices[rightAnsr] + "</h3>");
	setTimeout(threeSeconds, 1000 * 3);
};

// When the 3 seconds are completed, set up the next question.  If that was
//  the last question, show the final tally screen.
function threeSeconds() {
	console.log("3 seconds");
	$("#quizBox").empty();
	if (currentQuestion === quiz.length) {
		finalScreen();
	} else {
	currentQuestion++;
	nextQuestion();
	createAnswers(currentQuestion);
	};
};

// Retrieve the question from the quiz array and set up the HTML to display
// it and its answers.
function renderQuestion(index) {
		console.log("setup questions");
		var questLine = $('<div>', {
			id: 'question'
		});
		var questNum = $('<h2>Question ' + (index + 1) + ':</h2>');
		questLine.append(questNum);
		console.log("question " + quiz[index]);
		var askIt = $('<p>').append(quiz[index].question);
		questLine.append(askIt);

		var radioButtons = createAnswers(index);
		questLine.append(radioButtons);

		return questLine;
};

// Get the multiple choices from the quiz array and set them up for display
// and radio buttons for selection.  Start the countdown.
function createAnswers(index) {
	console.log("createAnswers");
		// create Answers and buttons for selection
		var answerList = $('<ul>');
		var lineItem;
		var entry = '';
		for (var i = 0; i < quiz[index].choices.length; i++) {
			lineItem = $('<li>');
			entry = '<input type="radio" name="answer" value=' + i + ' id="myClick" />';
			entry += quiz[index].choices[i];
			lineItem.append(entry)
			answerList.append(lineItem);
		}
		startTimer();
		return answerList;
};
	
// Clear the document's question area and put new question onto screen (unless
// it's the last question)
function nextQuestion() {
	console.log("nextQuestion " + quiz.length)
  	  quizzer.fadeOut(function() {
        $('#question').remove();
        if(currentQuestion < quiz.length){
          var nextQuestion = renderQuestion(currentQuestion);
          quizzer.append(nextQuestion).fadeIn();
        } else {
          finalScreen()	
        };
      });    
};

//Set up the timer and start the countdown.
function startTimer() {
		console.log("timer routine hit");
		secsLeft = 15;
		var counter=setInterval(timer, 1000);	 //1000 will run it every 1 second

		function timer() {
   			secsLeft--;
   			console.log("countdown " + secsLeft);
 			if (secsLeft <= 0) {
	  	 	 	clearInterval(counter);
 	     	    alert("Time's up");
 	     	    timeoutScore++;
 	 		    currentQuestion++;
 	  		    nextQuestion();
  	  		    return;
			}
		    $("#timerQ").html(secsLeft);
		};
};	

// After the final question is answered, show the final tallies.
function finalScreen() {
	console.log("end game score");
	$("#quizBox").empty();
	if (correctScore === 9) {
		$("#quizBox").text("<h3>You must be the new Supreme!</h3>");
	};
	$("#quizBox").append("<h3>Correct Answers: " + correctScore + "</h3>");
	$("#quizBox").append("<h3>Wrong Answers: " + incorrectScore + "</h3>");
	$("#quizBox").append("<h3>Unanswered: " + timeoutScore + "</h3>");
	$("#quizBox").append("<button type='button' id='startGame'>Start</button>");
};
