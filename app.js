const urlParams = new URLSearchParams(window.location.search);
const markdownUrl = urlParams.get('url') || 'mkd-023.md';
const sourceLabel = document.querySelector("#markdown-source-label");
const contentDiv = document.querySelector("#markdown-content");

sourceLabel.textContent = markdownUrl;

fetch(markdownUrl)
    .then(response => response.text())
    .then(markdown => {
        contentDiv.innerHTML = marked(markdown);
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    })
    .catch(error => {
        contentDiv.textContent = 'Error loading markdown: ' + error;
    });