document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links')
    const navLinksTrigger = document.getElementById('nav-links-show-trigger')

    // navLinksTrigger trigger
    const callback = (entries, observer) => {
        if(entries[0].isIntersecting) {
            navLinks.classList.remove('fixed')
        } else {
            navLinks.classList.add('fixed')
            navLinks.classList.remove('opacity-0')
        }
    }

    const observer = new IntersectionObserver(callback)
    observer.observe(navLinksTrigger)

    // navLinks trigger
    const callback2 = (entries, observer) => {
        if(entries[0].isIntersecting) {
            navLinks.classList.remove('opacity-0')
        } else {
            navLinks.classList.add('opacity-0')
        }
    }

    const observer2 = new IntersectionObserver(callback2)
    observer2.observe(navLinks)
})