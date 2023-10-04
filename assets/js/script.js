//Initialising a variable name data
let data = 0;

//Gives a value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//Functions for each button so it can count and send a alert message
function buttonOne() {
    //Counts +1 every time button is clicked
    data = data + 1;
    document.getElementById("counting").innerText = data;
    //Sends alert when button is clicked on
    alert("You added 1 to the total!");
}