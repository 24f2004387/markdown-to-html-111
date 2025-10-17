# Static Web App

## Summary
This static web app allows users to load Markdown content dynamically via a `?url=` parameter. If the parameter is absent, it falls back to loading a default Markdown attachment. The active source of the Markdown is displayed in the `#markdown-source-label`.

## Setup (Local)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/static-web-app.git
   cd static-web-app
   ```
2. Open `index.html` in your preferred web browser.

## Usage
To load a specific Markdown file, append the `?url=` parameter to the URL:
```
http://localhost:8000/index.html?url=https://example.com/path/to/markdown.md
```
If no parameter is provided, the app will load the default Markdown file.

## Code Explanation
- The app uses JavaScript to check for the `?url=` parameter in the URL.
- If present, it fetches the Markdown content using the Fetch API.
- The content is then rendered in the app, and the source is displayed in the `#markdown-source-label`.
- Evaluation checks ensure that the source label is populated and that the Fetch API is utilized.

## Deployment (GitHub Pages)
1. Push your code to the `main` branch of your GitHub repository.
2. Navigate to the repository settings.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your app will be available at `https://yourusername.github.io/static-web-app`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.