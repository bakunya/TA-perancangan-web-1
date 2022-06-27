import React from 'react'

const breakpoints = {
    'sm': '(min-width: 640px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 1024px)',
    'xl': '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
}

const useResponsive = (viewport = 'sm') => {
    const [isMatch, setIsMatch] = React.useState(false)

    React.useEffect(() => {
        if(typeof window !== 'undefined') setIsMatch(window.matchMedia(breakpoints[viewport]).matches)

        const listener = () => {
            setIsMatch(window.matchMedia(breakpoints[viewport]).matches)
        }

        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)

    }, [setIsMatch, viewport])

    return isMatch
}

export default useResponsive