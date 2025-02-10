document.addEventListener('DOMContentLoaded', function() {
    const configButton = document.getElementById('config-button');
    const configPopup = document.getElementById('config-popup');
    const closeButton = document.querySelector('.close');
    const toggleContainers = document.getElementById('toggle-containers');
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const containers = document.querySelectorAll('.container');
    const sidebar = document.getElementById('barra-lateral');

    function loadSettings() {
        const containersHidden = localStorage.getItem('containersHidden') === 'true';
        const sidebarHidden = localStorage.getItem('sidebarHidden') === 'true';

        toggleContainers.checked = containersHidden;
        toggleSidebar.checked = sidebarHidden;

        containers.forEach(container => {
            container.style.display = containersHidden ? 'none' : 'flex';
        });

        sidebar.style.display = sidebarHidden ? 'none' : 'block';
    }

    function saveSettings() {
        localStorage.setItem('containersHidden', toggleContainers.checked);
        localStorage.setItem('sidebarHidden', toggleSidebar.checked);
    }

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
        saveSettings();
    });

    toggleSidebar.addEventListener('change', function() {
        sidebar.style.display = this.checked ? 'none' : 'block';
        saveSettings();
    });

    loadSettings();
});