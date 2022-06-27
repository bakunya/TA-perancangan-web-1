import React from 'react'
import Container from '@/atoms/Container'
import Anchor from '@/atoms/Anchor'
import { BsArrowRightShort } from 'react-icons/bs'

const Alasan = () => {
    return (
        <Container 
            wrapperClassName="mt-44"
            cardClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
            <div className="col-span-1 p-8 rounded-xl transition-all duration-300 border hover:shadow-xl hover:scale-[1] scale-[0.95]">
                <h1 className="font-bold text-2xl capitalize mb-10">Daftar Kuliah di AMIKOM Bisa dari Mana Saja</h1>
                <p className='mb-10'>Banyak pilihan beasiswa sampai dengan kuliah gratis 100%</p>
                <Anchor className="text-primary w-full group flex items-center font-bold">
                    Info Beasiswa
                    <BsArrowRightShort className='ml-4 group-hover:ml-6 transition-all' size={25} />
                </Anchor>
            </div>
            <div className="col-span-1 p-8 rounded-xl transition-all duration-300 border hover:shadow-xl hover:scale-[1] scale-[0.95]">
                <h1 className="font-bold text-2xl capitalize mb-10">Daftar Kuliah di AMIKOM Bisa dari Mana Saja</h1>
                <p className='mb-10'>Banyak pilihan beasiswa sampai dengan kuliah gratis 100%</p>
                <Anchor className="text-primary w-full group flex items-center font-bold">
                    Info Beasiswa
                    <BsArrowRightShort className='ml-4 group-hover:ml-6 transition-all' size={25} />
                </Anchor>
            </div>
            <div className="col-span-1 p-8 rounded-xl transition-all duration-300 border hover:shadow-xl hover:scale-[1] scale-[0.95]">
                <h1 className="font-bold text-2xl capitalize mb-10">Daftar Kuliah di AMIKOM Bisa dari Mana Saja</h1>
                <p className='mb-10'>Banyak pilihan beasiswa sampai dengan kuliah gratis 100%</p>
                <Anchor className="text-primary w-full group flex items-center font-bold">
                    Info Beasiswa
                    <BsArrowRightShort className='ml-4 group-hover:ml-6 transition-all' size={25} />
                </Anchor>
            </div>
        </Container>
    )
}

export default React.memo(Alasan)