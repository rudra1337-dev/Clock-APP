

/*

let url = `https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`;
async function data(){
    let promise = await fetch(url);
    let timeObj = await promise.json();
    let timezone = timeObj.timeZone
    set(timezone);
}
function set(zone){
    //document.querySelector("#timezone").innerText = zone;
}

data();

*/

let dt = ()=>{
    let time =new Date();
  //  console.log(time);
//console.log(time.getDate())
//console.log(time.getHours());
//console.log(time.getMinutes());
//console.log(time.getSeconds())
  //  console.log(time.getYear);
    document.querySelector("#hours").innerText = time.getHours();
    document.querySelector("#minutes").innerText = time.getMinutes();
    document.querySelector("#seconds").innerText = time.getSeconds();
    
    
    
    
    
    
    
    
  /*  //DATE
    let month = "Jan";
    switch(time.getMonth()+1){
       case 1 :  month = "Jan";
       case 2 :  month = "Feb";
       case 3 :  month = "Mar";
       case 4 :  month = "Apr";
       case 5 :  month = "May";
       case 6 :  month = "Jun";
       case 7 :  month = "Jul";
       case 8 :  month = "Aug";
       case 9 :  month = "Sep";
       case 10 :  month = "Oct";
       case 11 :  month = "Nov";
       case 12 :  month = "Dec";
    }
    console.log(month);
  */  
    
    document.querySelector("#date").innerText = time.getDate();
    document.querySelector("#month").innerText = time.getMonth()+1;
    document.querySelector("#year").innerText = time.getFullYear();
}



//



let timerId = setInterval(()=>{
    dt();
    
},1000)

let intervalId = setTimeout(()=>{
    clearInterval(timerId);
},120000);





















/*

//ALARAM SWECTION

 
let realTime={    //for alaram time
    hour : 0,
    minut : 0,
};

async function timeUpdate(){
    //real time update
let oTime = await new Date();
    realTime.hour = await oTime.getHours();
    realTime.minut = await oTime.getMinutes();
}


    
let q=0;
let id = setInterval(()=>{
    timeUpdate();

for(let i in realTime){
    console.log(i,realTime[i]);
}
    
    if(q==6){
        setTimeout(()=>{
    clearInterval(id);
    
},0);
    }
    
    q++;
},1000);






*/

    