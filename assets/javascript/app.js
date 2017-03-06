var quiz = [{
  "question": "How does Cordelia get her sight back?",
  "choices": ["Fiona takes Madame LaLaurie's eyes", "Misty Day restores her sight", "Myrtle melon-balls out the council's eyes"],
  "correct": "Myrtle melon-balls out the council's eyes"
}, {
  "question": "What kind of business does Marie Leveau own?",
  "choices": ["A nail salon", "A hair salon", "A coffee shop"],
  "correct": "A hair salon"
}, {
  "question": "How does Kyle kill his mother?",
  "choices": ["Bludgeons her", "Buries her alive", "Cuts her throat"],
  "correct": "Bludgeons her"
}, {
  "question": "Who cuts out Spalding's tongue?",
  "choices": ["Fiona", "Spalding", "Marie Laveau"],
  "correct": "Spalding"
}, {
  "question": "What's the first thing Marie severs from Madame LaLaurie's body?",
  "choices": ["Her hand", "Her head", "Her tongue"],
  "correct": "Her hand"
}, {
  "question": "What does Spalding do with Madison's dead body?",
  "choices": ["He has tea parties with it", "He buries it", "He puts it in Fiona's bed"],
  "correct": "He has tea parties with it"
}, {
  "question": "What kind of music does the coven play when the Axeman passes through town?",
  "choices": ["Jazz", "Opera", "Classical"],
  "correct": "Opera"
}, {
  "question": "What does Madame LaLaurie use baby's blood for?",
  "choices": ["Feeds it to her slaves", "Uses it as a moisturizer", "Puts in baked goods and eats it"],
  "correct": "Uses it as a moisturizer"
}, {
  "question": "Who kills Spalding?",
  "choices": ["Zoe", "Cordelia", "Fiona"],
  "correct": "Zoe"
}];

var currentQuestion = 0;
var score = 0;


$("start").on("click", goGame());

function goGame() {
	
};