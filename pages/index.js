import React from 'react'
import dynamic from 'next/dynamic';
import Footer from '@/organisms/Footer';
import HomeHero from '@/atoms/Hero/Home'
import AlasanCard from '@/organisms/Card/Alasan';
import Fallback from '@/atoms/SuspenseFallback';
import AlasanKuliah from '@/organisms/AlasanKuliah';
import { alasanCard, alasanList } from '@/utils/constant/home'

const NavBar = dynamic(() => import("@/organisms/NavBar/NavBar.Second"), { ssr: false });


export default function Home() {
  return (
    <div className="relative">
        <React.Suspense fallback={<Fallback />}>
            <NavBar /> 
        </React.Suspense>
        <HomeHero />
        <AlasanCard val={alasanCard} />
        <AlasanKuliah val={alasanList} />
        <Footer />
    </div>
  )
}
