
//{1st step}

let userSeq = [];
let gameSeq = [];

let btns = ["red" , "green" , "purple" , "yellow"];

let started = false;
let level = 0;

let highestScore=0;

let h2 = document.querySelector("h2");

//{2nd step}

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

//{3rd step}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText=`Level-${level}`;
    if(level>highestScore){
        highestScore=level;
    }

    let randIdx = Math.floor( Math.random() * 3)+1;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
};


//{4th step}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    },250);
};

//{7th step}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function() {
        btn.classList.remove("userflash");
    },100);
};


//{8th step}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout( levelUp , 1000)
        }
    } else {
        h2.innerHTML=`GAME OVER ! your score was  <b>${level}</b> <br> press any key  to start <br> <b>highest score is-${highestScore}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function() {
           document.querySelector("body").style.backgroundColor="white";
        },150);


        reset();
    }
};


//{6th step}
function btnPress() {
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
};

//{5th step}

let allBtns =  document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
};

//{9th step}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    highestScore=level;
    level = 0;
    

};

