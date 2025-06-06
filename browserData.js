// Browser market share data from 1992-2025
// Data sources: StatCounter, NetMarketShare, W3Counter historical data

// Centralized browser configuration
const BROWSERS = {
    LYNX: { name: "Lynx", color: "#808080" },
    MOSAIC: { name: "Mosaic", color: "#8A2BE2" },
    NETSCAPE: { name: "Netscape", color: "#008B8B" },
    IE: { name: "Internet Explorer", color: "#1BA1E2" },
    FIREFOX: { name: "Firefox", color: "#FF7139" },
    SAFARI: { name: "Safari", color: "#007AFF" },
    CHROME: { name: "Chrome", color: "#34A853" },
    EDGE: { name: "Edge", color: "#0078D4" },
    OTHER: { name: "Other", color: "#FF69B4" }
};

// Helper function to create browser data entry
function browser(type, share) {
    return { name: BROWSERS[type].name, share, color: BROWSERS[type].color };
}

const browserData = {
    1992: [
        browser('MOSAIC', 60),
        browser('LYNX', 25),
        browser('OTHER', 15)
    ],
    1995: [
        browser('NETSCAPE', 80),
        browser('IE', 3),
        browser('MOSAIC', 10),
        browser('OTHER', 7)
    ],
    1997: [
        browser('NETSCAPE', 72),
        browser('IE', 20),
        browser('OTHER', 8)
    ],
    1999: [
        browser('IE', 53),
        browser('NETSCAPE', 40),
        browser('OTHER', 7)
    ],
    2001: [
        browser('IE', 86),
        browser('NETSCAPE', 10),
        browser('OTHER', 4)
    ],
    2003: [
        browser('IE', 92),
        browser('NETSCAPE', 4),
        browser('OTHER', 4)
    ],
    2005: [
        browser('IE', 85),
        browser('FIREFOX', 9),
        browser('SAFARI', 2),
        browser('OTHER', 4)
    ],
    2007: [
        browser('IE', 77),
        browser('FIREFOX', 16),
        browser('SAFARI', 4),
        browser('OTHER', 3)
    ],
    2009: [
        browser('IE', 65),
        browser('FIREFOX', 23),
        browser('CHROME', 4),
        browser('SAFARI', 4),
        browser('OTHER', 4)
    ],
    2011: [
        browser('IE', 44),
        browser('FIREFOX', 30),
        browser('CHROME', 20),
        browser('SAFARI', 4),
        browser('OTHER', 2)
    ],
    2013: [
        browser('CHROME', 43),
        browser('IE', 30),
        browser('FIREFOX', 20),
        browser('SAFARI', 5),
        browser('OTHER', 2)
    ],
    2015: [
        browser('CHROME', 53),
        browser('IE', 19),
        browser('FIREFOX', 16),
        browser('SAFARI', 10),
        browser('OTHER', 2)
    ],
    2017: [
        browser('CHROME', 58),
        browser('SAFARI', 14),
        browser('FIREFOX', 13),
        browser('IE', 9),
        browser('EDGE', 4),
        browser('OTHER', 2)
    ],
    2019: [
        browser('CHROME', 64),
        browser('SAFARI', 16),
        browser('FIREFOX', 10),
        browser('EDGE', 5),
        browser('IE', 3),
        browser('OTHER', 2)
    ],
    2021: [
        browser('CHROME', 65),
        browser('SAFARI', 19),
        browser('EDGE', 8),
        browser('FIREFOX', 6),
        browser('OTHER', 2)
    ],
    2023: [
        browser('CHROME', 63),
        browser('SAFARI', 20),
        browser('EDGE', 11),
        browser('FIREFOX', 4),
        browser('OTHER', 2)
    ],
    2025: [
        browser('CHROME', 61),
        browser('SAFARI', 22),
        browser('EDGE', 13),
        browser('FIREFOX', 3),
        browser('OTHER', 1)
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
    BROWSERS.LYNX.name,           // 1992 - First text browser
    BROWSERS.MOSAIC.name,         // 1993 - First graphical browser
    BROWSERS.NETSCAPE.name,       // 1994 - Netscape (unified name)
    BROWSERS.IE.name,             // 1995 - Microsoft's entry
    BROWSERS.FIREFOX.name,        // 2004 - Mozilla's successor
    BROWSERS.SAFARI.name,         // 2003 - Apple's browser
    BROWSERS.CHROME.name,         // 2008 - Google's browser
    BROWSERS.EDGE.name,           // 2015 - Microsoft's modern browser
    BROWSERS.OTHER.name           // Catch-all for remaining browsers
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