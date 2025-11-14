# Agent Context - Jake Sonderman Website

## Project Overview

This is a personal website for jakesonderman.com, a multi-page site deployed via GitHub and Netlify.

## Key Information

- **Domain**: jakesonderman.com
- **Deployment**: Netlify (automatic via GitHub)
- **Structure**: Multi-page website (HTML/CSS/JS)
- **Repository**: jakesondermanwebsite

## Project Structure

- `index.html` - Home/landing page
- `about.html` - About page
- `projects.html` - Projects/portfolio showcase
- `contact.html` - Contact information/form
- `css/` - All stylesheets
- `js/` - All JavaScript files
- `images/` - Image assets
- `netlify.toml` - Netlify deployment configuration

## Development Guidelines

1. **File Organization**: Keep files organized by type (HTML, CSS, JS, images)
2. **Code Style**: Use clean, semantic HTML and modern CSS/JS
3. **Responsive Design**: Ensure all pages are mobile-responsive
4. **Performance**: Optimize images and assets for web
5. **Accessibility**: Follow WCAG guidelines for accessibility

## Common Tasks

- Adding new pages: Create new HTML file, add navigation links
- Styling: Update CSS files in `css/` directory
- Functionality: Add JavaScript to `js/` directory
- Assets: Place images in `images/` directory

## Deployment Notes

- **All deployment is done through terminal**
- Netlify automatically deploys from GitHub `main` branch
- Configuration is in `netlify.toml`
- No build step required (static HTML/CSS/JS)

### Deployment Process (Terminal)

1. **GitHub Setup**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <github-repo-url>
   git push -u origin main
   ```

2. **Netlify Deployment**:
   - Connect GitHub repo to Netlify via Netlify dashboard
   - Or use Netlify CLI: `netlify deploy --prod`
   - Site will auto-deploy on every push to `main` branch

## Important Files

- `README.md` - Project documentation
- `AGENT.md` - This file (agent context)
- `netlify.toml` - Netlify configuration

