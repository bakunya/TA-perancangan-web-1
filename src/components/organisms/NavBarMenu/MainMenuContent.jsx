import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

import useResponsive from '@/hooks/useResponsive'
const MainMenuContentTablet = React.lazy(() => import('./MainMenuContent.Tablet'))
const MainMenuContentMobile = React.lazy(() => import('./MainMenuContent.Mobile'))
const MainMenuContentDesktop = React.lazy(() => import('./MainMenuContent.Desktop'))

const Fallback = React.memo(() => (
    <div className="min-h-[500px] flex items-center justify-center">
        <AiOutlineLoading className='animate-[spin_300ms_linear_infinite]' size={23} />
    </div>
))

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