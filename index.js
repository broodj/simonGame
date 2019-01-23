var buttonColours = ['red','blue','green','yellow'];
var gamePattern = [];

function nextSequence(){
  //create a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  //use the random number to choose a colour
  var randomChosenColour = buttonColours[randomNumber];
  //add the chosen colour to the end of the current game pattern
  gamePattern.push(randomChosenColour);

  //choose the colour chosen by randomChosenColour
  $('#' + randomChosenColour).fadeOut(100).fadeIn(100);

  //create a new audio sound based on chosen colour
  var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  //play audio
  audio.play();
}


//user must press a key to start the game
$(document).on('keypress', nextSequence);
