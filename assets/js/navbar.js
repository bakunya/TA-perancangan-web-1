document.addEventListener('DOMContentLoaded', () => {
    const navOpenBtn = document.getElementById('nav-open-btn')
    const navCloseBtn = document.getElementById('nav-close-btn')
    const navMobileContainer = document.getElementById('nav-mobile-container')

    navOpenBtn.addEventListener('click', () => {
        navMobileContainer.classList.remove('-translate-y-[100vh]')
    })

    navCloseBtn.addEventListener('click', () => {
        navMobileContainer.classList.add('-translate-y-[100vh]')
    })
})