function LoadBlogPost(BlogTitle, BlogContent) {
    document.getElementsByTagName("addBlog")[0].innerHTML +=
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
                    <h2>Hello</h2>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <article> 
                        Help
                    </article>
                </td>
            </tr>
        </table>
        <nav></nav>
    </body>`;
}