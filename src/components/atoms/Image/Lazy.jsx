import React from 'react'
import dynamic from 'next/dynamic'

const ImageLazy = dynamic(() => import('./index'), { ssr: false })

const Lazy = (props) => {
    
    return typeof window !== 'undefined' ? <ImageLazy { ...props } /> : null
}

export default React.memo(Lazy)