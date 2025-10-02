document.addEventListener('DOMContentLoaded', () => {
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

    const redeemButtons = document.querySelectorAll('.task-button');
    redeemButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Points redeemed successfully! (Demo)');
            button.textContent = 'Redeemed';
            button.disabled = true;
        });
    });
});
