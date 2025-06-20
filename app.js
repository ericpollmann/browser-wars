class BrowserWarsApp {
    constructor() {
        this.currentYear = 1992;
        this.currentMonth = 0; // 0-11 for Jan-Dec
        this.currentDay = 1; // 1-31 for day of month
        this.isPlaying = false;
        this.totalYears = 2025 - 1992; // 33 years
        this.totalDays = this.totalYears * 365.25; // ~12,045 days total (accounting for leap years)
        this.dayDuration = 15; // ~15ms per day for smooth animation
        this.animationSpeed = this.totalDays * this.dayDuration; // Total duration: ~3 minutes
        this.stepInterval = this.dayDuration; // Daily steps
        
        this.monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        // Browser icon mapping - all from Iconduck browser-logos set
        this.browserIcons = {
            'Chrome': 'icons/chrome.png',
            'Firefox': 'icons/firefox.png',
            'Safari': 'icons/safari.png',
            'Internet Explorer': 'icons/ie.png',
            'Edge': 'icons/edge.png',
            'Netscape Navigator': 'icons/netscape.png',
            'Netscape': 'icons/netscape.png',
            'Mosaic': 'icons/mosaic.png',
            'Lynx': 'icons/lynx.png',
            'Other': 'icons/other.png'
        };
        
        this.svg = d3.select('#pie-chart');
        this.width = 600;
        this.height = 600;
        this.radius = Math.min(this.width, this.height) / 2 - 40;
        
        this.setupChart();
        this.setupControls();
        this.setupTimeline();
        this.updateVisualization();
    }
    
    setupChart() {
        // Create main group and center it
        this.chartGroup = this.svg
            .append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        
        // Browser chronological order (matching browserData.js)
        this.browserChronology = [
            "Lynx",           // 1992 - First text browser
            "Mosaic",         // 1993 - First graphical browser
            "Netscape",       // 1994 - Netscape (unified name)
            "Internet Explorer", // 1995 - Microsoft's entry
            "Firefox",        // 2004 - Mozilla's successor
            "Safari",         // 2003 - Apple's browser
            "Chrome",         // 2008 - Google's browser
            "Edge",           // 2015 - Microsoft's modern browser
            "Other"           // Catch-all for remaining browsers
        ];
        
        // Create pie generator with chronological sorting
        this.pie = d3.pie()
            .value(d => d.share)
            .sort((a, b) => this.getChronologicalOrder(a.name) - this.getChronologicalOrder(b.name));
        
        // Create arc generator
        this.arc = d3.arc()
            .innerRadius(0)
            .outerRadius(this.radius);
        
        // Create arc generator for labels
        this.labelArc = d3.arc()
            .innerRadius(this.radius * 0.7)
            .outerRadius(this.radius * 0.7);
    }
    
    getChronologicalOrder(browserName) {
        const index = this.browserChronology.indexOf(browserName);
        return index === -1 ? this.browserChronology.length : index;
    }
    
    setupControls() {
        const playPauseBtn = document.getElementById('play-pause-btn');
        const timelineScubber = document.getElementById('timeline-scrubber');
        
        playPauseBtn.addEventListener('click', () => {
            this.togglePlayPause();
        });
        
        timelineScubber.addEventListener('input', (e) => {
            const yearFloat = parseFloat(e.target.value);
            this.currentYear = Math.floor(yearFloat);
            const yearFraction = yearFloat - this.currentYear;
            this.currentMonth = Math.floor(yearFraction * 12);
            const monthFraction = (yearFraction * 12) - this.currentMonth;
            this.currentDay = Math.floor(monthFraction * 30) + 1; // Approximate 30 days per month
            this.updateVisualization();
            if (this.isPlaying) {
                this.pause();
            }
        });
        
        // Handle mouse events for scrubber
        timelineScubber.addEventListener('mousedown', () => {
            if (this.isPlaying) {
                this.pause();
            }
        });
    }
    
    setupTimeline() {
        const timelineMarks = document.getElementById('timeline-marks');
        
        if (!timelineMarks) {
            console.error('Timeline marks element not found');
            return;
        }
        
        const startYear = 1992;
        const endYear = 2025;
        const totalYears = endYear - startYear;
        
        // Clear any existing marks
        timelineMarks.innerHTML = '';
        
        console.log('Creating timeline marks...');
        
        // Create marks only for major years (every 5 years + end year)
        for (let year = startYear; year <= endYear; year++) {
            // Only create marks for every 5th year or the end year
            if ((year - startYear) % 5 === 0 || year === endYear) {
                const position = ((year - startYear) / totalYears) * 100;
                
                // Create major mark element
                const mark = document.createElement('div');
                mark.className = 'timeline-mark major';
                mark.style.left = `${position}%`;
                mark.style.backgroundColor = '#666666'; // Grey color
                mark.style.height = '12px';
                mark.style.width = '3px';
                
                // Add label
                const label = document.createElement('div');
                label.className = 'timeline-mark-label';
                label.textContent = year;
                label.style.left = `${position}%`;
                label.style.color = '#333333'; // Dark grey text for visibility
                timelineMarks.appendChild(label);
                timelineMarks.appendChild(mark);
            }
        }
        
        console.log(`Created ${timelineMarks.children.length} timeline elements`);
    }
    
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    play() {
        this.isPlaying = true;
        document.getElementById('play-pause-btn').innerHTML = '⏸';
        
        this.animationInterval = setInterval(() => {
            this.currentDay++;
            
            // Advance month when day exceeds approximate month length
            if (this.currentDay > 30) {
                this.currentDay = 1;
                this.currentMonth++;
            }
            
            if (this.currentMonth >= 12) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            
            if (this.currentYear > 2025) {
                this.currentYear = 1992;
                this.currentMonth = 0;
                this.currentDay = 1;
            }
            
            // Update scrubber value (year + month + day fractions)
            const dayFraction = (this.currentDay - 1) / 30;
            const monthFraction = (this.currentMonth + dayFraction) / 12;
            const scrubberValue = this.currentYear + monthFraction;
            document.getElementById('timeline-scrubber').value = scrubberValue;
            this.updateVisualization();
        }, this.stepInterval);
    }
    
    pause() {
        this.isPlaying = false;
        document.getElementById('play-pause-btn').innerHTML = '▶';
        
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
    }
    
    updateVisualization() {
        const dayFraction = (this.currentDay - 1) / 30;
        const monthFraction = (this.currentMonth + dayFraction) / 12;
        const yearFloat = this.currentYear + monthFraction;
        const data = interpolateData(yearFloat);
        
        // Update year and month display
        document.getElementById('current-year').textContent = this.currentYear;
        document.getElementById('current-month').textContent = this.monthNames[this.currentMonth];
        
        // Update historical note
        this.updateHistoricalNote(this.currentYear);
        
        // Update pie chart
        this.updatePieChart(data);
        
        // Update legend
        this.updateLegend(data);
    }
    
    updatePieChart(data) {
        // Always use instant updates for consistent behavior
        this.rebuildPieChart(data);
    }
    
    rebuildPieChart(data) {
        const pieData = this.pie(data);
        
        // Clear all existing arcs instantly
        this.chartGroup.selectAll('.arc').remove();
        
        // Create new arcs from scratch
        const arcs = this.chartGroup.selectAll('.arc')
            .data(pieData)
            .enter()
            .append('g')
            .attr('class', 'arc');
        
        // Add paths
        arcs.append('path')
            .attr('d', this.arc)
            .attr('fill', d => d.data.color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
        
        // Add browser icons
        arcs.append('image')
            .attr('class', 'arc-icon')
            .attr('width', 32)
            .attr('height', 32)
            .attr('href', d => this.browserIcons[d.data.name] || 'icons/other.png')
            .attr('transform', d => {
                const centroid = this.arc.centroid(d);
                return `translate(${centroid[0] - 16}, ${centroid[1] - 16})`;
            })
            .style('opacity', d => d.data.share > 3 ? 1 : 0);

        // Add browser name labels
        arcs.append('text')
            .attr('class', 'arc-label-name')
            .attr('text-anchor', 'middle')
            .attr('font-family', 'Arial, sans-serif')
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .attr('fill', '#fff')
            .attr('stroke', '#000')
            .attr('stroke-width', '0.5px')
            .attr('transform', d => {
                const centroid = this.labelArc.centroid(d);
                return `translate(${centroid[0]}, ${centroid[1] + 15})`;
            })
            .text(d => d.data.share > 8 ? d.data.name : '')
            .style('opacity', d => d.data.share > 8 ? 1 : 0);

        // Add percentage labels (larger and more prominent)
        arcs.append('text')
            .attr('class', 'arc-label-percent')
            .attr('text-anchor', 'middle')
            .attr('font-family', 'Arial, sans-serif')
            .attr('font-size', '16px')
            .attr('font-weight', 'bold')
            .attr('fill', '#fff')
            .attr('stroke', '#000')
            .attr('stroke-width', '0.5px')
            .attr('transform', d => {
                const centroid = this.labelArc.centroid(d);
                return `translate(${centroid[0]}, ${centroid[1] + 32})`;
            })
            .text(d => d.data.share > 3 ? `${d.data.share.toFixed(1)}%` : '')
            .style('opacity', d => d.data.share > 3 ? 1 : 0);
    }
    
    
    updateLegend(data) {
        const legend = d3.select('#legend');
        
        // Clear existing legend
        legend.selectAll('*').remove();
        
        const legendItems = legend.selectAll('.legend-item')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'legend-item');
        
        legendItems.append('div')
            .attr('class', 'legend-color')
            .style('background-color', d => d.color);
        
        legendItems.append('span')
            .attr('class', 'legend-label')
            .text(d => `${d.name}: ${d.share.toFixed(1)}%`);
    }
    
    updateHistoricalNote(year) {
        const note = historicalEvents[year];
        const noteElement = document.getElementById('historical-note');
        
        if (note) {
            noteElement.textContent = note;
            noteElement.style.opacity = '1';
            noteElement.style.transform = 'translateY(0)';
        } else {
            noteElement.style.opacity = '0';
            noteElement.style.transform = 'translateY(10px)';
        }
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BrowserWarsApp();
});