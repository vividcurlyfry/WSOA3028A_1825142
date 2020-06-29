var dialog = document.querySelector("dialog");
if (sessionStorage.getItem('popState') != 'shown') {
    dialog.show();
    sessionStorage.setItem('popState', 'shown')
}

function closing() {
    alert("it should close");
    dialog.close();
    var element = document.getElementById("dialog");
    element.parentNode.removeChild("dialog");
}