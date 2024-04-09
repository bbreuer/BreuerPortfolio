document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-controller');
    // Select the SVG image element by its class or id
    const logoImage = document.querySelector('img.h-8'); // Assuming 'h-8' is unique enough, otherwise add an id to your img tag and select it here

    // Function to switch themes and save the current theme to localStorage
    function switchTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'cupcake') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Save theme to localStorage
            logoImage.src = "/computer-solid-white.svg"; // Change SVG to white version for dark theme
        } else {
            document.body.setAttribute('data-theme', 'cupcake');
            localStorage.setItem('theme', 'cupcake'); // Save theme to localStorage
            logoImage.src = "/computer-solid-black.svg"; // Change SVG to black version for cupcake theme
        }
    }

    // Function to apply the saved theme from localStorage if it exists
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            // Adjust the SVG source based on the saved theme
            if (savedTheme === 'dark') {
                logoImage.src = "/computer-solid-white.svg";
            } else {
                logoImage.src = "/computer-solid-black.svg";
            }
            // If using a toggle checkbox, adjust its 'checked' state based on the theme
            themeToggle.checked = savedTheme === 'dark';
        }
    }

    // Apply the saved theme when the page loads
    applySavedTheme();

    // Listen for changes on the theme toggle and switch themes accordingly
    themeToggle.addEventListener('change', switchTheme);
});
