let isSidebarOpen = false;

const html = document.querySelector('html');

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth > 993) {
    openSidebar();
}

// open sidebar on large screens
// document.addEventListener("DOMContentLoaded", function () {
//
// });

document.querySelector('#js-toggle-button')
    .addEventListener('click', toggleSidebar);
document.querySelector('.menu-toggle')
    .addEventListener('click', toggleSidebar);

// Toggle button
function toggleSidebar() {
    if (isSidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}
function openSidebar() {
    html.classList.add('sidebar-is-open');
    isSidebarOpen = true;
}

function closeSidebar() {
    html.classList.remove('sidebar-is-open');
    isSidebarOpen = false;
}