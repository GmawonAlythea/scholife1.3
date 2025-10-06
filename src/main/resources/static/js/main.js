
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    initializeCharts();
    initializeEventListeners();
});

function initializeSidebar() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const app = document.getElementById('app');
    let isHoverExpanded = false;

    if (hamburgerBtn && sidebar && app) {
        hamburgerBtn.addEventListener('click', () => {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            app.classList.toggle('sidebar-collapsed', isCollapsed);
            isHoverExpanded = false;
        });

        // Default to collapsed
        sidebar.classList.add('collapsed');
        app.classList.add('sidebar-collapsed');

        sidebar.addEventListener('mouseenter', () => {
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                app.classList.remove('sidebar-collapsed');
                isHoverExpanded = true;
            }
        });

        sidebar.addEventListener('mouseleave', () => {
            if (isHoverExpanded) {
                sidebar.classList.add('collapsed');
                app.classList.add('sidebar-collapsed');
                isHoverExpanded = false;
            }
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (window.innerWidth <= 1024 &&
                sidebar &&
                hamburgerBtn &&
                target instanceof Node &&
                !sidebar.contains(target) &&
                !hamburgerBtn.contains(target) &&
                sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }
}


// Chart initialization
function initializeCharts() {
    // This Month Mini Chart
    const thisMonthCtx = document.getElementById('thisMonthChart');
    if (thisMonthCtx) {
        new Chart(thisMonthCtx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', '', '', ''],
                datasets: [{
                    data: [30, 45, 35, 55, 40, 60, 50],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { display: false },
                    y: { display: false }
                },
                elements: {
                    line: { borderWidth: 2 }
                }
            }
        });
    }

    // Last Month Mini Chart
    const lastMonthCtx = document.getElementById('lastMonthChart');
    if (lastMonthCtx) {
        new Chart(lastMonthCtx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', '', '', ''],
                datasets: [{
                    data: [25, 40, 30, 50, 35, 45, 40],
                    borderColor: '#9C27B0',
                    backgroundColor: 'rgba(156, 39, 176, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { display: false },
                    y: { display: false }
                },
                elements: {
                    line: { borderWidth: 2 }
                }
            }
        });
    }

    // Sales Overview Bar Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Ample',
                        data: [9, 5, 9, 7, 5, 8, 4],
                        backgroundColor: '#00BCD4',
                        borderRadius: 4,
                        maxBarThickness: 40,
                    },
                    {
                        label: 'Pixel',
                        data: [6, 3, 3, 5, 4, 6, 4],
                        backgroundColor: '#2196F3',
                        borderRadius: 4,
                        maxBarThickness: 40,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: '#757575',
                            font: { size: 12 }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 12,
                        grid: {
                            color: '#E0E0E0',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#757575',
                            font: { size: 12 },
                            stepSize: 3
                        }
                    }
                },
                elements: {
                    bar: {
                        borderSkipped: false,
                    }
                }
            }
        });
    }

    // Visitors Donut Chart
    const visitorsCtx = document.getElementById('visitorsChart');
    if (visitorsCtx) {
        new Chart(visitorsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Mobile', 'Desktop', 'Tablet'],
                datasets: [{
                    data: [45, 35, 20],
                    backgroundColor: [
                        '#2196F3',
                        '#9C27B0',
                        '#009688'
                    ],
                    borderWidth: 0,
                    cutout: '70%',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

function initializeEventListeners() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add hover effects for nav items
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(4px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });

    // Add click animations to cards
    const cards = document.querySelectorAll('.stat-card, .chart-card, .newsletter-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        });
    });
}
