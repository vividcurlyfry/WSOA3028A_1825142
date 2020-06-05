var dialog = document.querySelector("dialog");
if (localStorage.getItem('popState') != 'shown') {
    dialog.show();
    localStorage.setItem('popState', 'shown')
}

function closing() {
    dialog.close();
}