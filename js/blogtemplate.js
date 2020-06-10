function LoadBlogPost(BlogTitle, BlogContent) {
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
            <a id="home" href="/WSOA3028A_1825142/index.html"><img src="/WSOA3028A_1825142/Logo.png" alt="Logo: A picture of the scales of justice." height=30rem> Sadie Garner</a>
            <li><a href="/WSOA3028A_1825142/contact.html">CONTACT</a></li>
            <li><a style= "border-bottom: 0.12rem solid #F3EDEA;" href="#">BLOGS</a>
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
                    <li><a style= "border: none"
                        href="/WSOA3028A_1825142/Blogs/Blog9-BeingIntoTrueCrime.html">Being “Into” True Crime But Also Believing All Cops Are Bastards</a>
                    </li>
                </ul>
            </li>
            <li><a href="/WSOA3028A_1825142/Victims/">VICTIMS</a></li>
        </ul>
        </nav>   
        <section class="container">
            <h1 class = "headingRow">` + BlogTitle + `</h1>
            <article class="articleRow"> ` + BlogContent + `</article>
        </section>
    </body>`;
}