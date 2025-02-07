document.addEventListener('DOMContentLoaded', function() {
    const configButton = document.getElementById('config-button');
    const configPopup = document.getElementById('config-popup');
    const closeButton = document.querySelector('.close');
    const toggleContainers = document.getElementById('toggle-containers');
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const containers = document.querySelectorAll('.container');
    const sidebar = document.getElementById('barra-lateral');

    configButton.addEventListener('click', function() {
        configPopup.classList.add('show');
    });

    closeButton.addEventListener('click', function() {
        configPopup.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target == configPopup) {
            configPopup.classList.remove('show');
        }
    });

    toggleContainers.addEventListener('change', function() {
        containers.forEach(container => {
            container.style.display = this.checked ? 'none' : 'flex';
        });
    });

    toggleSidebar.addEventListener('change', function() {
        sidebar.style.display = this.checked ? 'none' : 'block';
    });
});