function LoadBlogPost(BlogTitle, BlogContent, References) {
    document.getElementById("addBlog").innerHTML +=
        `<head>
        <title>Sadie Garner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="author" content="Amy Pegram, 1825142">
        <link href="/WSOA3028A_1825142/css/stylesheet.css" rel="stylesheet">
    </head>
    
    <body onload='goBack()'>
        <h1 style="text-align:center">` + BlogTitle + `</h1>
    
        <div class="container">
    
            <article class="articleRow"> ` + BlogContent + `
    
            </article>

            <article class="referencesRow">
            <h3 style="text-align:center">References</h3>`
        + References + `
        <br></br>
        <nav>
            <a href="/WSOA3028A_1825142/index.html">Back</a>
        </nav>
    </article>
        </div>
    </body>`;
}