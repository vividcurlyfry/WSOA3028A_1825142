var dialog = document.querySelector("dialog");
if (sessionStorage.getItem('popState') != 'shown') {
    dialog.show();
    sessionStorage.setItem('popState', 'shown')
}

function closing() {
    style.display = "none";
    dialog.close();
}