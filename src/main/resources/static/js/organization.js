document.addEventListener('DOMContentLoaded', () => {
    console.log('Organization page loaded successfully!');

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const backBtn = document.getElementById('backBtn');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'index';
        });
    }

    const joinButtons = document.querySelectorAll('.join-btn');
    joinButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You have joined this organization! (Demo)');
            button.textContent = 'Joined';
            button.disabled = true;
        });
    });

    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Displaying more information about this organization. (Demo)');
        });
    });
});
