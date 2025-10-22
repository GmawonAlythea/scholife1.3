document.addEventListener('DOMContentLoaded', () => {
    const tutorialStepsContainer = document.getElementById('tutorial-steps');
    const nextStepBtn = document.getElementById('next-step-btn');
    let currentStep = 0;

    const steps = [
        {
            title: 'Welcome to Scholife!',
            description: 'This is your dashboard, your central hub for everything at school.',
            element: '.main-content',
        },
        {
            title: 'Navigate with the Sidebar',
            description: 'Use the sidebar to access different sections like Announcements and Events.',
            element: '#sidebar',
        },
        {
            title: 'Stay Updated with Announcements',
            description: 'Check the Announcements page for the latest news and updates.',
            element: '.nav-item:nth-child(1) .nav-link',
        },
        {
            title: 'Manage Your Events',
            description: 'Create and sign up for events on the Events page.',
            element: '.nav-item:nth-child(3) .nav-link',
        },
        {
            title: 'You are all set!',
            description: 'Enjoy using Scholife!',
            element: '.main-content',
        }
    ];

    function showStep(stepIndex) {
        // Remove previous highlight
        const highlighted = document.querySelector('.tutorial-highlight');
        if (highlighted) {
            highlighted.classList.remove('tutorial-highlight');
        }

        const step = steps[stepIndex];
        tutorialStepsContainer.innerHTML = `<h3>${step.title}</h3><p>${step.description}</p>`;

        const element = document.querySelector(step.element);
        if (element) {
            element.classList.add('tutorial-highlight');
        }

        if (stepIndex === steps.length - 1) {
            nextStepBtn.textContent = 'Finish';
        }
    }

    nextStepBtn.addEventListener('click', () => {
        currentStep++;
        if (currentStep < steps.length) {
            showStep(currentStep);
        } else {
            // End of tutorial
            const highlighted = document.querySelector('.tutorial-highlight');
            if (highlighted) {
                highlighted.classList.remove('tutorial-highlight');
            }
            tutorialStepsContainer.innerHTML = '<h3>You have completed the tutorial!</h3>';
            nextStepBtn.style.display = 'none';
        }
    });

    // Start the tutorial
    showStep(currentStep);
});
