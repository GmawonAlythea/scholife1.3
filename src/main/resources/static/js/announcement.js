document.addEventListener('DOMContentLoaded', () => {
    console.log('Announcement page loaded successfully!');

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'index';
        });
    }

    const backBttn = document.getElementById('backBttn');
    if (backBttn) {
        backBttn.addEventListener('click', () => {
            window.location.href = 'index';
        });
    }

    const signUp = document.getElementById('signUp');
    if (signUp) {
        backBttn.addEventListener('click', () => {
            window.location.href = 'index';
        });
    }

    const rsvpButton = document.querySelector('.announcement-action-btn');
    if (rsvpButton) {
        rsvpButton.addEventListener('click', () => {
            alert('Thank you for your RSVP! This is a demo and the data is not saved.');
            rsvpButton.textContent = 'RSVPed';
            rsvpButton.disabled = true;
            rsvpButton.style.backgroundColor = '#9E9E9E';
            rsvpButton.style.cursor = 'not-allowed';
        });
    }
});
