# HistoriBuddy Landing Page

This is a modern, responsive landing page for HistoriBuddy, a Flutter app that helps tourists learn about historical objects through AI-powered interactions.

## Project Structure

```
historibuddy-landingpage/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # CSS styles
├── js/
│   └── script.js        # JavaScript functionality
├── images/              # Image assets (SVG files)
│   ├── logo.svg
│   ├── hero-app.svg
│   ├── app-showcase.svg
│   ├── flutter-logo.svg
│   ├── google-ai-logo.svg
│   ├── api-logo.svg
│   ├── privacy-logo.svg
│   ├── firebase-logo.svg
│   ├── app-store.svg
│   ├── google-play.svg
│   └── placeholder.md   # Image documentation
├── server.js            # Simple Node.js server for local testing
├── package.json         # Node.js project configuration
└── .gitignore           # Git ignore configuration
```

## Features

- Modern, responsive design
- Interactive UI elements with animations
- Mobile-friendly navigation
- Optimized for performance

## Getting Started

1. Clone this repository
2. You can view the landing page in two ways:
   - **Option 1**: Simply open `index.html` in a web browser
   - **Option 2**: Use the included Node.js server:
     ```
     # Install Node.js if you haven't already
     npm install
     npm start
     ```
     This will start a local server at http://localhost:3000
   - For development with auto-reload:
     ```
     npm install
     npm run dev
     ```

## Customization

### Colors

The color scheme can be easily customized by modifying the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary-color: #6200ea;
    --primary-light: #9d46ff;
    --primary-dark: #0a00b6;
    --secondary-color: #ff6d00;
    /* other variables */
}
```

### Content

Update the content in `index.html` to match your specific needs. The page is structured into clear sections:

- Hero section
- What is HistoriBuddy?
- Key Features
- How It Works
- Perfect For
- Technical Highlights
- User Journey
- Download section
- Footer

### Images

The landing page uses SVG images for all graphics, which provides several benefits:

- Scalable graphics that look crisp at any size
- Faster loading times (no large image files)
- Better accessibility and SEO
- Easy to modify colors and styles directly in the SVG code

You can replace any SVG with higher quality images if needed. See `images/placeholder.md` for details on the included SVG files.

## Browser Compatibility

This landing page is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Development

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code, Sublime Text, etc.)
- A modern web browser

### Making Changes

1. Edit the HTML, CSS, or JavaScript files as needed
2. Refresh the browser to see your changes
3. Test on different screen sizes to ensure responsiveness

## Deployment

To deploy this landing page:

1. Upload all files to your web hosting service
2. Ensure the directory structure is maintained
3. Set up any necessary redirects or domain configurations

## License

This project is licensed under the MIT License - see the LICENSE file for details. # gsc-historibuddy-landing
