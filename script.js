// DOM Manipulation - Light & Dark Mode
// By - Muhammad Abu Huraira

// Declare variables for respective html elements
let body = document.querySelector("#body");
let header = document.querySelector("#header");
let logo = document.querySelector("#logo");
let mode = document.querySelector("#mode");
let main = document.querySelector("#main");
let content = document.querySelector("#content");
let heading = document.querySelector("#heading");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
let icon = document.querySelector("#icon");

// Initiliazing Count Value to 0
let clickCount = 0;

// Function for Night/Dark Mode
function NightMode() {
    icon.innerHTML = "light_mode"
    body.style.background = "black";
    header.style.background = "rgb(29, 29, 29)";
    logo.style.color = "white";
    mode.style.background = "black";
    main.style.background = "rgb(29, 29, 29)";
    btn.style.background = "black";
    heading.style.color = "white";
    text.style.color = "white";
}

// Function for Light Mode
function LightMode() {
    icon.innerHTML = "dark_mode"
    body.style.background = "white";
    header.style.background = "whitesmoke";
    logo.style.color = "rgb(41, 41, 41)";
    mode.style.background = "blue";
    main.style.background = "whitesmoke";
    btn.style.background = "blue";
    heading.style.color = "rgb(41, 41, 41)";
    text.style.color = "rgb(74, 74, 74)";
}

// Function for Handling Multiple Clicks and functions
function clickhandle() {
    clickCount++;

    if (clickCount==1) {
        NightMode();
    }
    else if(clickCount==2){
        LightMode(); 
    }
    else{
        clickCount=0;s
    }
}