
var quiz = [{
  "question": "How does Cordelia get her sight back?",
  "choices": ["Fiona takes Madame LaLaurie's eyes", "Misty Day restores her sight", "Myrtle melon-balls out the council's eyes"],
  "correct": "2"
}, {
  "question": "What kind of business does Marie Leveau own?",
  "choices": ["A nail salon", "A hair salon", "A coffee shop"],
  "correct": "1"
}, {
  "question": "How does Kyle kill his mother?",
  "choices": ["Bludgeons her", "Buries her alive", "Cuts her throat"],
  "correct": "0"
}, {
  "question": "Who cuts out Spalding's tongue?",
  "choices": ["Fiona", "Spalding", "Marie Laveau"],
  "correct": "1"
}, {
  "question": "What's the first thing Marie severs from Madame LaLaurie's body?",
  "choices": ["Her hand", "Her head", "Her tongue"],
  "correct": "0"
}, {
  "question": "What does Spalding do with Madison's dead body?",
  "choices": ["He has tea parties with it", "He buries it", "He puts it in Fiona's bed"],
  "correct": "0"
}, {
  "question": "What kind of music does the coven play when the Axeman passes through town?",
  "choices": ["Jazz", "Opera", "Classical"],
  "correct": "1"
}, {
  "question": "What does Madame LaLaurie use baby's blood for?",
  "choices": ["Feeds it to her slaves", "Uses it as a moisturizer", "Puts in baked goods and eats it"],
  "correct": "1"
}, {
  "question": "Who kills Spalding?",
  "choices": ["Zoe", "Cordelia", "Fiona"],
  "correct": "0"
}];

var currentQuestion = 0;
var selections = [];
var correctScore = 0;
var incorrectScore = 0;
var timeoutScore = 0;
var secsLeft = 30;
var quiz = $('#quizBox');

$("#timerQ").html(secsLeft);

$('#startGame').on('click', function (s) {
    s.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    };

    currentQuestion = 0;
    selections = [];
    displayNext();
    $('#startGame').hide();
});

  // Animates buttons on hover
$('.button').on('mouseenter', function () {
    $(this).addClass('active');
});
$('.button').on('mouseleave', function () {
    $(this).removeClass('active');
});

function chosen() {
	 selections[currentQuestion] =
	  +$('input[name="answer"]:checked').val();
};

function renderQuestion(index) {
		console.log("setup questions");
		var questLine = $('<div>', {
			id: 'question'
		});
		var questNum = $('<h2>Question ' + (index + 1) + ':</h2>');
		questLine.append(questNum);

		var askIt = $('<p>').append(quiz[index].question);
		questLine.append(askIt);

		var radioButtons = createAnswers(index);
		questLine.append(radioButtons);

		return questLine;
};

function createAnswers(index) {
		// create Answers and buttons for selection
		var answerList = $('<ul>');
		var lineItem;
		var entry = '';
		for (var i = 0; i < quiz[index].choices.length; i++) {
			lineItem = $('<li>');
			entry = '<input type="radio" name="answer" value=" + i + " />';
			entry += quiz[index].choices[i];
			lineItem.append(entry)
			answerList.append(lineItem);
		}
		return answerList;
};
	
function nextQuestion() {
  	  quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
}

function startTimer() {
		console.log("timer routine hit");

		var counter=setInterval(timer, 1000);	 //1000 will run it every 1 second

		function timer() {
   			count=count-1;
 			if (count <= 0) {
	  	 	 	clearInterval(counter);
 	     		 alert("Time's up");
 	 		     currentQuestion++;
 	  		    retrieveQuestion();
  	  		    return;
			}
		$(".timerQ").html=("Time remaining: " + count + " secs");
		}
};	

function finalScreen() {
	console.log("end game score");
	document.getElementById(".answerBox").style.visibility = "hidden";
};

