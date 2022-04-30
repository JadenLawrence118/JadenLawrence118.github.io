function btnHomeClick() {
    parent.location = "index.html"; // Parent.location redirects the user to a specified site
}

function btnDownloadsClick() {
    parent.location = "downloads.html";
}

function btnContactClick() {
    parent.location = "contacts.html";
}

function btnYoungMinds() {
    parent.location = "https://www.youngminds.org.uk/support-us/donate/";
}

function btnMind() {
    parent.location = "https://www.mind.org.uk/donate/";
}

function welcome() {    // The function that runs upon the homepage loading
    var counter1 = 0;   // Declaring counters to use in a loop
    var counter2 = 0;

    var Ws = document.getElementsByClassName("Ws");     // Declaring an array to contain all elements with the ID "Ws"
    while (counter1 < Ws.length) {      // Creating a loop that continues for all specified IDs
        Ws[counter1].style.display = "none";    // Changing the display of the specified IDs in order to hide them
        counter1 = (counter1 + 1);      // Incrementing the counter to continue the loop
    }
    var placeTime = document.getElementsByClassName("placeTime");
    while (counter2 < placeTime.length) {
        placeTime[counter2].style.display = "none";
        counter2 = (counter2 + 1);
    }

    document.getElementById("info").style.display = "none"; // Changing the display of the 'info' div to hide it
}

function btnWelcomeClick() {    // The function that runs upon the welcome button being clicked
    document.getElementById("paraWelcome").style.display = "none";  // Changing the display of the welcome paragraph to hide it
    document.getElementById("btnWelcome").style.display = "none";   // Changing the display of the welcome button to hide it

    var counter1 = 0;   // Declaring counters to use in a loop
    var counter2 = 0;

    var Ws = document.getElementsByClassName("Ws");     // Declaring an array to contain all elements with the ID "Ws"
    while (counter1 < Ws.length) {      // Creating a loop that continues for all specified IDs
        Ws[counter1].style.display = "inline";      // Changing the display of the specified IDs in order to show them
        counter1 = (counter1 + 1);      // Incrementing the counter to continue the loop
    }
    var placeTime = document.getElementsByClassName("placeTime");
    while (counter2 < placeTime.length) {
        placeTime[counter2].style.display = "inline";
        counter2 = (counter2 + 1);
    }

    document.getElementById("info").style.display = "inline";   // Changing the display of the 'info' div to show it
}