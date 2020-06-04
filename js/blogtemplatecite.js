function LoadBlogPost(BlogTitle, BlogContent, References) {
    document.getElementById("addBlog").innerHTML +=
        ` <head>
    <title>Sadie Garner</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="author" content="Amy Pegram, 1825142">
    <script src="/WSOA3028A_1825142/js/navbar.js" async></script>
    <link href="/WSOA3028A_1825142/css/stylesheet.css" rel="stylesheet">
</head>

<body>
    <nav>
    <ul>
        <a id="home" href="/WSOA3028A_1825142/index.html">Sadie Garner</a>
        <li><a href="/WSOA3028A_1825142/Victims/">CONTACT</a></li>
        <li><a style= "border-bottom: 0.12rem solid #e5d9d3;" href="#">BLOGS</a>
            <ul>
                <li><a style= "border: none" href="/WSOA3028A_1825142/Blogs/Blog1-RRLibraryOfBabel.html">Library of Babel</a>
                </li>
                <li><a style= "border: none" href="/WSOA3028A_1825142/Blogs/Blog2-Character Description.html">Character
                Description</a>
                </li>
                <li><a style= "border: none" href="/WSOA3028A_1825142/Blogs/Blog3-RRComputingMachiney.html">Computing Machinery and
                Intelligence</a></li>
                <li><a style= "border: none" href="/WSOA3028A_1825142/Blogs/Blog4-WhatAreBrowsers.html">What are Browsers and
                URLs?</a>
                </li>
                <li> <a style= "border: none" href="/WSOA3028A_1825142/Blogs/Blog5-Accessibility.html">The Importance of
                Accessibility</a>
                </li>
                <li><a style= "border: none"
                    href="/WSOA3028A_1825142/Blogs/Blog6-CreativeBrainstorm.html">Creative Brainstorm</a>
                </li>
                <li><a style= "border: none"
                    href="/WSOA3028A_1825142/Blogs/Blog7-ActuallyFiguringItOut.html">Actually Figuring It Out</a>
                </li>
            </ul>
        </li>
        <li><a href="/WSOA3028A_1825142/Victims/">VICTIMS</a></li>
    </ul>
    </nav>
    <h1 style="text-align:center; margin:10px;">` + BlogTitle + `</h1>

    <div class="container">
        <article class="articleRow"> ` + BlogContent + `
            <br></br>
        </article>
        <article class="referencesRow">
        <h3 style="text-align:center">References</h3>`
        + References + `
        <br></br>
        <nav>
            <section>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></section>
        </nav>
    </div>
</body>`;
}