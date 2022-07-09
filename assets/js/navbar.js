document.addEventListener('DOMContentLoaded', () => {
    const navOpenBtn = document.getElementById('nav-open-btn')
    const navCloseBtn = document.getElementById('nav-close-btn')
    const navLinks = document.getElementById('nav-links')
    const navMobileContainer = document.getElementById('nav-mobile-container')

    navOpenBtn.addEventListener('click', () => {
        navMobileContainer.classList.remove(`-translate-y-[110vh]`, 'opacity-0')
        document.body.classList.add('overflow-hidden')
    })

    navCloseBtn.addEventListener('click', () => {
        navMobileContainer.classList.add(`-translate-y-[110vh]`, 'opacity-0')
        document.body.classList.remove('overflow-hidden')
    })
})