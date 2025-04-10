let m=0, s=0, ms=0;
let tm=0, ts=0, tms=0;
let swAdd = document.querySelector("#swAdd");
let swOption = 1;
let swResOption = 1;
let swId = 0;
let resetId = 0;
let AddSw = document.querySelector("#AddSw");
let swReset = document.querySelector("#swReset");
let swMark = document.querySelector("#swMark");
//let sirialNo = 0;
let stIndex = 0;
let arrOfStEngine = [];
let reStIndex = 0;
let arrOfReStEngine = [];
let dlIndex = 0;
let arrOfDynamicLable = []; 


let fStMinut =document.querySelector("#fStMinut");
let fStSec =document.querySelector("#fStSec");
let fStMS =document.querySelector("#fStMS");

let fixedIcon = document.querySelector("#fixedIcon");
let fixedLable = document.querySelector("#fixedLable");
let slCount = 1;







function swEngineSt(){
    let stId = setInterval(()=>{
        ms++;
        if(ms==100){
            ms=0;
            s++;
            if(s==60){
                s=0;
                m++;
                if(m==60){
                    m=0;
                    s=0;
                    ms=0;
                }
            }
        }
        console.log(m,s,ms);
        
        document.querySelector("#swM").value = m;
        document.querySelector("#swS").value = s;
        document.querySelector("#swMs").value = ms;
        
        
        
        
        
        //lable update
        
        document.querySelector("#fStMinut").innerText = m;
        document.querySelector("#fStSec").innerText = s;
        document.querySelector("#fStMS").innerText = ms;
    
    
    

    },10);


    setTimeout(()=>{
        clearInterval(stId);
    },120000);

    swId = stId;
    arrOfStEngine[stIndex] = stId;
    stIndex++;
}



//------------- PLAY AND PAUSE BTN -----------

swAdd.addEventListener('click',()=>{
    if(swOption == 0){
        swPause();
        swOption = 1;
        
        
        //AUDIO AND VIBRATE EFFECTS
        audioVibrateSW();
    }else{
        swEngineSt();
        swPlay();
        swOption = 0;
        
        
        //AUDIO AND VIBRATE EFFECTS
        audioVibrateSW();
    }
    
});





function swPause(){
    AddSw.classList.remove("fa-pause");
    AddSw.classList.add("fa-play");
    swMark.style.display = "none";
    //kill all of the start interval
        for(let i of arrOfStEngine){
            clearInterval(i);
        }
    stIndex = 0;
    
        //kill all of the reStart interval
        for(let i of arrOfReStEngine){
            clearInterval(i);
        }
    reStIndex = 0;
}


function swPlay(){
    AddSw.classList.remove("fa-play");
    AddSw.classList.add("fa-pause");
    

    swReset.style.display = "flex";
    swReset.style.justifyContent = "space-around";
    swReset.style.alignItems = "center";
    
    swMark.style.display = "flex";
    swMark.style.justifyContent = "space-around";
    swMark.style.alignItems = "center";
    
    
    swMark.style.display = "flex";
    swEngineReSt();
}

//-------------- RESET BTN ---------------

swReset.addEventListener(`click`,()=>{
    m=0;
    s=0;
    ms=0;
    
    document.querySelector("#swM").value = m;
    document.querySelector("#swS").value = s;
    document.querySelector("#swMs").value = ms;
    
    //kill all of the start interval
    for(let i of arrOfStEngine){
    clearInterval(i);
}
    stIndex = 0;
    swOption = 1;
    
    AddSw.classList.remove("fa-pause");
    AddSw.classList.add("fa-play");
    
    swReset.style.display = "none";
    swMark.style.display = "none";
    
    //kill all of the reStart interval
    for(let i of arrOfReStEngine){
    clearInterval(i);
}
    reStIndex = 0;

    tm=0;
    ts=0;
    tms=0;
    
    document.querySelector(".diMinut").innerText = tm;
        document.querySelector(".diSec").innerText = ts;
        document.querySelector(".diMS").innerText = tms;
    
    
    for(let i of arrOfDynamicLable){
        i.remove();
    }
    slCount = 1;
    fixedLable.style.display = "none";
    
    
    
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateSW();
});













