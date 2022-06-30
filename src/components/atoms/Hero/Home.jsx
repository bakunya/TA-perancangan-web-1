import Container from '@/atoms/Container'
import React from 'react'

const Home = () => {
    return (
        <Container 
            wrapperClassName="pt-[78px] bg-primary min-h-screen relative pb-64"
            cardClassName="grid place-content-center relative"
        >
            <div className='max-w-[900px] mx-auto mt-24 mb-56'>
                <h1 className='font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-center'>“Creative<br />Economy Park”</h1>
                <p className='text-center text-base sm:text-lg text-white mx-auto mt-10 max-w-[700px]'>Amikom Creative Economy Park (ACEP) yang telah bekerjasama dengan perusahaan di Silicon Valley dan Hollywood menjadika peluang baru bagi mahasiswa untuk melakukan internship dan bagi alumni untuk bekerja di Silicon Valley dan Hollywood.</p>
            </div>
            <div className="max-w-[370px] absolute bottom-0 right-0 mr-5">
                <p className="text-right text-white text-sm sm:text-base pl-5">Menjadi perguruan tinggi unggulan dunia dalam bidang ekonomi kreatif yang berbasis kewirausahaan yang menebar kebajikan.</p>
            </div>
        </Container>
    )
}

export default Home