var buttonColours = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];

//click handler for coloured panels
$('.btn').click(function(event){
  //store the id of the clicked square
  var userChosenColour = $(this).attr('id');
  //add the chosen square to the player pattern
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animateClick(userChosenColour);
});

function nextSequence(){
  //create a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  //use the random number to choose a colour
  var randomChosenColour = buttonColours[randomNumber];
  //add the chosen colour to the end of the current game pattern
  gamePattern.push(randomChosenColour);

  //choose the colour chosen by randomChosenColour
  $('#' + randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name){
  //create a new audio sound based on chosen colour
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animateClick(currentColour){
  var target = $('#' + currentColour);
  target.addClass('pressed');

  setTimeout(function(){
    target.removeClass('pressed');
  }, 100);
}

nextSequence();
