import React from 'react'
import dynamic from 'next/dynamic'
import Lazy from '@/atoms/Image/Lazy'
import Container from '@/atoms/Container'
import HeroBackgroundImage from '@/molecules/HeroBackgroundImage'
import { FaQuoteLeft } from 'react-icons/fa'
import edu from '@/illust/education.svg'
import ListItem from '@/atoms/ListItem'
import CardDosen from '@/atoms/CardDosen'

const  Footer = dynamic(() => import('@/organisms/Footer'), { ssr: false })
const  NavBar = dynamic(() => import('@/organisms/NavBar/NavBar.Second'), { ssr: false })

const Prodi = () => {
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
                InjectedWrapperChild={<HeroBackgroundImage src="https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVpbGRpbmd8fHx8fHwxNjU2NDEwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2000" />}
            >
                <section className="grid grid-cols-1 md:grid-cols-2 items-end gap-10 md:gap-0">
                    <div className="col-span-1">
                        <h1 className="text-4xl font-display text-white font-bold">D3 Teknik Informatika</h1>
                        <div className="w-44 mt-3 h-[2px] bg-gray-300" />
                    </div>
                    <div className="col-span-1 p-8 rounded-xl border border-white backdrop-blur shadow-lg shadow-white/20">
                        <p className='text-white mb-10 font-semibold text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur at recusandae, odio eveniet repellat quam, dolorum repellendus ea vero blanditiis veritatis fugiat adipisci quae officiis culpa enim tenetur vitae alias!</p>
                        <Lazy 
                            containerClassName="w-full" 
                            imgClassName="object-cover ml-auto border border-gray-300" 
                            imgSizeClassName="w-[100%] max-w-[500px] md:w-[80%]"
                            src="https://images.unsplash.com/photo-1501261379837-c3b516327829?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY1NjQxMjg0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" 
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <p className="md:mt-14 text-lg md:text-xl md:leading-loose tracking-wide font-semibold text-white leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, reiciendis totam harum ab qui alias excepturi debitis obcaecati voluptate accusamus tempore corrupti eligendi minima natus sunt, laudantium nesciunt! Vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt maxime, neque ipsum illum deserunt repudiandae asperiores possimus quo magni iste velit debitis ut excepturi quis. Est dolorem vitae nam.</p>
                    </div>
                </section>
            </Container>

            <Container 
                wrapperClassName="relative mt-32"
                cardClassName="max-w-[800px] mx-auto"
            >
                <h1 className="text-6xl mb-9 tracking-wider font-display text-secondary font-bold leading-loose">Visi</h1>
                <div className="relative">
                    <FaQuoteLeft size={70} className="absolute -z-[9] -top-9 -left-5 text-gray-200" />
                    <p className="indent-8 md:w-11/12 ml-auto block text-xl tracking-wide font-semibold text-primary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, reiciendis totam harum ab qui alias excepturi debitis obcaecati voluptate accusamus tempore corrupti eligendi minima natus sunt, laudantium nesciunt! Vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt maxime, neque ipsum illum deserunt repudiandae asperiores possimus quo magni iste velit debitis ut excepturi quis. Est dolorem vitae nam.</p>
                </div>
            </Container>

            <Container 
                wrapperClassName="relative mt-32"
                cardClassName="max-w-[800px] mx-auto bg-primary/90 p-24 md:rounded-xl md:border md:border-white md:shadow-xl md:shadow-primary/50"
            >
                <h1 className="mb-20 text-6xl mt-0 tracking-wider font-display text-white font-bold">Misi</h1>
                <ListItem withIndent={true} className="text-white" prefixClassName="text-white/30" size="large" prefix="1">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                <ListItem withIndent={true} className="text-white mt-16" prefixClassName="text-white/30" size="large" prefix="2">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                <ListItem withIndent={true} className="text-white mt-16" prefixClassName="text-white/30" size="large" prefix="3">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                <ListItem withIndent={true} className="text-white mt-16" prefixClassName="text-white/30" size="large" prefix="4">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                <ListItem withIndent={true} className="text-white mt-16" prefixClassName="text-white/30" size="large" prefix="5">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
            </Container>

            <Container 
                wrapperClassName="mt-32"
            >
                <h1 className="max-w-[800px] mx-auto block text-4xl md:text-6xl mb-16 tracking-wider font-display text-secondary font-bold leading-normal md:leading-loose">Kompetensi Lulusan</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
                    <div className="col-span-1 max-w-[800px] mr-auto block">
                        <ListItem className="text-primary" prefixClassName="text-gray-400/30" prefix="1" size="small">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                        <ListItem className="mt-10 text-primary" prefixClassName="text-gray-400/30" prefix="2" size="small">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                        <ListItem className="mt-10 text-primary" prefixClassName="text-gray-400/30" prefix="3" size="small">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                        <ListItem className="mt-10 text-primary" prefixClassName="text-gray-400/30" prefix="4" size="small">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                        <ListItem className="mt-10 text-primary" prefixClassName="text-gray-400/30" prefix="5" size="small">Mendorong dan memfasilitasi sivitas akademika dalam melakukan pengabdian kepada masyarakat untuk menyelesaikan permasalahan di bidang ekonomi kreatif secara profesional.</ListItem>
                    </div>
                    <div className="col-span-1">
                        <Lazy 
                            containerClassName="mt-24 lg:mt-0" 
                            imgSizeClassName="w-full max-w-[500px] ml-auto block"
                            src={edu.src}
                        />
                    </div>
                </div>
            </Container>

            <Container 
                wrapperClassName="mt-32"
            >
                <h1 className="max-w-[800px] mx-auto block text-4xl md:text-6xl mb-16 tracking-wider font-display text-secondary font-bold leading-normal md:leading-loose">Dosen Prodi</h1>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[950px] mx-auto">
                    <div className="col-span-1">
                        <CardDosen
                            src="https://images.unsplash.com/photo-1501261379837-c3b516327829?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY1NjQxMjg0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
                            name="Barka Satya"
                            nim="0919988"
                        />
                    </div>
                    <div className="col-span-1">
                        <CardDosen
                            src="https://images.unsplash.com/photo-1501261379837-c3b516327829?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY1NjQxMjg0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
                            name="Barka Satya"
                            nim="0919988"
                        />
                    </div>
                    <div className="col-span-1">
                        <CardDosen
                            src="https://images.unsplash.com/photo-1501261379837-c3b516327829?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY1NjQxMjg0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
                            name="Barka Satya"
                            nim="0919988"
                        />
                    </div>
                    <div className="col-span-1">
                        <CardDosen
                            name="Barka Satya"
                            nim="0919988"
                        />
                    </div>
                </div>
            </Container>

            {
                typeof window !== 'undefined'
                    ? <Footer />
                    : null
            }
        </>
    )
}

export default Prodi