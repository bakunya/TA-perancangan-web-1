import Container from '@/atoms/Container'
import Lazy from '@/atoms/Image/Lazy'
import HeroBackgroundImage from '@/molecules/HeroBackgroundImage'
import NavBar from '@/organisms/NavBar/NavBar.Second'
import React from 'react'

const Prodi = () => {
    return (
        <>
            <NavBar />
            <Container 
                wrapperClassName="relative pt-44"
                InjectedWrapperChild={<HeroBackgroundImage src="https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVpbGRpbmd8fHx8fHwxNjU2NDEwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2000" />}
            >
                <section className="grid grid-cols-1 md:grid-cols-2 items-end gap-10 md:gap-0">
                    <div className="col-span-1">
                        <h1 className="text-4xl font-display text-white font-bold">D3 Teknik Informatika</h1>
                        <div className="w-44 mt-3 h-[2px] bg-gray-300" />
                    </div>
                    <div className="col-span-1">
                        <p className='text-white mb-5 font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur at recusandae, odio eveniet repellat quam, dolorum repellendus ea vero blanditiis veritatis fugiat adipisci quae officiis culpa enim tenetur vitae alias!</p>
                        <Lazy containerClassName="w-full" imgClassName="object-cover ml-auto w-[100%] max-w-[500px] md:w-[80%] border border-gray-300" src="https://images.unsplash.com/photo-1501261379837-c3b516327829?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY1NjQxMjg0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                    </div>
                </section>
            </Container>

            <Container 
                wrapperClassName="relative mt-10"
            >
                <h1 className="text-2xl font-display text-secondary font-bold leading-loose">Profil</h1>
                <div className="w-full mt-3 h-[3px] bg-primary" />
                <p className="mt-5 text-xl tracking-wide font-semibold text-primary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, reiciendis totam harum ab qui alias excepturi debitis obcaecati voluptate accusamus tempore corrupti eligendi minima natus sunt, laudantium nesciunt! Vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt maxime, neque ipsum illum deserunt repudiandae asperiores possimus quo magni iste velit debitis ut excepturi quis. Est dolorem vitae nam.</p>
            </Container>
            <Container 
                wrapperClassName="relative mt-10"
            >
                <h1 className="text-2xl font-display text-secondary font-bold leading-loose">Visi</h1>
                <div className="w-full mt-3 h-[3px] bg-primary" />
                <p className="mt-5 text-xl tracking-wide font-semibold text-primary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, reiciendis totam harum ab qui alias excepturi debitis obcaecati voluptate accusamus tempore corrupti eligendi minima natus sunt, laudantium nesciunt! Vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt maxime, neque ipsum illum deserunt repudiandae asperiores possimus quo magni iste velit debitis ut excepturi quis. Est dolorem vitae nam.</p>
            </Container>
            <Container 
                wrapperClassName="relative mt-10"
            >
                <h1 className="text-2xl font-display text-secondary font-bold leading-loose">Misi</h1>
                <div className="w-full mt-3 h-[3px] bg-primary" />
                <p className="mt-5 text-xl tracking-wide font-semibold text-primary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis, reiciendis totam harum ab qui alias excepturi debitis obcaecati voluptate accusamus tempore corrupti eligendi minima natus sunt, laudantium nesciunt! Vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt maxime, neque ipsum illum deserunt repudiandae asperiores possimus quo magni iste velit debitis ut excepturi quis. Est dolorem vitae nam.</p>
            </Container>
        </>
    )
}

export default Prodi