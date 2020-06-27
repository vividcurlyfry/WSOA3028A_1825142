
function sendEmail() {
    Email.send({
        SecureToken: "1ea298c0-7760-4298-9270-42ef2a08fbad",
        To: 'amy.pegram@hotmail.com',
        From: "Sadie.Garner@gmail.com",
        Subject: "Update on the Township Killer Case!",
        Body: "There has been an update on the township killer case!"
    }).then(
        message => alert(message)
    );
}