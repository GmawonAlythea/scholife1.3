document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const app = document.getElementById('app');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // --- Sidebar Interaction Logic ---

    const isDesktop = () => window.innerWidth > 1024;

    // Pinned state toggled by the hamburger button
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            if (isDesktop()) {
                // On desktop, toggle the pinned state
                const isPinned = app.classList.toggle('sidebar-pinned');
                if (isPinned) {
                    app.classList.remove('sidebar-collapsed');
                    sidebar.classList.remove('collapsed');
                } else {
                    app.classList.add('sidebar-collapsed');
                    sidebar.classList.add('collapsed');
                }
            } else {
                // On mobile, toggle the slide-in/out state
                sidebar.classList.toggle('open');
            }
        });
    }

    // Hover functionality for unpinned state on desktop
    if (sidebar && app) {
        sidebar.addEventListener('mouseenter', () => {
            if (isDesktop() && !app.classList.contains('sidebar-pinned')) {
                app.classList.remove('sidebar-collapsed');
                sidebar.classList.remove('collapsed');
            }
        });

        sidebar.addEventListener('mouseleave', () => {
            if (isDesktop() && !app.classList.contains('sidebar-pinned')) {
                app.classList.add('sidebar-collapsed');
                sidebar.classList.add('collapsed');
            }
        });
    }

    // --- Other Sidebar Logic (Dropdowns) ---

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const arrow = link.querySelector('.nav-arrow');
        if (arrow) {
            link.addEventListener('click', (e) => {
                if (e.target.closest('.nav-arrow')) {
                    e.preventDefault();
                }
                const parentItem = link.parentElement;
                if (parentItem.classList.contains('has-submenu')) {
                    parentItem.classList.toggle('active');
                }
            });
        }
    });
});