swMark.addEventListener(`click`,()=>{
    
    let defaultLable = document.querySelector(".stLables");
    //calling the dynamic class
    dynamicLable(defaultLable);
    fixedIcon.innerText = slCount+1;
    //-----------------------------------
    
    
       
    
    //------------------------------------
    
    let stSlNo =document.createElement("div");
    stSlNo.setAttribute("class","stSlNo");

    let cIcon = document.createElement("i");
    cIcon.setAttribute("class","changableIcon");
    cIcon.innerText = slCount;
    slCount++;

    stSlNo.append(cIcon);

//-----------------------------------------

    
    
    let DiSpan = document.createElement("span");
    DiSpan.setAttribute("class","stDifferTime");
    
let diMinutHed = document.createElement("h1");
    diMinutHed.setAttribute("class","diMinut");
    diMinutHed.innerText = tm;
    
let stDivider3 = document.createElement("h1");
    stDivider3.innerText = ":";

let diSecHed = document.createElement("h1");
    diSecHed.setAttribute("class","diSec");
    diSecHed.innerText = ts;
    
let stDivider4 = document.createElement("h1");
    stDivider4.innerText = ":";
    
let diMSHed = document.createElement("h1");
    diMSHed.setAttribute("class","diMS");
    diMSHed.innerText = tms;

    DiSpan.append(diMinutHed);
    DiSpan.append(stDivider3);
    DiSpan.append(diSecHed);
    DiSpan.append(stDivider4);
    DiSpan.append(diMSHed);

//-----------------------------------------
    
    let tiSpan = document.createElement("span");
    tiSpan.setAttribute("class","stLableTime");
    
let stMinutHed = document.createElement("h1");
    stMinutHed.setAttribute("class","stMinut");
    stMinutHed.innerText = fStMinut.innerText;
    
let stDivider1 = document.createElement("h1");
    stDivider1.innerText = ":";

let stSecHed = document.createElement("h1");
    stSecHed.setAttribute("class","stSec");
    stSecHed.innerText = fStSec.innerText;
    
let stDivider2 = document.createElement("h1");
    stDivider2.innerText = ":";

let stMSHed = document.createElement("h1");
    stMSHed.setAttribute("class","stMS");
    stMSHed.innerText = fStMS.innerText;

    tiSpan.append(stMinutHed);
    tiSpan.append(stDivider1);
    tiSpan.append(stSecHed);
    tiSpan.append(stDivider2);
    tiSpan.append(stMSHed);

//-----------------------------------------


let div = document.createElement("div");
    div.setAttribute("class","stLables");
    dynamicLable(div);
    //inserting the dynamic lables
    arrOfDynamicLable[dlIndex] = div;
    dlIndex++;
    
    div.append(stSlNo);
    div.append(DiSpan);
    div.append(tiSpan);
    fixedLable.after(div);
    
    //-------------------------------------
    clearInterval(resetId);
    tm=0;
    ts=0;
    tms=0;
    swEngineReSt();
    
    
    
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateSW();
});





function dynamicLable(para){
    para.style.display = "flex";
    para.style.justifyContent = "space-around";
    para.style.alignItems = "center";
}















function swEngineReSt(){
    
    let reStId = setInterval(()=>{
        tms++;
        if(tms==100){
            tms=0;
            ts++;
            if(ts==60){
                ts=0;
                tm++;
                if(tm==60){
                    tm=0;
                    ts=0;
                    tms=0;
                }
            }
        }
        console.log(tm,ts,tms);
        //lable update
        
        document.querySelector(".diMinut").innerText = tm;
        document.querySelector(".diSec").innerText = ts;
        document.querySelector(".diMS").innerText = tms;
    
    
    

    },10);


    setTimeout(()=>{
        clearInterval(reStId);
    },120000);

    resetId = reStId;
    arrOfReStEngine[reStIndex] = reStId;
    reStIndex++;
}








//AUDIO AND VIBRATE EFFECTS

function audioVibrateSW(){
    
        
    document.querySelector("#touchAudio").currentTime = 0;
    document.querySelector("#touchAudio").play();
    navigator.vibrate(100); 
}
