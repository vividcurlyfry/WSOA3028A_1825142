function LoadBlogPost(BlogTitle, BlogContent, References, BlogLocation) {
    document.querySelector("head").innerHTML +=
        `
        <title>Sadie Garner</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="author" content="Amy Pegram, 1825142">
        <meta name="description" content="Blog: `+ BlogTitle + `">
        <link rel="icon" href="/WSOA3028A_1825142/Logo.png" type="image/png">

        <meta property="og:title" content="Sadie Garner" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vividcurlyfry.github.io/WSOA3028A_1825142/`+ BlogLocation + `" />
        <meta property="og:image" content="WSOA3028A_1825142/Logo.png" />
        <meta property="og:description" content="Blog: ` + BlogTitle + ` ">

        <link href="/WSOA3028A_1825142/css/stylesheet.css" rel="stylesheet">
        `;
    if (References != '') {
        document.querySelector("body").innerHTML +=
            `<section class="container">
            <h1 class="headingRow">` + BlogTitle + `</h1>
            <article class="articleRow" style="margin-bottom:1rem"> ` + BlogContent + `</article>
            <article class="referencesRow" > <h3 style="text-align:center">References</h3>`
            + References + ` </article ></section > `
    }
    else {
        document.querySelector("body").innerHTML += `<section class="container">
        <h1 class="headingRow">` + BlogTitle + `</h1>
        <article class="articleRow" style="margin-bottom:1rem"> ` + BlogContent + `</article></section > `
    }
};