var dialog = document.querySelector("dialog");
if (sessionStorage.getItem('popState') != 'shown') {
    dialog.show();
    sessionStorage.setItem('popState', 'shown')
}

function closing() {
    alert("it should close");
    dialog.close();
    var myobj = document.getElementById("closeDialog").remove();
}