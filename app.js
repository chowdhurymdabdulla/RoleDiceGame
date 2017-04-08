 "use strict"

var activePlayer = true;
var _class = (className)=> document.getElementsByClassName(className);
var _id = (id) => document.getElementById(id);

var player1 = _id("divplayer1");
var player2 = _id("divplayer2");
var die1 = _id("die1");
var die2 = _id("die2");
var circle1 =_id("circle2");
var circle2 =_id("circle2");
var currentScore1 =_id("currentScore1");
var currentScore2 =_id("currentScore2");
var score1 = _id("score1");
var score2 = _id("score2");

var rd1 =  parseInt(die1.innerHTML);
var rd2 =  parseInt(die2.innerHTML);



 function rollDice() {
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        var rd1 =  parseInt(die1.innerHTML);
        var rd2 =  parseInt(die2.innerHTML);
        var diceTotal1 = rd1 + rd2;
        if(activePlayer){
            var num = currentScore1.innerHTML
            var num2 = parseInt(num);
            if( rd1 ==1 || rd2 == 1){
                currentScore1.innerHTML = 0;
                activePlayer = false;
            } else if(rd1 == 1 && rd2 == 1){
                score1.innerHTML = 0;
                currentScore1.innerHTML = 0;
            }else {
                var num2 = num2 + diceTotal1;
                currentScore1.innerHTML = num2;
                console.log(num2);
            }
           
        } else {
            var num3 = currentScore2.innerHTML
            var num4 = parseInt(num3);
             if( rd1 == 1 || rd2 == 1){
                currentScore2.innerHTML = 0;
                activePlayer = true;
            } else if(rd1 == 1 && rd2 == 1){
                score2.innerHTML = 0;
                currentScore2.innerHTML = 0;
            }else {
                var num4 = num4 + diceTotal1;
                currentScore2.innerHTML = num4;
            }
        }
        function result(){
         if(num2>100 ||num4>100){
             alert("winner");
             location.reload();
         }
     }
     result(); 
     
 }

 function holdPlayer() {
     var cs1 =  parseInt(currentScore1.innerHTML);
     var cs2 =  parseInt(currentScore2.innerHTML);
     var rd1 =  parseInt(die1.innerHTML);
     var rd2 =  parseInt(die2.innerHTML);
    if(activePlayer){
        var finalScore1 = parseInt(score1.innerHTML);
            var fs1 = cs1 + finalScore1;
            score1.innerHTML = fs1;
            die1.innerHTML = 0;
            die2.innerHTML = 0;
            currentScore1.innerHTML=0;
            activePlayer = false;
            
     } else{
        var finalScore2 = parseInt(score2.innerHTML);
            var fs2 = cs2 + finalScore2;
            score2.innerHTML = fs2;
            currentScore2.innerHTML=0;
            die1.innerHTML = 0;
            die2.innerHTML = 0;
            activePlayer = true; 
     }
                  
}  
  
