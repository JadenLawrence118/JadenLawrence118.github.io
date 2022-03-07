function btnHomeClick() {
    parent.location = "index.html";
}

function btnDownloadsClick() {
    parent.location = "downloads.html";
}

function btnContactClick() {
    parent.location = "contacts.html";
}

function footerLocation() {
    if ((document.getElementsByClassName("contactsGrid").offsetHeight) < window.innerHeight) {
        document.getElementById("footer").style.position = "absolute";
        document.getElementById("footer").style.bottom = 0;
    }
}