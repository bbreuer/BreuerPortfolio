document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the theme
    function applyTheme(theme) {
        body.setAttribute('data-theme', theme);
        toggle.checked = (theme === 'dark');
    }

    // Event listener for changing the theme
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            // Set data-theme attribute to dark if checked
            localStorage.setItem('theme', 'dark');  // Save preference to localStorage
            applyTheme('dark');
        } else {
            // Set data-theme attribute to cupcake if not checked
            localStorage.setItem('theme', 'cupcake');  // Save preference to localStorage
            applyTheme('cupcake');
        }
    });

    // Check the saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem('theme') || 'cupcake';
    applyTheme(savedTheme);
});
