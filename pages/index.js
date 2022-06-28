import HomeHero from '@/atoms/Hero/Home'
import Footer from '@/organisms/Footer';
import Alasan from '@/organisms/Card/Alasan';
import AlasanKuliah from '@/organisms/AlasanKuliah';
import NavBar from "@/organisms/NavBar/NavBar.Second";


export default function Home() {
  return (
    <div className="relative">
        <NavBar /> 
        <HomeHero />
        <Alasan />
        <AlasanKuliah />
        <Footer />
    </div>
  )
}
