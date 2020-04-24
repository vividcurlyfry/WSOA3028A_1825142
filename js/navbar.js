function generateNav() {
    document.getElementsByTagName("nav")[0].innerHTML +=
        `<div class="topnav navformat">
        <a href="/WSOA3028A_1825142/index.html">HOME</a>
        <a href="/WSOA3028A_1825142/Victims/">VICTIMS</a>
        <a href="/WSOA3028A_1825142/Blogs/">BLOGS</a>
        <a href="/WSOA3028A_1825142/Contact.html">CONTACT</a>
        </div>`;
}

function addFooter() {
    document.getElementsByTagName("footer")[0].innerHTML +=
        `<p>If you have any information on the crimes, please don't hesitate to contact me:</p>
        <address>
            <a>Sadie.Garner@hotmail.com</a><br>
            <a>011 453 5608</a>
        </address>`
}