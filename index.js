var buttonColours = ['red','blue','green','yellow'];
var gamePattern = [];

function nextSequence(){
  //create a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  //use the random number to choose a colour
  var randomChosenColour = buttonColours[randomNumber];
  //add the chosen colour to the end of the current game pattern
  gamePattern.push(randomChosenColour);
}
