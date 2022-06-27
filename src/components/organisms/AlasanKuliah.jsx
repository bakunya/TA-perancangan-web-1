import Container from '@/atoms/Container'
import Lazy from '@/atoms/Image/Lazy'
import React from 'react'
import alasan from '@/illust/alasan.png'
import Heading from '@/atoms/Typography/Heading'
import { BsChevronRight, BsArrowRightShort } from 'react-icons/bs'
import Anchor from '@/atoms/Anchor'

const AlasanKuliah = () => {
    return (
        <Container
            wrapperClassName="mt-44"
            cardClassName="grid grid-cols-1 md:grid-cols-2"
        >
            <div className="col-span-1">
                <Lazy src={alasan.src} containerClassName="w-full" imgClassName="mx-auto block" />
            </div>
            <div className="col-span-1">
                <Heading className="mt-8 text-center md:text-left md:mt-0">Alasan Mengapa Kuliah di Amikom?</Heading>
                <div className="flex flex-col items-start mt-5">
                    <div className="flex items-start justify-between text-lg mt-8 w-full">
                        <BsChevronRight className='w-[15%] mr-auto' />
                        <p className='m-0 p-0 w-[85%]'>Peluang magang dan bekerja di Silicon Valley dan Hollywood</p>
                    </div>
                    <div className="flex items-start justify-between text-lg mt-8 w-full">
                        <BsChevronRight className='w-[15%] mr-auto' />
                        <p className='m-0 p-0 w-[85%]'>Menuju Universitas Generasi Keempat, menghasilkan lulusan sebagai ilmuwan, professional, entrepreneur dan artis, yang cocok dengan kondisi saat ini dan yang akan datang.</p>
                    </div>
                    <div className="flex items-start justify-between text-lg mt-8 w-full">
                        <BsChevronRight className='w-[15%] mr-auto' />
                        <p className='m-0 p-0 w-[85%]'>Peluang magang dan bekerja di Silicon Valley dan Hollywood</p>
                    </div>
                    <div className="flex items-start justify-between text-lg mt-8 w-full">
                        <BsChevronRight className='w-[15%] mr-auto' />
                        <p className='m-0 p-0 w-[85%]'>Menuju Universitas Generasi Keempat, menghasilkan lulusan sebagai ilmuwan, professional, entrepreneur dan artis, yang cocok dengan kondisi saat ini dan yang akan datang.</p>
                    </div>
                    <div className="flex items-start justify-between text-lg mt-8 w-full">
                        <BsChevronRight className='w-[15%] mr-auto' />
                        <p className='m-0 p-0 w-[85%]'>Peluang magang dan bekerja di Silicon Valley dan Hollywood</p>
                    </div>
                    <div className="flex items-start justify-between text-lg mt-8 w-full">
                        <BsChevronRight className='w-[15%] mr-auto' />
                        <p className='m-0 p-0 w-[85%]'>Menuju Universitas Generasi Keempat, menghasilkan lulusan sebagai ilmuwan, professional, entrepreneur dan artis, yang cocok dengan kondisi saat ini dan yang akan datang.</p>
                    </div>
                </div>
                <Anchor className="text-primary w-full group flex items-center font-bold mt-14 block">
                    Info Selengkapnya
                    <BsArrowRightShort className='ml-4 group-hover:ml-6 transition-all' size={25} />
                </Anchor>
            </div>
        </Container>
    )
}

export default React.memo(AlasanKuliah)