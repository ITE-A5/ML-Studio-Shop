/**
 * Collapse the Bootstrap navbar on mobile/tablet when 
 * Login or Register button is clicked, so the modal 
 * form is not covered by the dropdown menu.
 */
document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.querySelector('.btn-open-login');
    var registerBtn = document.querySelector('.btn-open-register');
    var navbarCollapse = document.getElementById('navbarNav');

    function collapseNavbar() {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', collapseNavbar);
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', collapseNavbar);
    }
});
