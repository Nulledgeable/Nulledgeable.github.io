# Nulledgeable

A software development blog featuring posts, lessons, business essays, and projects.

🌐 **Live Site:** [https://nulledgeable.github.io](https://nulledgeable.github.io)

## Features

- Clean, DokuWiki-inspired design
- Purple and gold color scheme
- Responsive layout with hamburger side menu
- Separate sections for Posts, Reading List, About Me, Lessons, Business Essays, and Projects
- HTML5 Boilerplate structure
- GitHub Pages ready

## Structure

```
.
├── css/
│   ├── normalize.css    # CSS reset
│   └── main.css         # Main styles
├── js/
│   └── main.js          # Main JavaScript
├── img/
│   └── profile.jpg      # Profile image
├── index.html           # Home page
├── posts.html           # Blog posts
├── reading-list.html    # Book recommendations
├── about.html           # About page
├── lessons.html         # Lessons learned
├── business.html        # Business essays
├── projects.html        # Project showcase
├── 404.html             # Error page
├── _config.yml          # Jekyll configuration
├── .nojekyll            # Bypass Jekyll processing
├── favicon.ico          # Favicon
├── icon.png             # App icon
├── robots.txt           # Robots file
├── humans.txt           # Humans file
└── site.webmanifest     # Web app manifest
```

## Deployment (GitHub Pages)

This site is configured for GitHub Pages deployment:

1. Push your changes to the `main` branch
2. Go to your repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder
5. Click Save

Your site will be live at `https://nulledgeable.github.io`

## Local Development

Since this is a static HTML site, you can:

1. Open `index.html` directly in your browser, or
2. Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```
3. Visit `http://localhost:8000`

## Customization

1. Replace `img/profile.jpg` with your profile photo
2. Update social media links in `about.html`
3. Customize content in `js/main.js`
4. Replace `favicon.ico` and `icon.png` with your branding
5. Update colors in `css/main.css` (CSS variables at the top)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
