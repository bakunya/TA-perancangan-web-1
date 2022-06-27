import { useCallback, useEffect } from "react"

const useIntersectionObserver = (ref, options, callbackObserve) => {
    const callback = useCallback((entries, observer) => {
        if(callbackObserve instanceof Function) callbackObserve(observer, entries, ref)
    }, [callbackObserve, ref])
    
    useEffect(() => {
        if(typeof window !=='undefined') {
            let observer =  new IntersectionObserver(callback, options)

            if(ref.current && observer) {
                observer.observe(ref.current)
            }
    
        }

        return () => {
            if(typeof window !=='undefined' && ref.current && observer) {
                observer.disconnect(ref.current)
            }
        }
    }, [ref, options, callback])
}

export default useIntersectionObserver