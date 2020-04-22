function LoadBlogPost(BlogTitle, BlogContent) {
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
                            [1] R. Anyoha, “The History of Artificial Intelligence,” 28 August 2017. [Online]. Available:
                            http://sitn.hms.harvard.edu/flash/2017/history-artificial-intelligence/. [Accessed 14 02 2020].
                            <br><br>
                            [2] D. Roos, “How Alan Turing and His Test Became AI Legend,” 22 May 2019. [Online]. Available:
                            https://electronics.howstuffworks.com/future-tech/alan-turing-test.htm. [Accessed 14 02 2020].
                        </article>
                    </td>
                </tr>
        </table>
        <nav>
            <a href="./index.html">Back</a>
        </nav>
    </body>`;