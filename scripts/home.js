document.addEventListener('DOMContentLoaded', function() {
    const configButton = document.getElementById('config-button');
    const configPopup = document.getElementById('config-popup');
    const closeButton = document.querySelector('.close');
    const toggleContainers = document.getElementById('toggle-containers');
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const toggleGithub = document.getElementById('toggle-github');
    const containers = document.querySelectorAll('.container');
    const sidebar = document.getElementById('barra-lateral');
    const githubLink = document.getElementById('github-link');

    configButton.addEventListener('click', function() {
        configPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        configPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == configPopup) {
            configPopup.style.display = 'none';
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

    toggleGithub.addEventListener('change', function() {
        githubLink.style.display = this.checked ? 'none' : 'block';
    });
});