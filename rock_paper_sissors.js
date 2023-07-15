let player=document.getElementById("player-point");
let com=document.getElementById("com-point");
let messageEl=document.getElementById("message");
const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissors=document.getElementById("scissors")
let point=0+1;
let pointEl=0+1;

rock.addEventListener("click",resultAfterClick)
paper.addEventListener("click",resultAfterClick)
scissors.addEventListener("click",resultAfterClick)

function resultAfterClick(){
    let rand=Math.floor(Math.random()*3)+1;//calling an inbuilt random function...............
    if(rand===1){messageEl.textContent="YOU WIN";player.textContent="player: "+point++;}
    else if(rand===2){messageEl.textContent="YOU DRAW";}
    else if(rand===3){messageEl.textContent="YOU LOOSE";com.textContent="com : "+pointEl++;}}
