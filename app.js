class BrowserWarsApp {
    constructor() {
        this.currentYear = 1992;
        this.isPlaying = false;
        this.animationSpeed = 120000; // 2 minutes total (120 seconds)
        this.totalYears = 2025 - 1992;
        this.stepInterval = this.animationSpeed / (this.totalYears * 4); // Quarter-year steps
        
        this.svg = d3.select('#pie-chart');
        this.width = 600;
        this.height = 600;
        this.radius = Math.min(this.width, this.height) / 2 - 40;
        
        this.setupChart();
        this.setupControls();
        this.updateVisualization();
    }
    
    setupChart() {
        // Create main group and center it
        this.chartGroup = this.svg
            .append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        
        // Create pie generator
        this.pie = d3.pie()
            .value(d => d.share)
            .sort(null);
        
        // Create arc generator
        this.arc = d3.arc()
            .innerRadius(0)
            .outerRadius(this.radius);
        
        // Create arc generator for labels
        this.labelArc = d3.arc()
            .innerRadius(this.radius * 0.7)
            .outerRadius(this.radius * 0.7);
    }
    
    setupControls() {
        const playPauseBtn = document.getElementById('play-pause-btn');
        const timelineScubber = document.getElementById('timeline-scrubber');
        
        playPauseBtn.addEventListener('click', () => {
            this.togglePlayPause();
        });
        
        timelineScubber.addEventListener('input', (e) => {
            this.currentYear = parseFloat(e.target.value);
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
            this.currentYear += 0.25; // Quarter-year steps
            
            if (this.currentYear > 2025) {
                this.currentYear = 1992;
            }
            
            document.getElementById('timeline-scrubber').value = this.currentYear;
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
        const data = interpolateData(this.currentYear);
        const yearDisplay = Math.floor(this.currentYear);
        
        // Update year display
        document.getElementById('current-year').textContent = yearDisplay;
        
        // Update historical note
        this.updateHistoricalNote(yearDisplay);
        
        // Update pie chart
        this.updatePieChart(data);
        
        // Update legend
        this.updateLegend(data);
    }
    
    updatePieChart(data) {
        const pieData = this.pie(data);
        
        // Bind data to path elements
        const arcs = this.chartGroup.selectAll('.arc')
            .data(pieData, d => d.data.name);
        
        // Enter new arcs
        const enterArcs = arcs.enter()
            .append('g')
            .attr('class', 'arc');
        
        // Add paths to new arcs
        enterArcs.append('path')
            .attr('fill', d => d.data.color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
        
        // Add labels to new arcs
        enterArcs.append('text')
            .attr('class', 'arc-label')
            .attr('text-anchor', 'middle')
            .attr('font-family', 'Arial, sans-serif')
            .attr('font-size', '12px')
            .attr('font-weight', 'bold')
            .attr('fill', '#333');
        
        // Update all arcs (enter + existing)
        const allArcs = arcs.merge(enterArcs);
        
        // Animate path transitions
        allArcs.select('path')
            .transition()
            .duration(200)
            .attr('d', this.arc)
            .attr('fill', d => d.data.color);
        
        // Update labels
        allArcs.select('text')
            .transition()
            .duration(200)
            .attr('transform', d => {
                const centroid = this.labelArc.centroid(d);
                return `translate(${centroid})`;
            })
            .text(d => {
                return d.data.share > 5 ? `${d.data.name}\n${d.data.share.toFixed(1)}%` : '';
            })
            .style('opacity', d => d.data.share > 5 ? 1 : 0);
        
        // Remove old arcs
        arcs.exit()
            .transition()
            .duration(200)
            .style('opacity', 0)
            .remove();
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