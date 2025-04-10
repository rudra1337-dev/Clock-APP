let tih=0, tim=0, tis=0;
let tempH=0,tempM=0, tempS=0;

let reloadBtn = document.createElement("button");
    let reloadIcon = document.createElement("i");
let playFunction = document.querySelector(".playFunc");
let tiPause = document.querySelector("#tiPause");
let pauseIcon = document.querySelector(".pauseIcon");
let tiAddOne = document.querySelector("#tiAddOne");
let tiOption = 0;
let startMod = "start";
let timerID = 0;
let timerAudio =document.querySelector("#timerAudio");
let tiArr = [];
let tiIndex = 0;






document.querySelector("#tiAdd").addEventListener(`click`,()=>{
    
    tih = document.querySelector("#h").value;
    tim = document.querySelector("#m").value;
    tis = document.querySelector("#s").value;
    
    tempH = tih;
    tempM = tim;
    tempS = tis;
    
    engineStart();
    
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateTimer();
});



//-----------------------------------------

function engineStart(){
    if((m<=60 && s<=60)&&(m>=0 && s>=0)){
        let tiId = setInterval(()=>{
            tiArr[tiIndex] = tiId;
            
            
            if(startMod=="start"){
                    document.querySelector("#h").value = tih;
            document.querySelector("#m").value = tim;
            document.querySelector("#s").value = tis;
            }else if(startMod=="ReStart"){
                //timeUpdte
                tih= tempH;
                tim = tempM;
                tis = tempS;
                
                //set to default again
                startMod="start";
                
            }
            
            console.log(tih,tim,tis);
            if(tis==0){
                if(tim==0){
                    if(tih==0){
                        timerAudio.currentTime = 0;
                        //timerAudio.play();

                        navigator.vibrate(10000);
                        
                        console.log("TIME OFF");
                        clearInterval(tiId);
                    }
                    tih--;
                    tim=60;
                }
                tim--;
                tis=60;
            }
            tis--;
        },1000);
    
        setTimeout(()=>{
            clearInterval(tiId);
        },120000);
        document.querySelector("#tiCross").addEventListener(`click`,()=>{
            tiOption = 0;
            console.log(tiOption)
            pauseIcon.classList.remove("fa-play");
            pauseIcon.classList.add("fa-pause");
            
            
            for(let z of tiArr){
                clearInterval(z);
            }
            
            tih=00;
            tim=00;
            tis=00;
            document.querySelector("#h").value = tih;
            document.querySelector("#m").value = tim;
            document.querySelector("#s").value = tis;
            
            document.querySelector(".timerFunc").style.display = "none";
            document.querySelector("#tiAdd").style.display = "flex";
            tiPause.style.display = "flex";
            tiAddOne.style.display = "flex";
            reloadBtn.remove();
            
            
            //AUDIO AND VIBRATE EFFECTS
            audioVibrateTimer();
        });
        
        
        
        
        
        
        
        
        
        
        document.querySelector(".timerFunc").style.display = "flex";
        document.querySelector("#tiAdd").style.display = "none";
        
        
        timerID = tiId;
    }else{
        console.log("INVALID MINUT OR SECOND");
    }
    
}

//------------------------------------------













function pause(){
    reloadIcon.setAttribute("class","fa-solid");
    reloadIcon.classList.add("fa-rotate");
    reloadBtn.append(reloadIcon);
    playFunction.prepend(reloadBtn);
    reloadBtn.addEventListener(`click`,()=>{
        console.log("reloded");
        
        //AUDIO AND VIBRATE EFFECTS
        audioVibrateTimer();
    });
    
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
    
    tiAddOne.style.display = "none";
}


function play(){
     
    //document.querySelector("#tiPause").style.display = "none";
        tiAddOne.style.display = "none";
    
    
    
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");
    
    

    //tiAddOne.style.display = "flex";
    
    
   // pauseIcon.classList.remove("fa-play");
   // pauseIcon.classList.add("fa-pause");
    

    tiAddOne.style.display = "flex";
    reloadBtn.remove();
    
    
}



reloadBtn.addEventListener(`click`,()=>{
    document.querySelector("#h").value = tempH;
    document.querySelector("#m").value = tempM;
    document.querySelector("#s").value = tempS;
    
    //startMod="ReStart";
    //engineStart();
    
    tih= tempH;
    tim = tempM;
    tis = tempS;
    
    
    
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateTimer();
});
    


tiAddOne.addEventListener(`click`,()=>{
    tim++;
    document.querySelector("#m").value = tim;
    
    
    
    
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateTimer();
});







tiPause.addEventListener(`click`,()=>{
            console.log(tiOption)
            if(tiOption == 0){
                pause();
                clearInterval(timerID);
                tiOption = 1
                
                
                //AUDIO AND VIBRATE EFFECTS
                audioVibrateTimer();
            }else{
                play();
                engineStart();
                tiOption = 0;
                
                
                //AUDIO AND VIBRATE EFFECTS
                audioVibrateTimer();
            }
        });


function audioVibrateTimer(){
    
        //AUDIO AND VIBRATE EFFECTS
    document.querySelector("#touchAudio").currentTime = 0;
    document.querySelector("#touchAudio").play();
    navigator.vibrate(100); 
}