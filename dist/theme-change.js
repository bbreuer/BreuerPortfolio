document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const layer1 = document.querySelector('.layer1'); // Reference to the first layer element
    const layer2 = document.querySelector('.layer2'); // Reference to the second layer element

    // Function to apply the theme
    function applyTheme(theme) {
        body.setAttribute('data-theme', theme);
        toggle.checked = (theme === 'dark');

        // Update class list for layer1
        if (theme === 'dark') {
            layer1.classList.add('layer1-dark');
            layer1.classList.remove('layer1');
            layer2.classList.add('layer2-dark');
            layer2.classList.remove('layer2');
        } else {
            layer1.classList.remove('layer1-dark');
            layer1.classList.add('layer1');
            layer2.classList.remove('layer2-dark');
            layer2.classList.add('layer2');
        }
    }

    // Event listener for changing the theme
    toggle.addEventListener('change', function() {
        const theme = toggle.checked ? 'dark' : 'cupcake';
        localStorage.setItem('theme', theme);  // Save preference to localStorage
        applyTheme(theme);
    });

    // Check the saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem('theme') || 'cupcake';  // Default to 'cupcake' if nothing is saved
    applyTheme(savedTheme);
});
