

let btnref=document.querySelectorAll(".box");
let popupRef=document.querySelector(".popup");
let newgamebtn=document.getElementById('new-game');
let restart=document.getElementById("restart");
let msgref=document.getElementById('message');

let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    [2,5,8]
];
//player x plays first
let xturn=true;
let count=0;

//disable all boxes
const disableboxes=()=>{
    btnref.forEach((element)=>(element.disabled=true));
    //enable popup
    popupRef.classList.remove("hide")
};

//enabling alll buttons for new game
const enableboxes=()=>{
    btnref.forEach((element)=>{
        element.innerText="";
        element.disabled=false;
    })
    popupRef.classList.add("hide");
}


//this function is executed 

//NEW GAME
newgamebtn.addEventListener("click",()=>{
    count=0;
    enableboxes();

})

restart.addEventListener("click",()=>{
    count=0;
    enableboxes();
})



//function executed after win
const winfunction=(letter)=>{
     disableboxes();
     if(letter=="X"){
        msgref.innerHTML="X WINS"
     }
     else{
        msgref.innerHTML="0 WINS"
     }
}

//function for draw match
const drawfunction=()=>{
    disableboxes();
    msgref.innerHTML="IT'S A DRAW";
};

//win logic
const winchecker=()=>{
    //loop through all wins
    for(let i of winpattern){
        let[element1,element2,element3]=[
        btnref[i[0]].innerText,
        btnref[i[1]].innerText,
        btnref[i[2]].innerText
        ];

        if((element1!="")&& (element2!="")&& (element3!="")){
        if(element1===element2&& element2===element3){
                winfunction(element1);
            }
        }

    }
}
//display x 0 on click
btnref.forEach((element)=>{
element.addEventListener('click',()=>{
    if(xturn){
        xturn=false;
        element.innerText="X";
        element.disabled=true;
        
        
    }
    else{
        element.innerText="0";
        xturn="true";
        element.disabled=true;
        
    }
    count+=1;
    
    if(count==9){
        drawfunction();
    }
    
   winchecker(); 
})
})

//enable buttons and disablepopup on page load

window.onload=enableboxes();







