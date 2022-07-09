document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('[data-src]')

    const imageListenerLoadEvent = (e) => {
        e.target.classList.remove('opacity-0')
        e.target.removeEventListener('load', imageListenerLoadEvent)
    }

    const callback = (entries, observer) => {
        const [entry] = entries

        if(entry.isIntersecting) {
            observer.disconnect(entry)
            entry.target.setAttribute('src', entry?.target?.dataset?.src)
            entry.target.addEventListener('load', imageListenerLoadEvent)
        }
    }

    images.forEach(itm => {
        const observer = new IntersectionObserver(callback)
        observer.observe(itm)
    })
})