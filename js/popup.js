var dialog = document.querySelector("dialog");
if (sessionStorage.getItem('popState') != 'shown') {
    dialog.show();
    sessionStorage.setItem('popState', 'shown')
}

function closing() {
    dialog.close();
    /*This was my attempt to try to get this popup to close in microsoft edge and internet explorer. From the research I did it seems that there could be a bug preventing dialogs from closing, which could have caused my issue.*/
    var myobj = document.getElementById("closeDialog");
    alert(myobj);
    myobj.remove();
}