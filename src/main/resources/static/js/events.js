document.addEventListener('DOMContentLoaded', () => {
    const createEventBtn = document.getElementById('createEventBtn');
    const createEventModal = document.getElementById('createEventModal');
    const closeBtn = document.querySelector('.modal-content .close-btn');
    const createEventForm = document.getElementById('createEventForm');
    const eventsList = document.getElementById('eventsList');

    // Retrieve user role from local storage
    const userRole = localStorage.getItem('userRole');
    const userIsAdmin = userRole === 'admin';

    if (userIsAdmin) {
        if (createEventBtn) createEventBtn.style.display = 'block';
    }

    if (createEventBtn) {
        createEventBtn.addEventListener('click', () => {
            if (createEventModal) createEventModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (createEventModal) createEventModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == createEventModal) {
            createEventModal.style.display = 'none';
        }
    });

    if (createEventForm) {
        createEventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Logic to create an event would go here
            if (createEventModal) createEventModal.style.display = 'none';
        });
    }

    // Dummy data for events
    const events = [
        { title: 'Tech Conference 2024', date: '2024-08-15', description: 'Annual tech conference.' },
        { title: 'Art Exhibition', date: '2024-09-01', description: 'Exhibition of modern art.' },
    ];

    function renderEvents() {
        if (!eventsList) return;
        eventsList.innerHTML = '';
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';

            const buttonHtml = userIsAdmin
                ? ''
                : '<button class="signup-btn">Sign Up</button>';

            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>${event.description}</p>
                ${buttonHtml}
            `;
            eventsList.appendChild(eventCard);
        });
    }

    renderEvents();

    if (eventsList) {
        eventsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('signup-btn')) {
                const btn = e.target;
                if (btn.textContent === 'Sign Up') {
                    btn.textContent = 'Signed Up';
                    btn.classList.add('signed-up');
                } else {
                    btn.textContent = 'Sign Up';
                    btn.classList.remove('signed-up');
                }
            }
        });
    }
});
