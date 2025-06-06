# Browser Wars: Evolution of Market Share 1992-2025

An interactive visualization showing the evolution of web browser market share from 1992 to 2025, featuring animated pie charts and historical milestones.

## Features

- **Interactive Timeline**: Scrub through 33 years of browser history
- **Animated Pie Charts**: Smooth transitions between time periods using D3.js
- **Historical Annotations**: Key milestones in browser development
- **Auto-Play Mode**: 2-minute journey through the entire timeline
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Browser History Highlights

- **1992-1995**: The birth of graphical browsing with Mosaic and Netscape Navigator
- **1995-2001**: The first Browser War - IE vs Netscape
- **2001-2008**: Internet Explorer dominance era
- **2008-2012**: Firefox challenges IE, Chrome enters the market
- **2012-Present**: Chrome dominance with Safari and Edge competition

## Technology Stack

- **D3.js**: For data visualization and smooth animations
- **Vanilla JavaScript**: Clean, dependency-light implementation
- **CSS3**: Modern glassmorphism design with gradients
- **HTML5**: Semantic markup and accessibility

## Usage

1. Open `index.html` in a web browser
2. Click the play button to watch the 2-minute animation
3. Drag the timeline scrubber to jump to specific years
4. Hover over pie segments for interactive effects

## Data Sources

Browser market share data compiled from:
- StatCounter Global Stats
- NetMarketShare historical data
- W3Counter archives
- Various web analytics reports

## Browser Color Coding

- **Mosaic**: Purple (#8A2BE2) - First graphical browser
- **Lynx**: Grey (#808080) - Text-based browser
- **Netscape**: Dark Teal (#008B8B) - Optimized for text readability
- **Internet Explorer**: IE Blue (#1BA1E2) - Authentic logo color
- **Firefox**: Orange (#FF7139) - Authentic logo color
- **Chrome**: Google Green (#34A853) - Distinctive green for better differentiation
- **Safari**: Safari Blue (#007AFF) - Authentic logo color
- **Edge**: Microsoft Blue (#0078D4) - Authentic logo color
- **Other**: Pink (#FF69B4) - Distinctive color for remaining browsers

## Deployment

### Quick Deploy to GitHub Pages
```bash
# 1. Create repository on GitHub
# 2. Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/browser-wars.git
git push -u origin main

# 3. Enable Pages in repository Settings → Pages → Deploy from branch → main
```

### Alternative Hosting Options
- **Netlify**: Drag and drop the project folder to netlify.com
- **Vercel**: Run `vercel` in the project directory
- **Surge**: Run `surge` in the project directory
- **Firebase**: Use `firebase init hosting` and `firebase deploy`

See `deploy.md` for detailed deployment instructions.

## Development

The project uses a clean, modular structure:
- `browserData.js`: Centralized browser configuration and historical data
- `app.js`: Main application logic and D3.js visualization
- `styles.css`: Responsive design with glassmorphism effects
- `icons/`: Authentic browser logos and icons