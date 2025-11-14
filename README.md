# Jake Sonderman - Personal Website

Personal website for jakesonderman.com, deployed via GitHub and Netlify.

## Project Overview

This is a multi-page personal website showcasing work, projects, and information about Jake Sonderman.

## Tech Stack

- HTML/CSS/JavaScript
- Deployed via Netlify
- Version controlled via GitHub

## Getting Started

### Prerequisites

- Node.js (if using any build tools)
- Git

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd jakesondermanwebsite
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Project Structure

```
jakesondermanwebsite/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects/portfolio page
├── contact.html        # Contact page
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── images/             # Image assets
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Deployment

This site is configured for automatic deployment via Netlify:
- Push to `main` branch triggers deployment
- Configuration in `netlify.toml`

## Contributing

This is a personal website project. For questions or suggestions, please open an issue.

