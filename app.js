document.title = "Markdown Loader";

const urlParams = new URLSearchParams(window.location.search);
const markdownUrl = urlParams.get('url');
const markdownSourceLabel = document.querySelector("#markdown-source-label");
const markdownContent = document.querySelector("#markdown-content");

const loadMarkdown = async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    markdownContent.innerHTML = marked(text);
    highlightElement(markdownContent);
};

if (markdownUrl) {
    markdownSourceLabel.textContent = `Source: ${markdownUrl}`;
    loadMarkdown(markdownUrl);
} else {
    markdownSourceLabel.textContent = "Source: attachment.md";
    loadMarkdown('attachment.md');
}