import React from 'react'
import dynamic from 'next/dynamic'
import Lazy from '@/atoms/Image/Lazy'
import Container from '@/atoms/Container'
import HeroBackgroundImage from '@/molecules/HeroBackgroundImage'
import Content from '@/molecules/Content'
import clsx from 'clsx'
import List from '@/molecules/List'
import { FaQuoteLeft } from 'react-icons/fa'

const  Footer = dynamic(() => import('@/organisms/Footer'), { ssr: false })
const  NavBar = dynamic(() => import('@/organisms/NavBar/NavBar.Second'), { ssr: false })

const BasicTemplate = ({ nilai, tujuan, visi, misi, hero, content, background, title, subtitle, thumbnail, thumbnailDesc }) => {
    return (
        <>
            {
                typeof window !== 'undefined'
                    ? <NavBar />
                    : null
            }

            <Container 
                wrapperClassName="relative pt-28"
                cardClassName="pb-32"
                InjectedWrapperChild={<HeroBackgroundImage src={background} />}
            >
                <section className="grid grid-cols-1 md:grid-cols-2 items-end gap-10 md:gap-0">
                    <div className="col-span-1">
                        <h1 className="text-4xl font-display text-white font-bold">{ title }</h1>
                        <div className="w-44 mt-3 h-[2px] bg-gray-300" />
                    </div>
                    <div className="col-span-1 p-8 rounded-xl border border-white backdrop-blur shadow-lg shadow-white/20">
                        {
                            thumbnailDesc && (
                                <p className='text-white mb-10 font-semibold text-sm leading-relaxed'>{ thumbnailDesc }</p>
                            )
                        }
                        {
                            thumbnail && (
                                <Lazy 
                                    containerClassName="w-full" 
                                    imgClassName="object-cover ml-auto border border-gray-300" 
                                    imgSizeClassName="w-[100%] max-w-[500px] md:w-[80%]"
                                    src={thumbnail} 
                                />
                            )
                        }
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <p className="md:mt-14 text-lg md:text-xl md:leading-loose tracking-wide font-semibold text-white leading-loose">{ subtitle }</p>
                    </div>
                </section>
            </Container>

            {
                visi && (
                    <Container 
                        wrapperClassName="relative mt-32"
                        cardClassName="max-w-[800px] mx-auto"
                    >
                        <h1 className="text-6xl mb-9 tracking-wider font-display text-secondary font-bold leading-loose">Visi</h1>
                        <div className="relative">
                            <FaQuoteLeft size={70} className="absolute -z-[9] -top-9 -left-5 text-gray-200" />
                            <p className="indent-8 md:w-11/12 ml-auto block text-xl tracking-wide font-semibold text-primary leading-loose">{ visi }</p>
                        </div>
                    </Container>
                )
            }

            {
                misi && (
                    <Container 
                        wrapperClassName="relative mt-32"
                        cardClassName="max-w-[800px] mx-auto bg-primary/90 p-24 md:rounded-xl md:border md:border-white md:shadow-xl md:shadow-primary/50"
                    >
                        <List
                            title="Misi"
                            size="large"
                            items={misi}
                            withIndent={true}
                            titleClassName="text-white mb-4"
                            listClassName="text-white mt-16"
                            prefixClassName="text-white/30"
                        />
                    </Container>
                )
            }

            {
                nilai && (
                    <Container 
                        wrapperClassName="relative mt-32"
                        cardClassName="max-w-[800px] mx-auto bg-primary/90 p-24 md:rounded-xl md:border md:border-white md:shadow-xl md:shadow-primary/50"
                    >
                        <List
                            title="Nilai-Nilai"
                            size="small"
                            items={nilai}
                            withIndent={true}
                            titleClassName="text-white mb-4"
                            listClassName="text-white mt-16"
                            prefixClassName="text-white/30"
                        />
                    </Container>
                )
            }

            {
                tujuan && (
                    <Container 
                        wrapperClassName="relative mt-32"
                        cardClassName="max-w-[800px] mx-auto bg-secondary/90 p-24 md:rounded-xl md:border md:border-white md:shadow-xl md:shadow-secondary/50"
                    >
                        <List
                            title="Tujuan"
                            size="small"
                            items={tujuan}
                            withIndent={true}
                            titleClassName="text-white mb-4"
                            listClassName="text-white mt-16"
                            prefixClassName="text-white/30"
                        />
                    </Container>
                )
            }

            <Container 
                wrapperClassName="relative pt-28"
            >
                {
                    hero && (
                        <Lazy
                            containerClassName="w-full max-w-[800px] border border-primary rounded-lg mx-auto mb-20"
                            imgClassName="w-[100%]"
                            src={hero}
                        />
                    )
                }
                {
                    Array.isArray(content) && content.map((itm, i) => (
                        <div className={clsx(i > 0 && "mt-12")} key={itm.key}>
                            <Content content={itm.content} id={itm.key} img={itm.img} />
                        </div>
                    ))
                }
            </Container>
            
            {
                typeof window !== 'undefined'
                    ? <Footer />
                    : null
            }
        </>
    )
}

export default BasicTemplate