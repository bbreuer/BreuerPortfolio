document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.getElementById('theme-toggle');
        const body = document.body;

        toggle.addEventListener('change', function() {
            // Check if the toggle is checked
            if (toggle.checked) {
                // Set data-theme attribute to dark if checked
                body.setAttribute('data-theme', 'dark');
            } else {
                // Set data-theme attribute to cupcake if not checked
                body.setAttribute('data-theme', 'cupcake');
            }
        });

        // Initial theme check
        if (body.getAttribute('data-theme') === 'dark') {
            toggle.checked = true;
        } else {
            body.setAttribute('data-theme', 'cupcake');
            toggle.checked = false;
        }
    });
