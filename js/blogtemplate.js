function LoadBlogPost(BlogTitle, BlogContent, References) {
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