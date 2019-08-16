let isSidebarOpen = false;

const html = document.querySelector('html');

// open sidebar on large screens
document.addEventListener("DOMContentLoaded", function () {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth > 993) {
        openSidebar();
    }
});

function openSidebar() {
    html.classList.add('sidebar-is-open');
    isSidebarOpen = true;
}

function closeSidebar() {
    html.classList.remove('sidebar-is-open');
    isSidebarOpen = false;
}

// Toggle button
document.querySelector('#js-toggle-button').addEventListener('click', function () {
    if (isSidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
});
