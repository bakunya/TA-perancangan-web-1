import React from 'react'
import LazyImage from '@/atoms/Image/Lazy'

const HeroBackgroundImage = ({ src }) => {
    return (
        <>
            <LazyImage 
                src={src} 
                withLoader={false}
                containerClassName="inset-0"
                containerPosition="absolute -z-[2]"
                imgClassName="object-cover w-[100%] h-full hue-rotate-90 sepia saturate-50 "
            />
            <span className="bg-primary/80 absolute inset-0 -z-[1]" />
        </>
    )
}

export default React.memo(HeroBackgroundImage)