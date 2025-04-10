


let time = new Date();

let hour = time.getHours();
let minut = time.getMinutes();
let second = time.getSeconds();
let audio = document.querySelector("#alAudio")

let stodp=0;

let H=0,M=0;

console.log(H,M);


//----ADD BUTTON --------------------------


document.querySelector("#alAdd").addEventListener(`click`,()=>{
    H = document.querySelector("#H").value;
    M =document.querySelector("#M").value;
    
console.log(H,M);
    
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateAL();
    
    
    //-----------------------------------------

let span = document.createElement("span");
    span.setAttribute("class","lableTime");
    
let alHourHed = document.createElement("h1");
    alHourHed.setAttribute("class","alHour");
    alHourHed.innerText = H;
    
let divider = document.createElement("h1");
    divider.innerText = ":";

let alMinutHed = document.createElement("h1");
    alMinutHed.setAttribute("class","alMinut");
    alMinutHed.innerText = M;

    span.append(alHourHed);
    span.append(divider);
    span.append(alMinutHed);

//-----------------------------------------

let crossI =document.createElement("div");
    crossI.setAttribute("class","crossIcon");

let cIcon = document.createElement("i");
    cIcon.setAttribute("class","fa-solid");
    cIcon.classList.add("fa-xmark");

    crossI.append(cIcon);

//-----------------------------------------

let div = document.createElement("div");
    div.setAttribute("class","lables");

    div.append(span);
    div.append(crossI);
document.querySelector("#dynamicUpdate").prepend(div);

//-----------------------------------------

    
    document.querySelector(".crossIcon").addEventListener(`click`,()=>{
        div.remove();
        audio.pause();
        
        navigator.vibrate(0);
        //AUDIO AND VIBRATE EFFECTS
        audioVibrateAL();
    });

});













    let alId = setInterval(()=>{
    second++;
    if(second==60){
        second=0;
        minut++;
        if(minut==60){
            minut=0;
            hour++;
            if(hour==60){
                hour=0;
                second=0;
                minut=0;
            }
        }
    }
    console.log(hour,minut,second);
        
console.log(H,M);
    
    if(H==hour && M==minut){
        console.log(`Alaram`);
        audio.currentTime = 0;
        audio.play();
        navigator.vibrate(1000); 
        
        
        
        
        //--------NOTIFICATION PAGE--------//
        
        if(second==0){
            document.querySelector(".alPage").style.display = "flex";
        document.querySelector(".alPage").style.flexDirection = "column";
        document.querySelector(".alPage").style.alignItems = "center";
        document.querySelector(".notiH").innerText = H;
        document.querySelector(".notiM").innerText = M;
        }
    }else{
        document.querySelector(".alPage").style.display = "none";
    }
        
},1000);


//----LIMITED TIME//
setTimeout(()=>{
    clearInterval(alId);
},120000);






document.querySelector(".notiOk").addEventListener(`click`,()=>{
    document.querySelector(".alPage").style.display = "none";
    audio.pause();
    
    navigator.vibrate(0);
    //AUDIO AND VIBRATE EFFECTS
    audioVibrateAL();
});










//AUDIO AND VIBRATE EFFECTS

function audioVibrateAL(){
    
        
    document.querySelector("#touchAudio").currentTime = 0;
    document.querySelector("#touchAudio").play();
    navigator.vibrate(100); 
}



