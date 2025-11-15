# Agent Context - Jake Sonderman Website

## Project Overview

This is a personal website for jakesonderman.com, a multi-page site deployed via GitHub and Netlify.

## Key Information

- **Domain**: jakesonderman.com
- **Deployment**: Netlify (automatic via GitHub)
- **Structure**: Multi-page website (HTML/CSS/JS)
- **Repository**: jakesondermanwebsite

## Project Structure

- `index.html` - Home/landing page (with ASCII animations in background)
- `games.html` - Games page (formerly about.html)
- `jeremy.html` - Jeremy the ASCII pet (formerly projects.html)
- `contact.html` - Contact information/form
- `visualizer.html` - ASCII Audio Visualizer (NEW)
- `css/` - All stylesheets
- `js/` - All JavaScript files
- `images/` - Image assets
- `netlify.toml` - Netlify deployment configuration

## Development Guidelines

1. **File Organization**: Keep files organized by type (HTML, CSS, JS, images)
2. **Design Style**: **Old HTML/retro 90s web aesthetic** - Think classic web design with literal raw HTML (uppercase tags, inline styling with BGCOLOR, TEXT, LINK attributes, <FONT> tags, <TABLE> for layout, <CENTER>, <MARQUEE>, etc.)
3. **Code Style**: Use literal raw HTML (HTML 3.2 style) with inline styling
4. **Colors**: Black and white theme (black text/borders, white backgrounds)
5. **ASCII Art**: Incorporate ASCII animations throughout the site
6. **Performance**: Optimize assets for web
7. **Accessibility**: Follow WCAG guidelines where possible while maintaining retro aesthetic

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

## ASCII Audio Visualizer Feature

### Overview
The ASCII Audio Visualizer is a new tab/page that allows users to:
1. Drop or select an audio file
2. Choose from multiple ASCII-based visualizer styles
3. See real-time ASCII visualizations that react to the audio

### Technical Implementation

#### File Structure
- `visualizer.html` - Main visualizer page
- JavaScript libraries needed:
  - Web Audio API (built-in browser API)
  - File handling for audio drops/uploads

#### Visualizer Types (All ASCII-based)

1. **Bar Visualizer**
   - Vertical bars using `|`, `║`, `█` characters
   - Height varies with frequency amplitude
   - Classic equalizer style

2. **Wave Visualizer**
   - Waveform using `~`, `^`, `v`, `-` characters
   - Scrolling wave pattern
   - Shows audio waveform in ASCII

3. **Spectrum Analyzer**
   - Frequency spectrum using characters of varying density
   - Characters: ` `, `.`, `:`, `*`, `#`, `@`
   - Denser characters = higher amplitude

4. **Circle Visualizer**
   - Circular pattern using `/`, `\`, `|`, `-`, `+`, `*`
   - Radius expands/contracts with bass
   - Rotating ASCII pattern

5. **Matrix Style**
   - Falling characters effect
   - Speed/density varies with beat
   - Random ASCII characters cascading down

#### Core Features

**Audio Input:**
- Drag and drop audio file support
- File picker for selecting audio files
- Supported formats: MP3, WAV, OGG
- Display current track name

**Visualizer Selection:**
- Dropdown or button selection for visualizer type
- Preview thumbnail of each style
- Smooth transitions between visualizers

**Playback Controls:**
- Play/Pause button
- Volume control
- Progress bar (ASCII style: `[=====>    ]`)
- Time display

**Display Area:**
- Large `<PRE>` tag for ASCII visualization
- Fixed-width font (Courier)
- Black background, white/green text
- Update rate: 30-60 FPS for smooth animation

#### Code Architecture

```javascript
// Core components:
1. AudioContext - Web Audio API
2. AnalyserNode - Frequency/waveform data
3. FileReader - Audio file handling
4. Animation loop - requestAnimationFrame()
5. ASCII renderers - Different visualizer algorithms
```

#### Implementation Steps

1. Create `visualizer.html` with retro 90s HTML style
2. Add file drop zone and file input
3. Implement Web Audio API setup
4. Create base ASCII renderer class
5. Implement each visualizer type
6. Add playback controls
7. Add visualizer selection UI
8. Style everything in black/white retro aesthetic
9. Add to main navigation
10. Test with various audio files

#### Styling Notes
- Use `<PRE>` tags for ASCII display
- Monospace font (Courier, Courier New)
- Black background for visualizer area
- White or green text for visibility
- Retro-style controls (90s buttons, dropdowns)
- Keep consistent with site's raw HTML aesthetic

#### Performance Considerations
- Limit canvas size to prevent lag
- Use efficient string building (array join vs concatenation)
- Throttle updates if needed (30 FPS minimum)
- Clear/reset buffers properly

