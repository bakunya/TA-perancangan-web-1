import React from 'react'
import { background, hero, profil, subtitle, thumbnail, thumbnailDesc, title } from '@/utils/constant/profil'
import BasicTemplate from '@/templates/BasicTemplate'

export default function ProfilPage() {
    return (
        <BasicTemplate
            hero={hero}
            content={profil} 
            background={background} 
            title={title}
            subtitle={subtitle}
            thumbnail={thumbnail}
            thumbnailDesc={thumbnailDesc}
        />
    )
}