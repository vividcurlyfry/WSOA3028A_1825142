function generateNav() {
    document.getElementsByTagName("nav")[0].innerHTML +=
        `<div class="topnav navformat">
        <a href="/WSOA3028A_1825142/index.html">HOME</a>
        <a href="/WSOA3028A_1825142/Victims/">VICTIMS</a>
        <a href="/WSOA3028A_1825142/Blogs/">BLOGS</a>
        </div>`;
}

function addFooter() {
    document.getElementsByTagName("footer")[0].innerHTML +=
        `<div>
        <p style="padding:5px">If you have any information relating to the the crimes, please don't hesitate to contact me:</p>
        <ul style="list-style-type: none;">
            <li>Sadie.Garner@hotmail.com</a>
            <li style="padding:5px">011 453 5608</a>
        </ul>
        </div>`
}