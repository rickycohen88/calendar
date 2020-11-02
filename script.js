//
//$(document).ready(getLocation());
// globals------

/*let lat;
let long;

// see if the browser supports geo location
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert ("Geolocation is not supported by this browser.")
    }
}
//gets info from browser
function showPosition(position) {
    // Grab coordinates from the given object
     lat = position.coords.latitude;
     long = position.coords.longitude;
    console.log("Your coordinates are Latitude: " + lat + " Longitude " + long);
}*/
let hourdiv = document.getElementById("dayTaboverflow");
let now;
let interval;
let day = moment().day();
let currentHour = moment().hour();




createHrBlocks();
    
    //set local date and time to tab and upate it every second
    //now = moment().format('LLLL');
    interval= setInterval(updLt,1000);
        function updLt(){
            now = moment().format('LLLL');
            $("#localcurrent").text(now);
           
        }
        refreshpage = setInterval(createHrBlocks,60000);

function createHrBlocks(){
    hourdiv.innerHTML="";
    for(i=0;i<=23;i++){   
    // create div for hr add a prepend label to identify it
    // and add an input feild for user input
    //and add a save button to the feild for ease of use
        let hrBlock = document.createElement("div");// Whole hour block div
        hrBlock.setAttribute("class","input-group");//bootstrap classes-this will repeate in other areas
        hourdiv.appendChild(hrBlock);
        let hrBlock2 = document.createElement("div");
        hrBlock2.setAttribute("class","input-group-prepend");
        hrBlock.appendChild(hrBlock2);
        let hrBlock3 = document.createElement("span");// the label for the hour
        hrBlock3.setAttribute("class","input-group-text");
        let currCalHour = moment().hour(i);
        hrBlock3.textContent = currCalHour.format("hh a");
        hrBlock2.appendChild(hrBlock3);
        let hrBlock4 = document.createElement("textarea");//  the text entry
        hrBlock4.setAttribute("class","form-control");
        hrBlock4.setAttribute("id",currCalHour.format("HH"));
        hrBlock.appendChild(hrBlock4);
        let hrBlock5 = document.createElement("div");//creates the div for the save button
        hrBlock5.setAttribute("class","input-group-append");
        hrBlock.appendChild(hrBlock5);
        let hrBlock6 = document.createElement("button");
        hrBlock6.setAttribute("class","btn");
        hrBlock6.className +=(" btn-secondary");
        hrBlock6.className +=(" saveBtn");
        hrBlock6.setAttribute("type","button");
        hrBlock6.setAttribute("value",moment().format("YYYY, MM, DD,"));
        hrBlock6.textContent ="save";
        hrBlock5.appendChild(hrBlock6);

        let keyIfAny = hrBlock6.value;
        keyIfAny += hrBlock3.textContent;
        
        
        hrBlock4.textContent=pullstored(keyIfAny);

    }  //close for loop
 
    changeBackground();
 
   let findNow = document.getElementById(currentHour);//set variable to current hour div
    findNow.scrollIntoView();// scrolls to current hour div

}//close create hr block function

function changeBackground(){
     let setColor = hourdiv.getElementsByTagName("textarea");
    for(i=0;setColor.length>i;i++){
        if(setColor[i].id < currentHour){
            document.getElementById(setColor[i].id).className +=" past";
        }
        if(setColor[i].id > currentHour){
            document.getElementById(setColor[i].id).className +=" future";
        }
        if(setColor[i].id == currentHour){
            document.getElementById(setColor[i].id).className +=" present";
        }
    }//end of change background forloop
 }//end of changeBackground function

$(".saveBtn").on("click",function(){
    let a=$(this).attr("value");
    console.log(a);
    console.log(typeof(a));
    let b = $(this).parent().prev();
    let c = $(this).parent().parent().find("span");
    let d = c[0].textContent;
    a += d;
    console.log(d);
    let txEntry = b[0].value;
    console.log(txEntry);

    store(a,txEntry);
    }
);

function store(key,value){
        window.localStorage.setItem(key,JSON.stringify(value));
    }
    
function pullstored (key){
        let value = window.localStorage.getItem(key);
        let strigified = JSON.parse(value);
        return strigified;
    }