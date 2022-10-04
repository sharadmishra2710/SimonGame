// alert("Hi")



var buttonColours = ["red","yellow","green","blue"];
var systemColorSequence=[];
var userColorSequence=[];
var randomChoosenColorIndex = 0;
var currentLevel = 0;
var started = false;

$(document).keypress(function(){
  if(!started){
    nextSequence();
    started = true;

  }
})

$(".box").click(function(){
  var userChoosenColor = $(this).attr("id");
  userColorSequence.push(userChoosenColor);
   $("#"+userChoosenColor).addClass("pressed");
   setTimeout(function (){
     $("#"+userChoosenColor).removeClass("pressed");
   },100)
   checkAnswer(userColorSequence.length-1);
});

//animatePress

function nextSequence(){
    $("h1").text("Level " + ++currentLevel);
    randomChoosenColorIndex = Math.floor(Math.random()*4);
    systemColorSequence.push(buttonColours[randomChoosenColorIndex]);
    $("#"+buttonColours[randomChoosenColorIndex]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function checkAnswer(level){
  if(userColorSequence[level] === systemColorSequence[level] ){
    if(currentLevel-1 === level){
      userColorSequence = [];
      nextSequence();
    }
  }
  else{
      currentLevel = 0;
      userColorSequence = [];
      systemColorSequence=[];
      started = false;
      $("body").addClass("game-failure");
      $("h1").text("GAME OVER :(");
      setTimeout(function(){
        $("body").removeClass("game-failure");
        $("h1").text("press any key to re-start ...");
      },1500);
  }
}
