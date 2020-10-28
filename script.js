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
    



