import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import logo from '@/logo/amikom.png'
import { BsX } from 'react-icons/bs'
import Container from '@/atoms/Container'
import LazyImage from '@/atoms/Image/Lazy'
import Button from '@/atoms/NavBarMenu/Button'
import MainMenuContent from './MainMenuContent'
import MenuImageBackground from '@/atoms/Image/MenuImageBackground'


const MainMenu = ({ isShow, onHide }) => {
    return (
        <div 
            className={clsx(
                !isShow ? '-translate-y-[110vh] opacity-0': 'translate-y-0 opacity-100',
                "fixed inset-0 bg-primary transition-all duration-500"
            )}

        >
            <Container wrapperClassName="absolute top-0 left-0 right-0" cardClassName="py-0 px-0" containerClassName="max-w-[100vw]">
                <div className="absolute inset-0 -z-[2]">
                    <MenuImageBackground />
                </div>
                
                <div className="bg-primary flex justify-between items-center h-[78px] pl-5">
                    <Link href="/">
                        <a className='scale-[0.8]'>
                            <LazyImage src={logo.src} alt="logo" containerClassName="w-[150px] sm:w-[200px]" loaderType="white" />
                        </a>
                    </Link>
                    <div className="flex justify-end text-white bg-primary">
                        <Button onClick={onHide}>
                            <BsX className='sm:mr-2' size={33} />
                            <span className="hidden sm:block">Close</span>
                        </Button>
                    </div>
                </div>
                <MainMenuContent />
                <div className="bg-primary h-[80px] w-full border-t border-zinc-600"></div>
            </Container>
        </div>
    )
}

export default MainMenu