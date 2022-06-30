import React from 'react'
import Fallback from '@/atoms/SuspenseFallback'
import useResponsive from '@/hooks/useResponsive'

const MainMenuContentTablet = React.lazy(() => import('./MainMenuContent.Tablet'))
const MainMenuContentMobile = React.lazy(() => import('./MainMenuContent.Mobile'))
const MainMenuContentDesktop = React.lazy(() => import('./MainMenuContent.Desktop'))

const MainMenuContent = () => {
    const isXl = useResponsive('xl')
    const isMd = useResponsive('md')

    return (
        isXl
            ? (
                <React.Suspense fallback={<Fallback />}>
                    <MainMenuContentDesktop />
                </React.Suspense>
            )
            : isMd
                ? (
                    <React.Suspense fallback={<Fallback />}>
                        <MainMenuContentTablet />
                    </React.Suspense>
                )
                : (
                    <React.Suspense fallback={<Fallback />}>
                        <MainMenuContentMobile />
                    </React.Suspense>
                )
    )
}

export default MainMenuContent