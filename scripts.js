function btnHomeClick() {
    parent.location = "index.html";
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

function welcome() {
    var counter1 = 0;
    var counter2 = 0;

    var Ws = document.getElementsByClassName("Ws");
    while (counter1 < Ws.length) {
        Ws[counter1].style.display = "none"; 
        counter1 = (counter1 + 1);
    }
    var placeTime = document.getElementsByClassName("placeTime");
    while (counter2 < placeTime.length) {
        placeTime[counter2].style.display = "none";
        counter2 = (counter2 + 1);
    }

    document.getElementById("info").style.display = "none";
}

function btnWelcomeClick() {
    document.getElementById("paraWelcome").style.display = "none";
    document.getElementById("btnWelcome").style.display = "none";

    var counter1 = 0;
    var counter2 = 0;

    var Ws = document.getElementsByClassName("Ws");
    while (counter1 < Ws.length) {
        Ws[counter1].style.display = "inline";
        counter1 = (counter1 + 1);
    }
    var placeTime = document.getElementsByClassName("placeTime");
    while (counter2 < placeTime.length) {
        placeTime[counter2].style.display = "inline";
        counter2 = (counter2 + 1);
    }

    document.getElementById("info").style.display = "inline";
}