function LoadBlogPost(BlogTitle, BlogContent, References) {
    document.getElementById("addBlog").innerHTML +=
        `<head>
        <title>Sadie Garner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="author" content="Amy Pegram, 1825142">
        <script src="/WSOA3028A_1825142/js/back.js" async></script>
    </head>
    
    <body onload='goBack()'>
        <hr>
        <h1>Blog Post 1</h1>
        <hr>
    
        <table width=50%>
            <tr>
                <td>
                    <h2>` + BlogTitle + `</h2>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <article> ` + BlogContent + `
    
                    </article>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>References</h3>
                        <article>
                            
                        </article>
                    </td>
                </tr>
        </table>
        <nav>
            <a href="./index.html">Back</a>
        </nav>
    </body>`;
}