function generateNav() {
    document.getElementsByTagName("nav")[0].innerHTML +=
        `<div class="topnav">
        <a class="logoFormat" href="/WSOA3028A_1825142/index.html">Sadie Garner</a>
        <a href="/WSOA3028A_1825142/Victims/">VICTIMS</a>
        <a href="/WSOA3028A_1825142/Blogs/">BLOGS</a>
        </div>`;
}

function addFooter() {
    document.getElementsByTagName("footer")[0].innerHTML +=

        `<p style="display: inline; padding-right: 40px;">Contact me if you have information:</p>
        <p style="display: inline; padding-right: 50px;">Sadie.Garner@hotmail.com</p>
        <p style="display: inline; padding-right: 50px;">011 453 5608</p>`
}