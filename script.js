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

let now;
let interval;
    
    //set local date and time to tab and upate it every second
    now = moment().format('LLLL');
    interval= setInterval(updLt,1000);
        function updLt(){
            now = moment().format('LLLL');
            $("#localcurrent").text(now);
        }
    
function createHrBlocks(){
    // create div for hr add a prepend label to identify it
    // and add an input feild for user input
    //and add a save button to the feild for ease of use

let hrBlock = document.createElement("div");// Whole hour block div
hrBlock.setAttribute("class","input-group mb-3");//bootstrap classes-this will repeate in other areas******!
let hrBlock2 = document.createElement("div");// the prepend of the block ie the hour
hrBlock2.setAttribute("class","input-group-prepend");
hrBlock.appendChild(hrBlock2);
let hrBlock3 = document.createElement("span");//the span for the prepend ie the text that tells you the hour
hrBlock3.setAttribute("class","input-group-text");
hrBlock2.appendChild(hrBlock3);
let hrBlock4 = document.createElement("input");// creates the input feild
hrBlock4.setAttribute("class","form-control");
hrBlock4.setAttribute("type","text");
hrBlock4.setAttribute("aria-label","");// figure out how to label this specific for each hour later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hrBlock.appendChild(hrBlock4);
let hrBlock5 = document.createElement("div");//creates the div for the save button
hrBlock5.setAttribute("class","input-group-append");
hrBlock.appendChild(hrBlock5);
let hrBlock6 = document.createElement("button");
hrBlock6.setAttribute("class","btn");
hrBlock6.setAttribute("class","btn-secondary");
hrBlock6.setAttribute("type","button");
hrBlock5.appendChild(hrBlock6);
// potential add listener to each button.. maybe try to wait for bubble on day tab
// need to create loop for creation of all hrs
// need to get the day wanted  from month tab from year tab need to pull saved info for that day and update day page for that day
// need to auto populate current day on page load

}
