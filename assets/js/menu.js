let isSidebarOpen = false;

// // Toggle button
document.querySelector('#js-toggle-button').addEventListener('click', function () {
    if (isSidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
    isSidebarOpen = !isSidebarOpen;
});

function openSidebar() {
    const element = document.querySelector('html');
    element.classList.add('sidebar-is-open');
}


function closeSidebar() {
    const element = document.querySelector('html');
    element.classList.remove('sidebar-is-open');
}
