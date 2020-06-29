function LoadBlogPost(BlogTitle, BlogContent, References, Previous, Next) {
    if (References != '') {
        document.querySelector("body").innerHTML +=
            `<section class="container">
            <h1 class="headingRow">` + BlogTitle + `</h1>
            <article class="articleRow" style="margin-bottom:1rem"> ` + BlogContent + `</article>
            <article class="referencesRow" style="word-wrap: break-word;"> <h3 style="text-align:center">References</h3>`
            + References + ` </article >
            <p style = "grid-column: 1/3; grid-row: 50/51; text-align: center;"><a href = ` + Previous + `>Previous/</a><a href = ` + Next + `>Next</a> </section > `
    }
    else {
        document.querySelector("body").innerHTML += `<section class="container">
        <h1 class="headingRow">` + BlogTitle + `</h1>
        <article class="articleRow" style="margin-bottom:1rem"> ` + BlogContent + `</article><p style = "grid-column: 1/3; grid-row: 50/51; text-align: center;"><a href = ` + Previous + `>Previous/</a><a href = ` + Next + `>Next</a> </section ></section > `
    }
};