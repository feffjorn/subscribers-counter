//Initialising a variable name data
let data = 0;

//Gives a value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//Functions for each button so it can count and send a alert message
function buttonOne() {
    //Counts +1 every time button is clicked
    data = data + 1;
    //Sends result to h2 tag
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 1 to the total!");
}

function buttonFive() {
    //Counts +5 every time button is clicked
    data = data + 5;
    //Sends result to h2 tag
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 5 to the total!");
}

function buttonTen() {
    //Counts +10 every time button is clicked
    data = data + 10;
    //Sends result to h2 tag
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 10 to the total!");
}

function buttonTwenty() {
    //Counts +20 every time button is clicked
    data = data + 20;
    //Sends result to h2 tag
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 20 to the total!");
}

function buttonFifty() {
    //Counts +50 every time button is clicked
    data = data + 50;
    //Sends result to h2 tag
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 50 to the total!");
}

function buttonHundred() {
    //Counts +100 every time button is clicked
    data = data + 100;
    //Sends result to h2 tag
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 100 to the total!");
}