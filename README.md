# Markdown to HTML Converter

## Summary
A static web application that converts Markdown files to HTML. It supports loading Markdown content from a specified URL via a `?url=` parameter, with a fallback to local attachments. The active source of the Markdown content is displayed in the `#markdown-source-label`.

## Setup (Local)
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/24f2004387/markdown-to-html-111.git
   ```
2. Navigate to the project directory:
   ```bash
   cd markdown-to-html-111
   ```
3. Open `index.html` in your preferred web browser.

## Usage
To use the application, you can either:
- Load a Markdown file directly by attaching it to the URL, e.g., `index.html?url=your-markdown-file.md`.
- If no URL is provided, the app will default to loading a local Markdown file.

The active source of the Markdown content will be displayed in the `#markdown-source-label`.

## Code Explanation
The application utilizes JavaScript to fetch Markdown content. It checks for the presence of a `?url=` parameter in the URL. If found, it fetches the Markdown from that URL; otherwise, it falls back to a local file. The active source is updated dynamically in the DOM.

Key checks include:
- Ensuring the `#markdown-source-label` is populated:
  ```javascript
  document.querySelector("#markdown-source-label").textContent.length > 0
  ```
- Verifying the use of the `fetch` API in the script:
  ```javascript
  !!document.querySelector("script").textContent.includes("fetch(")
  ```

## Deployment (GitHub Pages)
To deploy the application on GitHub Pages:

1. Push your changes to the `main` branch of your repository.
2. Go to your GitHub repository settings.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your site will be published at `https://<username>.github.io/<repository-name>/`.

For this project, the live URL is: [https://24f2004387.github.io/markdown-to-html-111/](https://24f2004387.github.io/markdown-to-html-111/)

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.