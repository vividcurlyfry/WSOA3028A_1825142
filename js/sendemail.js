
function sendEmail() {
    Email.send({
        SecureToken: "1ea298c0-7760-4298-9270-42ef2a08fbad",
        To: document.getElementById("email").value,
        From: "Sadie.Garner@hotmail.com",
        Subject: "Update on the Township Killer Case!",
        Body: "There has been an update on the township killer case! One Killer. There are a few reasons I have theorised that these killings are all the result of one person. There is a distinct pattern occurring within these killings.I have created a timeline to show the order of the killings"
    }).then(
        openPage()
    );
}

function openPage() {
    alert("An email has been sent. Please check your junk/spam folder too <3");
    window.location = "/WSOA3028A_1825142/Victims/UpdatedBlog.html";
}