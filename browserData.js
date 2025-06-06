// Browser market share data from 1992-2025
// Data sources: StatCounter, NetMarketShare, W3Counter historical data

const browserData = {
    1992: [
        { name: "Mosaic", share: 60, color: "#8B4513" },
        { name: "Lynx", share: 25, color: "#2F4F4F" },
        { name: "Other", share: 15, color: "#808080" }
    ],
    1995: [
        { name: "Netscape Navigator", share: 80, color: "#00CED1" }, // Netscape teal
        { name: "Internet Explorer", share: 3, color: "#1BA1E2" }, // IE blue
        { name: "Mosaic", share: 10, color: "#8B4513" },
        { name: "Other", share: 7, color: "#808080" }
    ],
    1997: [
        { name: "Netscape Navigator", share: 72, color: "#00CED1" }, // Netscape teal
        { name: "Internet Explorer", share: 20, color: "#1BA1E2" }, // IE blue
        { name: "Other", share: 8, color: "#808080" }
    ],
    1999: [
        { name: "Internet Explorer", share: 53, color: "#1BA1E2" }, // IE blue
        { name: "Netscape Navigator", share: 40, color: "#00CED1" }, // Netscape teal
        { name: "Other", share: 7, color: "#808080" }
    ],
    2001: [
        { name: "Internet Explorer", share: 86, color: "#1BA1E2" }, // IE blue
        { name: "Netscape", share: 10, color: "#00CED1" }, // Netscape teal
        { name: "Other", share: 4, color: "#808080" }
    ],
    2003: [
        { name: "Internet Explorer", share: 92, color: "#1BA1E2" }, // IE blue
        { name: "Netscape", share: 4, color: "#00CED1" }, // Netscape teal
        { name: "Other", share: 4, color: "#808080" }
    ],
    2005: [
        { name: "Internet Explorer", share: 85, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 9, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 2, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 4, color: "#808080" }
    ],
    2007: [
        { name: "Internet Explorer", share: 77, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 16, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 4, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 3, color: "#808080" }
    ],
    2009: [
        { name: "Internet Explorer", share: 65, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 23, color: "#FF7139" }, // Firefox orange
        { name: "Chrome", share: 4, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 4, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 4, color: "#808080" }
    ],
    2011: [
        { name: "Internet Explorer", share: 44, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 30, color: "#FF7139" }, // Firefox orange
        { name: "Chrome", share: 20, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 4, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 2, color: "#808080" }
    ],
    2013: [
        { name: "Chrome", share: 43, color: "#34A853" }, // Chrome green
        { name: "Internet Explorer", share: 30, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 20, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 5, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 2, color: "#808080" }
    ],
    2015: [
        { name: "Chrome", share: 53, color: "#34A853" }, // Chrome green
        { name: "Internet Explorer", share: 19, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 16, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 10, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 2, color: "#808080" }
    ],
    2017: [
        { name: "Chrome", share: 58, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 14, color: "#007AFF" }, // Safari blue
        { name: "Firefox", share: 13, color: "#FF7139" }, // Firefox orange
        { name: "Internet Explorer", share: 9, color: "#1BA1E2" }, // IE blue
        { name: "Edge", share: 4, color: "#0078D4" }, // Edge blue
        { name: "Other", share: 2, color: "#808080" }
    ],
    2019: [
        { name: "Chrome", share: 64, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 16, color: "#007AFF" }, // Safari blue
        { name: "Firefox", share: 10, color: "#FF7139" }, // Firefox orange
        { name: "Edge", share: 5, color: "#0078D4" }, // Edge blue
        { name: "Internet Explorer", share: 3, color: "#1BA1E2" }, // IE blue
        { name: "Other", share: 2, color: "#808080" }
    ],
    2021: [
        { name: "Chrome", share: 65, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 19, color: "#007AFF" }, // Safari blue
        { name: "Edge", share: 8, color: "#0078D4" }, // Edge blue
        { name: "Firefox", share: 6, color: "#FF7139" }, // Firefox orange
        { name: "Other", share: 2, color: "#808080" }
    ],
    2023: [
        { name: "Chrome", share: 63, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 20, color: "#007AFF" }, // Safari blue
        { name: "Edge", share: 11, color: "#0078D4" }, // Edge blue
        { name: "Firefox", share: 4, color: "#FF7139" }, // Firefox orange
        { name: "Other", share: 2, color: "#808080" }
    ],
    2025: [
        { name: "Chrome", share: 61, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 22, color: "#007AFF" }, // Safari blue
        { name: "Edge", share: 13, color: "#0078D4" }, // Edge blue
        { name: "Firefox", share: 3, color: "#FF7139" }, // Firefox orange
        { name: "Other", share: 1, color: "#808080" }
    ]
};

// Historical milestones and browser events
const historicalEvents = {
    1993: "NCSA Mosaic becomes the first popular graphical web browser",
    1994: "Netscape Navigator launched, revolutionizing web browsing",
    1995: "Internet Explorer 1.0 released, bundled with Windows 95",
    1998: "Browser Wars begin: IE vs Netscape Navigator",
    2001: "Internet Explorer 6 dominates with 86% market share",
    2003: "IE reaches peak dominance at 92% market share",
    2004: "Mozilla Firefox 1.0 released, challenging IE's monopoly",
    2008: "Google Chrome launched with V8 JavaScript engine",
    2009: "Chrome begins rapid market share growth",
    2012: "Chrome overtakes Internet Explorer as #1 browser",
    2015: "Microsoft Edge replaces Internet Explorer",
    2017: "Chrome reaches 58% market share dominance",
    2020: "Safari gains prominence with iPhone/iPad growth",
    2023: "Chrome maintains leadership despite privacy concerns"
};

// Function to interpolate between two years of data
function interpolateData(year) {
    const years = Object.keys(browserData).map(Number).sort((a, b) => a - b);
    
    // Find the closest years
    let lowerYear = years[0];
    let upperYear = years[years.length - 1];
    
    for (let i = 0; i < years.length - 1; i++) {
        if (year >= years[i] && year <= years[i + 1]) {
            lowerYear = years[i];
            upperYear = years[i + 1];
            break;
        }
    }
    
    // If exact match, return that data (sorted alphabetically)
    if (browserData[year]) {
        return browserData[year].slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Interpolate between two years
    const lowerData = browserData[lowerYear];
    const upperData = browserData[upperYear];
    const ratio = (year - lowerYear) / (upperYear - lowerYear);
    
    // Create a map of browser names to shares
    const allBrowsers = new Set();
    lowerData.forEach(d => allBrowsers.add(d.name));
    upperData.forEach(d => allBrowsers.add(d.name));
    
    const interpolated = [];
    allBrowsers.forEach(browserName => {
        const lower = lowerData.find(d => d.name === browserName) || { share: 0 };
        const upper = upperData.find(d => d.name === browserName) || { share: 0 };
        const color = lower.color || upper.color || "#808080";
        
        const interpolatedShare = lower.share + (upper.share - lower.share) * ratio;
        
        if (interpolatedShare > 0.5) { // Only include browsers with meaningful share
            interpolated.push({
                name: browserName,
                share: interpolatedShare,
                color: color
            });
        }
    });
    
    return interpolated.sort((a, b) => a.name.localeCompare(b.name));
}