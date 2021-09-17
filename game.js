
var buttonColors = ["red", "blue", "green", "yellow"];
var response = ["Great!", "You Did it!", "Wonderful!", "You are a Genius!"];
var gamePattern = [];
var timer = 4;
var interval;
var index = 0;
// var randomChosenColor = "";



// sounds init


$(document).keydown(startSequence);
$(document).click(startSequence);
// $(document).click(startSequence);

var wrong = new Audio("sounds/wrong.mp3");

function nextSequence(){
  var randomNumber = Math.floor((Math.random() * 4));
  return randomNumber;
}

function playKey(key){
  switch(key){

    case "green":
    var green = new Audio("sounds/green.mp3");
    green.play();
    break;

    case "blue":
    var blue = new Audio("sounds/blue.mp3");
    blue.play();
    break;

    case "yellow":
    var yellow = new Audio("sounds/yellow.mp3");
    yellow.play();
    break;

    case "red":
    var red = new Audio("sounds/red.mp3");
    red.play();
    break;

    default:
    break;

  }
}


function blink (){

  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeOut(400).fadeIn(100);
  playKey(randomChosenColor);
  timer --;

  if (timer === 0){
    clearInterval(interval);
    $("div.btn").click(function(event){
      // console.log(event.target.id);
      colorCheck(event.target.id, index);

      if(index === 3){
        //index = 0;
        var win = Math.floor((Math.random() * 4));
        $("h1").text(response[win]);

        setTimeout(function(){
          window.location.reload();}, 900);

      }
      index++;
    });
    timer = 4;
  }
}

function startSequence(){
   $(document).off('keydown');
   $(document).off('click');
    interval = setInterval(blink, 1000);
  }

function colorCheck(color, index){
  if(gamePattern[index] === color){
    playKey(color);
  }else{

    wrong.play();
    $("h1").text("Sorry, Try Again!");
    setTimeout(function(){
      window.location.reload();}, 600);

  }

}






// for (var y = 0; y < 4; y++){
//   var sound = gamePattern[y];
//   setTimeout(function(){
//     play(sound);
//   }, 1000);
// }
