 "use strict"
 var _id = (id) => document.getElementById(id);

var activePlayer = true;

var player1 = _id("divplayer1");
var player2 = _id("divplayer2");
var die1 = _id("die1");
var die2 = _id("die2");
var circle1 =_id("circle2");
var circle2 =_id("circle2");
var currentScore1 =_id("currentScore1");
var currentScore2 =_id("currentScore2");


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
            var num2 = num2 + diceTotal1;
            currentScore1.innerHTML = num2;
            console.log(num2);
        } else {
                var num3 = currentScore2.innerHTML
                var num4 = parseInt(num3);
                var num4 = num4 + diceTotal2;
                currentScore2.innerHTML = num4;
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
    if(activePlayer){
        activePlayer = false;
     } else
         activePlayer = true;       
    }  
  
 }
