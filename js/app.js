
// DOM ELEMENTS
const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus");


// ADD EVENT LISTENERS

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// SHOW TIME
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // SET AM OR PM
    const ampm = hour >= 12 ? "PM" : "AM";

    // 12 HOUR FORMAT
    // hour = hour % 12 || 12; 

    // OUTPUT TIME
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// ADD ZEROS
function addZero(n) {
    return(parseInt(n, 10) < 10 ? "0" : "") + n;
}

// SET BACKGROUND AND GREETING
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    document.body.style.backgroundSize = "cover";
    
    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url(../img/morning.jpg)";
        greeting.textContent = "Good Morning";
    } else if(hour < 19) {
        //Afternoon
        document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
        greeting.textContent = "Good Afternoon";
    } else {
        //Night
        document.body.style.backgroundImage = "url(../img/night.jpg)";
        greeting.textContent = "Good Evening";
    }
}

// SET NAME 
function setName(e) {
    if(e.type === "keypress") {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();    
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

// GET NAME
function getName() {
    if(localStorage.getItem("name") === null) {
        name.textContent = "[Enter Your Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

// SET FOCUS 
function setFocus(e) {
    if(e.type === "keypress") {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();    
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}

// GET FOCUS
function getFocus() {
    if(localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

// RUN APP
showTime();
setBgGreet();
getName();
getFocus();
