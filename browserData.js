// Browser market share data from 1992-2025
// Data sources: StatCounter, NetMarketShare, W3Counter historical data

const browserData = {
    1992: [
        { name: "Mosaic", share: 60, color: "#8A2BE2" },
        { name: "Lynx", share: 25, color: "#808080" },
        { name: "Other", share: 15, color: "#FF69B4" }
    ],
    1995: [
        { name: "Netscape Navigator", share: 80, color: "#00CED1" }, // Netscape teal
        { name: "Internet Explorer", share: 3, color: "#1BA1E2" }, // IE blue
        { name: "Mosaic", share: 10, color: "#8A2BE2" },
        { name: "Other", share: 7, color: "#FF69B4" }
    ],
    1997: [
        { name: "Netscape Navigator", share: 72, color: "#00CED1" }, // Netscape teal
        { name: "Internet Explorer", share: 20, color: "#1BA1E2" }, // IE blue
        { name: "Other", share: 8, color: "#FF69B4" }
    ],
    1999: [
        { name: "Internet Explorer", share: 53, color: "#1BA1E2" }, // IE blue
        { name: "Netscape Navigator", share: 40, color: "#00CED1" }, // Netscape teal
        { name: "Other", share: 7, color: "#FF69B4" }
    ],
    2001: [
        { name: "Internet Explorer", share: 86, color: "#1BA1E2" }, // IE blue
        { name: "Netscape", share: 10, color: "#00CED1" }, // Netscape teal
        { name: "Other", share: 4, color: "#FF69B4" }
    ],
    2003: [
        { name: "Internet Explorer", share: 92, color: "#1BA1E2" }, // IE blue
        { name: "Netscape", share: 4, color: "#00CED1" }, // Netscape teal
        { name: "Other", share: 4, color: "#FF69B4" }
    ],
    2005: [
        { name: "Internet Explorer", share: 85, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 9, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 2, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 4, color: "#FF69B4" }
    ],
    2007: [
        { name: "Internet Explorer", share: 77, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 16, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 4, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 3, color: "#FF69B4" }
    ],
    2009: [
        { name: "Internet Explorer", share: 65, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 23, color: "#FF7139" }, // Firefox orange
        { name: "Chrome", share: 4, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 4, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 4, color: "#FF69B4" }
    ],
    2011: [
        { name: "Internet Explorer", share: 44, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 30, color: "#FF7139" }, // Firefox orange
        { name: "Chrome", share: 20, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 4, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2013: [
        { name: "Chrome", share: 43, color: "#34A853" }, // Chrome green
        { name: "Internet Explorer", share: 30, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 20, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 5, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2015: [
        { name: "Chrome", share: 53, color: "#34A853" }, // Chrome green
        { name: "Internet Explorer", share: 19, color: "#1BA1E2" }, // IE blue
        { name: "Firefox", share: 16, color: "#FF7139" }, // Firefox orange
        { name: "Safari", share: 10, color: "#007AFF" }, // Safari blue
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2017: [
        { name: "Chrome", share: 58, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 14, color: "#007AFF" }, // Safari blue
        { name: "Firefox", share: 13, color: "#FF7139" }, // Firefox orange
        { name: "Internet Explorer", share: 9, color: "#1BA1E2" }, // IE blue
        { name: "Edge", share: 4, color: "#0078D4" }, // Edge blue
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2019: [
        { name: "Chrome", share: 64, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 16, color: "#007AFF" }, // Safari blue
        { name: "Firefox", share: 10, color: "#FF7139" }, // Firefox orange
        { name: "Edge", share: 5, color: "#0078D4" }, // Edge blue
        { name: "Internet Explorer", share: 3, color: "#1BA1E2" }, // IE blue
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2021: [
        { name: "Chrome", share: 65, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 19, color: "#007AFF" }, // Safari blue
        { name: "Edge", share: 8, color: "#0078D4" }, // Edge blue
        { name: "Firefox", share: 6, color: "#FF7139" }, // Firefox orange
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2023: [
        { name: "Chrome", share: 63, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 20, color: "#007AFF" }, // Safari blue
        { name: "Edge", share: 11, color: "#0078D4" }, // Edge blue
        { name: "Firefox", share: 4, color: "#FF7139" }, // Firefox orange
        { name: "Other", share: 2, color: "#FF69B4" }
    ],
    2025: [
        { name: "Chrome", share: 61, color: "#34A853" }, // Chrome green
        { name: "Safari", share: 22, color: "#007AFF" }, // Safari blue
        { name: "Edge", share: 13, color: "#0078D4" }, // Edge blue
        { name: "Firefox", share: 3, color: "#FF7139" }, // Firefox orange
        { name: "Other", share: 1, color: "#FF69B4" }
    ]
};

// Historical milestones and browser events
const historicalEvents = {
    1992: "Lynx text browser dominates early web access. Most users navigate the web through command-line interfaces, viewing only text content without images or complex formatting.",
    1993: "NCSA Mosaic revolutionizes the web by introducing the first popular graphical browser. Images can now be displayed inline with text, fundamentally changing how people experience the internet.",
    1994: "Netscape Navigator launches and quickly captures the market with superior features like progressive image loading, cookies, and JavaScript support. Marc Andreessen's team creates the foundation of modern web browsing.",
    1995: "Microsoft enters the browser wars with Internet Explorer 1.0, bundled free with Windows 95. This aggressive distribution strategy begins Microsoft's challenge to Netscape's dominance.",
    1996: "Internet Explorer 3.0 introduces CSS support and ActiveX controls, while Netscape Navigator 3.0 adds frames and plugins. The first Browser War intensifies as both companies race to add features.",
    1997: "IE 4.0 debuts with Dynamic HTML and better JavaScript, while Netscape struggles with Navigator 4.0's buggy release. Microsoft's bundling strategy starts paying dividends.",
    1998: "The Department of Justice files antitrust charges against Microsoft for bundling IE with Windows. Meanwhile, IE continues gaining market share through aggressive distribution tactics.",
    1999: "Internet Explorer 5.0 launches with XMLHttpRequest (enabling future AJAX), while Netscape open-sources their browser code, creating the Mozilla project. The tide turns decisively toward Microsoft.",
    2000: "IE 5.5 refines web standards support as Netscape Navigator's market share collapses. Many websites begin optimizing exclusively for Internet Explorer, accelerating IE's dominance.",
    2001: "Internet Explorer 6.0 ships with Windows XP and reaches 86% market share. With Netscape essentially defeated, Microsoft begins neglecting browser innovation for nearly half a decade.",
    2002: "Mozilla 1.0 is released as an open-source alternative, but gains little traction. Internet Explorer's dominance seems unshakeable as web development becomes IE-centric.",
    2003: "IE reaches its peak at 92% market share. Apple quietly releases Safari 1.0 for Mac OS X, introducing WebKit rendering engine that will later power Chrome and mobile browsers.",
    2004: "Mozilla Firefox 1.0 launches with tabbed browsing, popup blocking, and better security. The nimble browser begins chipping away at IE's complacency, rekindling browser innovation.",
    2005: "Firefox 1.5 gains momentum with automatic updates and extension support. Web developers frustrated with IE6's limitations begin advocating for Firefox adoption.",
    2006: "Firefox 2.0 introduces spell checking and session restore. IE's market share begins its slow decline as users discover Firefox's superior features and security.",
    2007: "Apple launches Safari for Windows, though with limited success. More significantly, the iPhone debuts with Mobile Safari, establishing WebKit as the mobile browser standard.",
    2008: "Google Chrome launches with the revolutionary V8 JavaScript engine, process isolation, and a minimalist design. The browser landscape shifts dramatically as Chrome introduces new performance standards.",
    2009: "Chrome 2.0 and 3.0 rapidly iterate with speed improvements and new features. Google's aggressive marketing and superior performance begin attracting users from both IE and Firefox.",
    2010: "Chrome 6.0 introduces auto-fill and HTML5 support. Internet Explorer 9 development begins as Microsoft realizes the threat, but Chrome's momentum becomes unstoppable.",
    2011: "Chrome 11.0 adds speech recognition while IE9 finally arrives with improved standards support. However, Chrome's faster release cycle and performance advantages continue driving adoption.",
    2012: "Chrome overtakes Internet Explorer to become the world's most popular browser. Google's combination of speed, simplicity, and integration with Google services proves irresistible to users.",
    2013: "Chrome reaches 43% market share with version 27.0, while IE begins its long decline. Firefox struggles to compete with Chrome's rapid development pace and performance improvements.",
    2014: "Chrome 35.0 dominates with over 45% market share. Microsoft announces the end of Internet Explorer development, planning a completely new browser for Windows 10.",
    2015: "Microsoft Edge launches with Windows 10, featuring the new EdgeHTML engine. However, Chrome's ecosystem advantages and cross-platform availability maintain its growth trajectory.",
    2016: "Chrome 50.0 approaches 55% market share as mobile browsing explodes. Safari benefits from iPhone growth while Firefox continues losing ground to Chrome's relentless innovation.",
    2017: "Chrome reaches 58% market share with version 59.0. The browser wars effectively end with Chrome's decisive victory, though Safari maintains strong mobile presence.",
    2018: "Chrome 68.0 marks all HTTP sites as 'not secure,' pushing HTTPS adoption. Microsoft begins rebuilding Edge on Chromium, acknowledging Chrome's technical superiority.",
    2019: "Chromium-based Edge launches, unifying browser engines. Chrome reaches 64% market share while privacy concerns about Google begin emerging among users and regulators.",
    2020: "Safari gains prominence as iPhone and iPad usage soars during the pandemic. Chrome maintains dominance but faces increased scrutiny over data collection and market power.",
    2021: "Chrome 90.0 continues leading with 65% share while Apple's App Tracking Transparency impacts web advertising. Browser privacy features become a key differentiator.",
    2022: "Chrome's market position remains strong despite growing privacy regulations. Firefox and Safari emphasize privacy protection as their main competitive advantage against Google.",
    2023: "Chrome maintains 63% market share with version 115.0 despite ongoing antitrust investigations and privacy concerns. The browser landscape stabilizes around Chrome's dominance.",
    2024: "AI integration begins transforming browsers as Chrome, Edge, and Safari add AI-powered features. The focus shifts from market share battles to AI capabilities and privacy protection.",
    2025: "Chrome holds steady at 61% market share while Safari grows to 22% through Apple ecosystem expansion. Browser competition now centers on AI features, privacy, and cross-device integration."
};

// Browser chronological order based on appearance/dominance
const browserChronology = [
    "Lynx",           // 1992 - First text browser
    "Mosaic",         // 1993 - First graphical browser
    "Netscape Navigator", // 1994 - First major commercial browser
    "Netscape",       // Later shortened name
    "Internet Explorer", // 1995 - Microsoft's entry
    "Firefox",        // 2004 - Mozilla's successor
    "Safari",         // 2003 - Apple's browser
    "Chrome",         // 2008 - Google's browser
    "Edge",           // 2015 - Microsoft's modern browser
    "Other"           // Catch-all for remaining browsers
];

// Function to get chronological sort order
function getChronologicalOrder(browserName) {
    const index = browserChronology.indexOf(browserName);
    return index === -1 ? browserChronology.length : index;
}

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
    
    // If exact match, return that data (sorted chronologically)
    if (browserData[year]) {
        return browserData[year].slice().sort((a, b) => 
            getChronologicalOrder(a.name) - getChronologicalOrder(b.name)
        );
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
    
    return interpolated.sort((a, b) => 
        getChronologicalOrder(a.name) - getChronologicalOrder(b.name)
    );
}