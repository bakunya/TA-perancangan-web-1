import { useRef, useEffect } from "react"

const useIntersectionObserver = (ref, options, callbackObserve) => {
    const observer = useRef(null)
    
    useEffect(() => {
        if(typeof window !=='undefined') {
            observer.current =  new IntersectionObserver((entries, observer) => {
                if(callbackObserve instanceof Function) callbackObserve(observer, entries, ref)
            }, options)    
        }

        if(ref.current && observer.current) {
            observer.current.observe(ref.current)
        }

        return () => {
            if(typeof window !=='undefined' && ref.current && observer.current) {
                observer.current.disconnect(ref.current)
            }
        }
    }, [ref, options, observer, callbackObserve])
}

export default useIntersectionObserver