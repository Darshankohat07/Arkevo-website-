// Sidebar Toggle
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('sidebarToggle');
        
        toggleBtn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('mobile-open');
            } else {
                sidebar.classList.toggle('collapsed');
            }
        });

        // Number Counter Animation
        const counters = document.querySelectorAll('.kpi-value');
        const speed = 50;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const currentText = counter.innerText.replace(/[^0-9.]/g, '');
                const count = +currentText;
                
                const inc = target / speed;

                if (count < target) {
                    let next = count + inc;
                    if(next > target) next = target;
                    
                    let formatted = '';
                    if (target % 1 !== 0) {
                        formatted = next.toFixed(1);
                    } else {
                        formatted = Math.ceil(next).toLocaleString();
                    }
                    
                    const prefix = counter.getAttribute('data-prefix') || '';
                    const suffix = counter.getAttribute('data-suffix') || '';
                    
                    counter.innerText = prefix + formatted + suffix;
                    setTimeout(updateCount, 20);
                } else {
                    let formatted = target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString();
                    const prefix = counter.getAttribute('data-prefix') || '';
                    const suffix = counter.getAttribute('data-suffix') || '';
                    counter.innerText = prefix + formatted + suffix;
                }
            };
            setTimeout(updateCount, 300);
        });

        // Chart.js Default Configs
        Chart.defaults.color = '#8899aa';
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.05)';
        
        // Sparklines
        const sparklineOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
            elements: { point: { radius: 0 }, line: { tension: 0.4, borderWidth: 2 } }
        };

        new Chart(document.getElementById('sparklineSpend'), {
            type: 'line',
            data: { labels: ['1','2','3','4','5','6','7'], datasets: [{ data: [10, 15, 12, 18, 24, 20, 25], borderColor: '#8899aa' }] },
            options: sparklineOptions
        });
        
        new Chart(document.getElementById('sparklineRevenue'), {
            type: 'line',
            data: { labels: ['1','2','3','4','5','6','7'], datasets: [{ data: [30, 45, 40, 55, 70, 65, 80], borderColor: '#00E5FF' }] },
            options: sparklineOptions
        });
        
        new Chart(document.getElementById('sparklineAcos'), {
            type: 'line',
            data: { labels: ['1','2','3','4','5','6','7'], datasets: [{ data: [35, 32, 34, 30, 28, 27, 25], borderColor: '#00E676' }] },
            options: sparklineOptions
        });

        new Chart(document.getElementById('sparklineRoas'), {
            type: 'line',
            data: { labels: ['1','2','3','4','5','6','7'], datasets: [{ data: [2.5, 2.8, 3.0, 3.2, 3.5, 3.8, 3.9], borderColor: '#00E5FF' }] },
            options: sparklineOptions
        });

        // Main Chart (Dual Axis)
        const ctxMain = document.getElementById('mainChart').getContext('2d');
        const gradientRev = ctxMain.createLinearGradient(0, 0, 0, 350);
        gradientRev.addColorStop(0, 'rgba(0, 229, 255, 0.2)');
        gradientRev.addColorStop(1, 'rgba(0, 229, 255, 0)');

        new Chart(ctxMain, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Revenue ($)',
                        data: [250000, 270000, 310000, 290000, 340000, 380000, 420000, 410000, 450000, 470000, 480000, 487920],
                        borderColor: '#00E5FF',
                        backgroundColor: gradientRev,
                        fill: true,
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Ad Spend ($)',
                        data: [85000, 92000, 105000, 98000, 110000, 120000, 125000, 120000, 125000, 128000, 122000, 124580],
                        borderColor: '#8899aa',
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } },
                    tooltip: { backgroundColor: 'rgba(30, 45, 61, 0.9)', titleColor: '#fff', bodyColor: '#ccc', padding: 12, cornerRadius: 8, displayColors: true }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Revenue' } },
                    y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Spend' } }
                }
            }
        });

        // ACoS Trend Chart
        const ctxAcos = document.getElementById('acosChart').getContext('2d');
        const gradientAcos = ctxAcos.createLinearGradient(0, 0, 0, 280);
        gradientAcos.addColorStop(0, 'rgba(0, 230, 118, 0.2)');
        gradientAcos.addColorStop(1, 'rgba(0, 230, 118, 0)');

        new Chart(ctxAcos, {
            type: 'line',
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'ACoS (%)',
                    data: [38.5, 35.2, 32.1, 29.8, 27.4, 25.6],
                    borderColor: '#00E676',
                    backgroundColor: gradientAcos,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { min: 20, max: 45, ticks: { callback: (val) => val + '%' } }
                }
            }
        });

        // Doughnut Chart
        new Chart(document.getElementById('doughnutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display', 'Video'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#00E5FF', '#00B8D4', '#1e2d3d', '#5a6b7c'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { position: 'right', labels: { color: '#8899aa', usePointStyle: true, padding: 20 } }
                }
            }
        });

        // Bar Chart (Platform Split)
        new Chart(document.getElementById('barChart'), {
            type: 'bar',
            data: {
                labels: ['Amazon', 'Walmart'],
                datasets: [
                    { label: 'Revenue ($K)', data: [420, 68], backgroundColor: '#00E5FF' },
                    { label: 'Spend ($K)', data: [110, 14], backgroundColor: '#1e2d3d' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top', labels: { usePointStyle: true } } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                    x: { grid: { display: false } }
                }
            }
        });
