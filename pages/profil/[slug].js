import React from 'react'
import { useRouter } from 'next/router'
import Custom404 from '@/templates/404'
import { PROFIL_LIST } from '@/utils/constant'
import BasicTemplate from '@/templates/BasicTemplate'

import * as sejarah from '@/utils/constant/profil/sejarah'
import * as visiMisi from '@/utils/constant/profil/visi-misi'
import * as nilaiTujuan from '@/utils/constant/profil/nilai-tujuan'


const data = {
    [PROFIL_LIST.sejarah]: sejarah,
    [PROFIL_LIST['visi-misi']]: visiMisi,
    [PROFIL_LIST['nilai-tujuan']]: nilaiTujuan,
}

export default function ProfilPage() {
    const { query: { slug } } = useRouter()
    

    return (
        data[slug] 
        ? (
            <BasicTemplate
                nilai={data[slug].nilai ?? null}
                tujuan={data[slug].tujuan ?? null}
                misi={data[slug].misi ?? null}
                visi={data[slug].visi ?? null}
                hero={data[slug]?.hero ?? null}
                title={data[slug]?.title ?? null}
                content={data[slug]?.profil ?? null} 
                thumbnail={data[slug]?.thumbnail ?? null}
                subtitle={data[slug]?.subtitle ?? null}
                background={data[slug]?.background ?? null} 
                thumbnailDesc={data[slug]?.thumbnailDesc ?? null}
            />
        ) 
        : <Custom404 />
    );
}