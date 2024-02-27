let userScore=0;
let comScore=0;

let choices =document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      
        let choiceid=choice.getAttribute("id")
     playGame(choiceid)
        
    })
})
const drawGame=()=>{
 let msg=document.querySelector("#msg-container")
 msg.innerText="Game Was Drawn"
}

const playGame=(userChoice)=>{

    const comc=complay()
   if(userChoice==comc)
   {
    drawGame()
   }
   else{
    let userWin=true;
  if(userChoice=="paper")
  {
   userWin= comc=="rock"?false:true
  }
 else if(userChoice=="rock")
  {
    userWin= comc=="paper"?true:false
  }
  else
  {
   userWin= comc=="paper"?false:true
  }
  showWinner(userWin)
   }
}

const showWinner=(userWin)=>{
    if(userWin)
    {
        userScore++;
    let msg=document.querySelector("#msg-container")
    let com=document.querySelector("#userscore")
        com.innerText=userScore;
    msg.innerText="Congratulation!! You Win"
    msg.style.backgroundColor="green"
    }
    else{
        comScore++;
        let msg=document.querySelector("#msg-container")
        let com=document.querySelector("#comscore")
        com.innerText=comScore;
    msg.innerText=" You Loose"
    msg.style.backgroundColor="red"
    }
}
const complay=()=>{


const comChoice=["rock","paper","scissor"]
let com=parseInt(Math.random()*3)
return comChoice[com];

}