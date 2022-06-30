import React from 'react'
import dynamic from 'next/dynamic'
import Anchor from '@/atoms/Anchor'
import alasan from '@/illust/alasan.png'
import Container from '@/atoms/Container'
import Heading from '@/atoms/Typography/Heading'
import Fallback from '@/atoms/SuspenseFallback'
import { BsArrowRightShort } from 'react-icons/bs'
import ListItem from '@/atoms/ListItem'
import clsx from 'clsx'

const LazyImage = dynamic(() => import('@/atoms/Image/Lazy'), { ssr: false })

const AlasanKuliah = ({ val }) => {
    return (
        <Container
            wrapperClassName="mt-44"
            cardClassName="grid grid-cols-1 md:grid-cols-2"
        >
            <div className="col-span-1">
                <React.Suspense fallback={<Fallback />}>
                    <LazyImage src={alasan.src} containerClassName="w-full" imgClassName="mx-auto block" />
                </React.Suspense>
            </div>
            <div className="col-span-1">
                <Heading className="mt-8 text-center md:text-left md:mt-0">Alasan Mengapa Kuliah di Amikom?</Heading>
                {
                    Array.isArray(val) && val.map(itm => (
                        <ListItem 
                            size="small"
                            contentClassName="text-gray-600"
                            prefixClassName="bg-gray-400/50"
                            className={itm.key == 1 ? 'mt-14' : 'mt-10'} 
                        >{itm.content}</ListItem>
                    ))
                }
            </div>
        </Container>
    )
}

export default React.memo(AlasanKuliah)