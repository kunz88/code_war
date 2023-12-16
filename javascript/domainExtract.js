//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
function domainName(url) {
    const arr = ["http://", "www.", "https://", "https://www.", "http://www."];
    let url2 = "";

    arr.map(item => { if (url.indexOf(item) !== -1) url2 = url.replace(item, "") })

    if (url2 === "") { url2 = url }

    return url2.slice(0, url2.indexOf("."))
}
