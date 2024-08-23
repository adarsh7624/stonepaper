let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const game=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
const reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
userScore=0;
compScore=0;
user.innerText=userScore;
comp.innerText=compScore;
user.style.color="black";
comp.style.color="black";
game.innerText="Play your move";
game.style.backgroundColor="red";


})

const high=()=>{
    if(userScore>compScore){
        user.style.color="red";
        comp.style.color="black";
    }else if(userScore<compScore){
        user.style.color="black";
        comp.style.color="red";

    }
    else{
        user.style.color="black";
        comp.style.color="black";
    }
}
const showwinner=(userwin)=>{
    if(userwin){
      console.log("you win");
      game.innerText="User Win";
      game.style.backgroundColor="Green";
      userScore++;
      console.log(userScore);
      user.innerText=userScore;
      high();
      
    }else{
        console.log("you loose");
        game.innerText="Comp Win";
        game.style.backgroundColor="purple";
        compScore++;
        console.log(compScore);
        comp.innerText=compScore;
        high();

    }
}

   

function genCompChoice() {
    const options = ["rock", "paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const playgame=(userChoice)=>{
    console.log("choice was clicked",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);
    if(userChoice ===compChoice){
        
    console.log("match is draw");
    game.innerText="Draw Match Play Again";
    game.style.backgroundColor="black";
        

    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else{
            if(userChoice==="paper"){
                userwin=compChoice==="scissors"?false:true;
            }
            else{
                userwin=compChoice==="rock"?false:true;
               
            }
            showwinner(userwin);
        }
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playgame(userChoice);
       
        
    })
})
