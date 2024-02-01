let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbutton");
let msg = document.querySelector("#result");
let msgcontainer = document.querySelector(".msgcontainer");
let newbutton = document.querySelector("#newbutton");

let turnO = true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count==9  && !isWinner){
           draw();
        }
        
    })
});

const checkWinner = () =>{
    for(let patterns of winPatterns){
        let pos1 = boxes[patterns[0]].innerText; //o  //o  //o  
        let pos2 = boxes[patterns[1]].innerText;  //0 //x   //x
        let pos3 = boxes[patterns[2]].innerText;  //0  //0   //x

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        
    }

}}

const showWinner = (winner) =>{
   msg.innerText = `congratulation you are the winner ${winner}`;
   msgcontainer.classList.remove("hide");
   disableBoxes();
};

const disableBoxes = () =>{
      for(let box of boxes){
        box.disabled = true;
      }
};

const enableBoxes = () =>{
    for(let box of boxes){
      box.disabled = false;
      box.innerText="";
    }
};

const resetgame = () =>{
  turnO =true;
  count=0;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

const draw = () =>{
    msg.innerText="Draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

resetbutton.addEventListener('click',resetgame);
newbutton.addEventListener('click',resetgame);
