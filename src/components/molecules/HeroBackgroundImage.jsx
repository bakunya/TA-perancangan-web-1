import React from 'react'
import dynamic from 'next/dynamic'
import Fallback from '@/atoms/SuspenseFallback'

const LazyImage = dynamic(() => import('@/atoms/Image/Lazy'), { ssr: false })

const HeroBackgroundImage = ({ src }) => {
    return (
        <>
            <React.Suspense fallback={<Fallback />}>
                <LazyImage 
                    src={src} 
                    imgClassName="object-cover w-[100%] h-full hue-rotate-90 sepia saturate-50 "
                    containerClassName="inset-0"
                    containerPosition="absolute -z-[2]"
                />
            </React.Suspense>
            <span className="bg-primary/80 absolute inset-0 -z-[1]" />
        </>
    )
}

export default React.memo(HeroBackgroundImage)