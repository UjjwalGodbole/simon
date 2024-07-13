let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["yellow","green","purple","red"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game start");
        started = true;


        levelup();
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randomindex = Math.floor(Math.random()*3);
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    btnflash(randombtn);
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function check(indx){
    if(userseq[indx]==gameseq[indx]){
      if(userseq.length == gameseq.length){
        levelup();
      }
    }
    else{
        h2.innerHTML=`Game Over! and your level was ${level} <br>Press any key to start again!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="whitesmoke";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    btnflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}
let btnall = document.querySelectorAll(".btn");
for(btn of btnall){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    userseq = [];
    gameseq =[];
    level = 0;
}