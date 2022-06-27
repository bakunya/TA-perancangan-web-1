import React from 'react'
import dynamic from 'next/dynamic'
import Fallback from '@/atoms/SuspenseFallback'

import useResponsive from '@/hooks/useResponsive'
const MainMenuContentTablet = dynamic(() => import('./MainMenuContent.Tablet'), { suspense: true })
const MainMenuContentMobile = dynamic(() => import('./MainMenuContent.Mobile'), { suspense: true })
const MainMenuContentDesktop = dynamic(() => import('./MainMenuContent.Desktop'), { suspense: true })



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