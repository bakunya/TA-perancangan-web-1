import Container from '@/atoms/Container'
import React from 'react'

const Home = () => {
    return (
        <Container 
            wrapperClassName="pt-[78px] bg-primary min-h-screen relative pb-64"
            cardClassName="grid place-content-center relative"
        >
            <div className='max-w-[900px] mx-auto mt-24 mb-56'>
                <h1 className='font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-center'>“Then,<br />thenceforward,<br />and forever free”</h1>
                <p className='text-center text-base sm:text-lg text-white mx-auto mt-10 max-w-[700px]'>These words, issued on January 1, 1863 in the Emancipation Proclamation, were finally heard by the enslaved people in Texas on June 19, 1865. Join the Harvard community in celebrating and exploring the history of Juneteenth.</p>
            </div>
            <div className="max-w-[370px] absolute bottom-0 right-0 mr-5">
                <p className="text-right text-white text-sm sm:text-base pl-5">The Juneteenth flag was created in 1977 by Ben Haith, founder of the National Juneteenth Celebration Foundation, and illustrator Lisa Jeanna Graf.</p>
            </div>
        </Container>
    )
}

export default Home