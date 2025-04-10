let Clock = document.querySelector("#Clock");
let Alaram = document.querySelector("#Alaram");
let Stopwatch = document.querySelector("#Stopwatch");
let Timer = document.querySelector("#Timer");

let clockBox = document.querySelectorAll(".clockBox");
let alaramBox = document.querySelectorAll(".alaramBox");
let stopWBox = document.querySelectorAll(".stopWBox");
let timerBox = document.querySelectorAll(".timerBox");
let touchAudio =document.querySelector("#touchAudio");







document.querySelector("#Clock").addEventListener(`click`,()=>{
    Clock.style.color = "lightskyblue";
    Alaram.style.color = "dimgrey";
    Stopwatch.style.color = "dimgrey";
    Timer.style.color = "dimgrey";
    
    touchAudio.currentTime = 0;
    touchAudio.play();
    navigator.vibrate(100); 
    
    
    for(let i of clockBox){
    i.style.display = "flex";
}
for(let i of alaramBox){
    i.style.display = "none";
}
for(let i of stopWBox){
    i.style.display = "none";
}
for(let i of timerBox){
    i.style.display = "none";
}
});



document.querySelector("#Alaram").addEventListener(`click`,()=>{
    Clock.style.color = "dimgrey";
    Alaram.style.color = "lightskyblue";
    Stopwatch.style.color = "dimgrey";
    Timer.style.color = "dimgrey";
    
    touchAudio.currentTime = 0;
    touchAudio.play();
    navigator.vibrate(100); 
    
    
    for(let i of clockBox){
    i.style.display = "none";
}
for(let i of alaramBox){
    i.style.display = "flex";
}
for(let i of stopWBox){
    i.style.display = "none";
}
for(let i of timerBox){
    i.style.display = "none";
}
});



document.querySelector("#Stopwatch").addEventListener(`click`,()=>{
    Clock.style.color = "dimgrey";
    Alaram.style.color = "dimgrey";
    Stopwatch.style.color = "lightskyblue";
    Timer.style.color = "dimgrey";
    
    touchAudio.currentTime = 0;
    touchAudio.play();
    navigator.vibrate(100); 
    
    
    for(let i of clockBox){
    i.style.display = "none";
}
for(let i of alaramBox){
    i.style.display = "none";
}
for(let i of stopWBox){
    i.style.display = "flex";
}
for(let i of timerBox){
    i.style.display = "none";
}
});



document.querySelector("#Timer").addEventListener(`click`,()=>{
Clock.style.color = "dimgrey";
    Alaram.style.color = "dimgrey";
    Stopwatch.style.color = "dimgrey";
    Timer.style.color = "lightskyblue";
    
    
    touchAudio.currentTime = 0;
    touchAudio.play();
    navigator.vibrate(100); 
    
    
    for(let i of clockBox){
    i.style.display = "none";
}
for(let i of alaramBox){
    i.style.display = "none";
}
for(let i of stopWBox){
    i.style.display = "none";
}
for(let i of timerBox){
    i.style.display = "flex";
}
});


































//------------------ THEEM CHANGE-----------------

let themChanger = document.querySelectorAll(".themChanger");
let body = document.querySelector("body");
let footer = document.querySelector("footer");
let mainBgColor = document.querySelectorAll(".mainBgColor");
let mode = "white";
let swIn = document.querySelectorAll(".swIn");
let swFunBtn = document.querySelectorAll(".swFunBtn");



for(let i of themChanger){
    i.addEventListener(`click`,()=>{
        if(mode == "dark"){
            mode = "white";
            bgColor("#1C1C1C");
            Color("#FFD700");
            
            touchAudio.currentTime = 0;
            touchAudio.play();
            navigator.vibrate(100); 
        }else{
            mode = "dark";
            bgColor("#F5F5F5");
            Color("#B8860B");
            i.style.color = "#1C1C1C";
            
            touchAudio.currentTime = 0;
            touchAudio.play();
            navigator.vibrate(100); 
        }
    })

}



function bgColor(tempColor){
    body.style.backgroundColor = tempColor;
    footer.style.backgroundColor = tempColor;
    for(let j of mainBgColor){
        j.style.backgroundColor = tempColor;
    }
    
    for(let j of swIn){
        j.style.backgroundColor = tempColor;
    }
    
    for(let j of swFunBtn){
        j.style.backgroundColor = tempColor;
    }
    
}

function Color(tempColor){
    body.style.color = tempColor;
    for(let j of mainBgColor){
        j.style.color = tempColor;
        j.style.borderColor = tempColor;
    }
    
    for(let j of swIn){
        j.style.color = tempColor;
        j.style.borderColor = tempColor;
    }
        
    
}























/*
 * 
 * document.querySelector("#Clock").addEventListener(`click`,()=>{
    Clock.style.color = "lightskyblue";
    Alaram.style.color = "darkgray";
    Stopwatch.style.color = "darkgray";
    Timer.style.color = "darkgray";
    
    clockBox.style.display = "flex";
    alaramBox.style.display = "none";
    stopWBox.style.display = "none";
    timerBox.style.display = "none";
});



document.querySelector("#Alaram").addEventListener(`click`,()=>{
    Clock.style.color = "darkgray";
    Alaram.style.color = "lightskyblue";
    Stopwatch.style.color = "darkgray";
    Timer.style.color = "darkgray";
    
    clockBox.style.display = "none";
    alaramBox.style.display = "flex";
    stopWBox.style.display = "none";
    timerBox.style.display = "none";
});



document.querySelector("#Stopwatch").addEventListener(`click`,()=>{
    Clock.style.color = "darkgray";
    Alaram.style.color = "darkgray";
    Stopwatch.style.color = "lightskyblue";
    Timer.style.color = "darkgray";
    
    clockBox.style.display = "none";
    alaramBox.style.display = "none";
    stopWBox.style.display = "flex";
    timerBox.style.display = "none";
});



document.querySelector("#Timer").addEventListener(`click`,()=>{
Clock.style.color = "darkgray";
    Alaram.style.color = "darkgray";
    Stopwatch.style.color = "darkgray";
    Timer.style.color = "lightskyblue";
    
    clockBox.style.display = "none";
    alaramBox.style.display = "none";
    stopWBox.style.display = "none";
    timerBox.style.display = "flex";
});
 */
