const hamburger = document.querySelector('.hamburger')
const iconXSidebar = document.querySelector('.header-sidebar i')
const sidebar = document.querySelector('.sidebar')
hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('active');
})
iconXSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active')
})

const linksSidebar = document.querySelectorAll('.col-link-sidebar a')

linksSidebar.forEach((link) => {
    link.addEventListener('click', function () {
        const linkSidebarActive = document.querySelector('.col-link-sidebar a.active')
        if (linkSidebarActive) {
            linkSidebarActive.classList.remove('active')
        }
        link.classList.add('active');
        setTimeout(() => {

            sidebar.classList.remove('active')
        }, 200);

    })
})