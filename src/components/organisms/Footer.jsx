import dynamic from 'next/dynamic'
import React from 'react'
import Link from 'next/link'
import logo from '@/logo/amikom.png'
import Container from '@/atoms/Container'
import Fallback from '@/atoms/SuspenseFallback'

const LazyImage = dynamic(() => import('@/atoms/Image/Lazy'), { ssr: false })

const Footer = () => {
    return (
        <Container
            wrapperClassName="mt-44 bg-primary"
            cardClassName="grid grid-cols-1 lg:grid-cols-3 lg:items-end"
        >
            <div className="col-span-1">
                <p className="text-white">© 2022 Bakunya's Team.</p>
            </div>
            <div className="col-span-1">
                <Link href="#">
                    <a>
                        <React.Suspense fallback={<Fallback />}>
                            <LazyImage src={logo.src} alt="logo" containerClassName="w-[150px] sm:w-[200px] mx-auto" loaderType="white" />
                        </React.Suspense>
                    </a>
                </Link>
            </div>
            <div className="col-span-1 flex flex-col sm:flex-row text-white lg:ml-auto">
                <a href="#" className='mt-4 sm:mt-0 hover:underline active:underline'>Twiter</a>
                <a href="#" className='sm:ml-6 mt-4 sm:mt-0 hover:underline active:underline'>Instagram</a>
                <a href="#" className='sm:ml-6 mt-4 sm:mt-0 hover:underline active:underline'>Facebook</a>
                <a href="#" className='sm:ml-6 mt-4 sm:mt-0 hover:underline active:underline'>Youtube</a>
            </div>
        </Container>
    )
}

export default React.memo(Footer)