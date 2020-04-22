function LoadBlogPost(BlogTitle, BlogContent) {
    document.getElementById("addBlog").innerHTML +=
        `<head>
        <title>Sadie Garner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="author" content="Amy Pegram, 1825142">
        <script src="/WSOA3028A_1825142/js/back.js" async></script>
        <link href="/WSOA3028A_1825142/css/stylesheet.css" rel="stylesheet">
    </head>
    
    <body onload='goBack()'>
        <hr>
        <h1>` + BlogTitle + `</h1>
        <hr>
    
        <table width=50%>
            <tr>
                <td colspan=2>
                    <article> ` + BlogContent + `
    
                    </article>
                </td>
            </tr>
        </table>
        <nav>
            <a href="./index.html">Back</a>
        </nav>
    </body>`;
}