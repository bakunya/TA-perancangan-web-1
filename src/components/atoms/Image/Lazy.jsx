import React from 'react'
import useObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'
import { AiOutlineLoading } from 'react-icons/ai'

const Lazy = ({ containerClassName, containerPosition="relative", imgClassName, src, alt = 'Gambar', withLoader = true, loaderType = "primary" }) => {
    const imgRef = React.useRef()
    const imgLoadRef = React.useRef()
    const options = React.useRef({
        root: null,
        rootMargin: '0px',
        threshold: 0
    })

    useObserver(
        imgRef,
        options,
        React.useCallback((observer, entries, imgRef) => {
            const listener = () => {
                imgRef.current?.classList.remove('opacity-0')
                imgLoadRef.current?.classList.add('opacity-0')
                imgRef.current?.removeEventListener('load', listener)
                observer.unobserve(imgRef.current)
                observer.disconnect(imgRef.current)
            }

            if(entries[0].isIntersecting) {
                imgRef.current?.addEventListener('load', listener)
                imgRef.current?.setAttribute('src', src)
            }
            
        }, [src, imgLoadRef])
    )

    return (
        <div className={clsx(containerClassName, containerPosition)}>
            <img src={null} alt={alt} className={clsx(imgClassName, 'w-auto opacity-0 transition duration-500')} ref={imgRef} />
            {
                withLoader && 
                    <section className={clsx(loaderType === 'primary' ? 'text-primary' : loaderType === 'secondary' ? 'text-secondary' : 'text-white', "absolute inset-0 flex items-center justify-center")} ref={imgLoadRef}>
                        <AiOutlineLoading className='animate-[spin_300ms_linear_infinite]' size={23} />
                    </section>
            }
        </div>
    )
}

export default Lazy