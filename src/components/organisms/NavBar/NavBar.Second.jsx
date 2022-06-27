import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import logo from '@/logo/amikom.png'
import Container from '@/atoms/Container'
import Menu from '@/organisms/NavBarMenu/Menu'
import Fallback from '@/atoms/SuspenseFallback'
import Search from '@/organisms/NavBarMenu/Search'

const LazyImage = dynamic(() => import('@/atoms/Image/Lazy'), { ssr: false })

const NavBar = () => {
    return (
        <Container wrapperClassName="absolute top-0 left-0 right-0 z-[99]" cardClassName="pr-0 py-0 pl-5" containerClassName="max-w-[100vw]">
            <div className="flex justify-between items-center h-[78px]">
                <Link href="#">
                    <a>
                        <React.Suspense fallback={<Fallback />}>
                            <LazyImage src={logo.src} alt="logo" containerClassName="w-[150px] sm:w-[200px]" loaderType="white" />
                        </React.Suspense>
                    </a>
                </Link>
                <div className="flex justify-end text-white bg-primary">
                    <Search />
                    <Menu />
                </div>
            </div>
        </Container>
    )
}

export default NavBar