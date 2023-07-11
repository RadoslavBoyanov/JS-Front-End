function extract(content) {
    let text = document.getElementById('content');
    let words = text.textContent.match(/\(.*?\)/g).map(x => x.replace(/[()]/g, ""));
    return words.join('; ')
}