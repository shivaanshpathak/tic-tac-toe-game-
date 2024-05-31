let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector(".new-Btn");
let resetBtn = document.querySelector(".reset-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector(".msg");

let turno = true;


const winPattern = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
     if(turno){
        box.innerText="O";
        turno=false;
     }
     else{
        box.innerText="X";
        turno=true;
         }
         box.disabled=true;
checkWinner()

     });


    });
    const showWinner=(winner)=>{
        msg.innerText= `congratulations the winner is ${winner}`;
        msgContainer.classList.remove("hide");
        
    }
    const checkWinner = ()=>{
        for(pattern of winPattern){
            pos1=boxes[pattern[0]].innerText;
            pos2=boxes[pattern[1]].innerText;
            pos3=boxes[pattern[2]].innerText;
if(pos1 != 0 && pos2 !=0 && pos3!=0){
    if(pos1==pos2&&pos2==pos3){
        console.log("winner",pos1);
        showWinner(pos1);


    }
}
        }

    }

    



