import dynamic from 'next/dynamic'
import React from 'react'
import Link from 'next/link'
import logo from '@/logo/amikom.png'
import Container from '@/atoms/Container'
import Fallback from '@/atoms/SuspenseFallback'
import { CONTACT_LINKS, FAKULTAS_LINKS, SOSMED_LINKS } from '@/utils/constant'
import Anchor from '@/atoms/Anchor'

const LazyImage = dynamic(() => import('@/atoms/Image/Lazy'), { ssr: false })

const Footer = () => {
    return (
        <>
            <Container
                wrapperClassName="mt-44 bg-primary"
                cardClassName="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-0 justify-between items-start"
            >
                <div className="col-span-1 text-white">
                    <div className="w-fit lg:mx-auto">
                        <Link href="/">
                            <a>
                                <React.Suspense fallback={<Fallback />}>
                                    <LazyImage src={logo.src} alt="logo" containerClassName="w-[150px] sm:w-[200px]" loaderType="white" />
                                </React.Suspense>
                            </a>
                        </Link>
                        <p className='mt-7 text-sm max-w-[300px] font-light leading-loose'>Diselenggarakan oleh: <br /><strong className='font-bold'>Yayasan Amikom Yogyakarta</strong><br />Jl. Padjajaran, Ring Road Utara, Kel. Condongcatur, Kec. Depok, Kab. Sleman, Prop. Daerah Istimewa Yogyakarta</p>
                        <table className="mt-5">
                            <tbody>
                                {
                                    CONTACT_LINKS.map((itm, i) => (
                                        <tr key={i} className='mt-2 block'>
                                            <td className='text-sm min-w-[45px]'>{itm.title}</td>
                                            <td className='text-sm min-w-[10px]'>:</td>
                                            <td className='text-sm'>
                                                {
                                                    itm?.url 
                                                        ? <Anchor href={itm.url}>{itm.contact}</Anchor>
                                                        : itm.contact
                                                }    
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-1 text-white">
                    <div className="w-fit lg:mx-auto flex flex-col">
                        <h1 className='font-bold text-xl mt-5 lg:mt-0'>Fakultas</h1>
                        {
                            FAKULTAS_LINKS.map((itm, i) => (
                                <Anchor key={i} href={itm.href} className='text-sm mt-4 hover:underline active:underline'>{itm.title}</Anchor>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-1 text-white">
                    <div className="w-fit lg:mx-auto flex flex-col">
                        <h1 className='font-bold text-xl mt-5 lg:mt-0'>Media Sosial</h1>
                        {
                            SOSMED_LINKS.map((itm, i) => (
                                <a target="_blank" key={i} href={itm.href} className='text-sm mt-4 hover:underline active:underline'>{itm.title}</a>
                            ))
                        }
                    </div>
                </div>
            </Container>
            <Container
                wrapperClassName="bg-primary"
                cardClassName="border-t border-gray-500"
            >
                <p className="text-white text-center">© Bakunya's Team</p>
            </Container>
        </>
    )
}

export default React.memo(Footer)