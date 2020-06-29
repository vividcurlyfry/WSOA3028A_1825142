
function sendEmail() {
    Email.send({
        SecureToken: "1ea298c0-7760-4298-9270-42ef2a08fbad",
        To: document.getElementById("email").value,
        From: "Sadie.Garner@hotmail.com",
        Subject: "Update on the Township Killer Case!",
        Body: "<html><h1>There has been an update on the township killer case!</h1> Go to <a href= \"https://vividcurlyfry.github.io/WSOA3028A_1825142/\"> SadieGarner.com</a> to read more information. Here is a snippet: <h2>Update: Sheronisa’s Body Found</h2> <p>In my last post, I predicted that that Sheronisa’s body will be found in Tembisa. Sadly, this turned out to be true. This could just be a coincidence, but this could also prove my theory. Her body was horrifically brutalised. <a href= \"https://vividcurlyfry.github.io/WSOA3028A_1825142/Victims/SadieBlogs/SadieBlog5-UpdatedBlog.html\"> Read More...</a></p> </html>"
    }).then(
        openPage()
    );
}

function openPage() {
    alert("An email has been sent. Please check your junk/spam folder too <3");
    window.location = "/WSOA3028A_1825142/Victims/UpdatedBlog.html";
}