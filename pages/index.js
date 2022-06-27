import HomeHero from '@/atoms/Hero/Home'
import Alasan from '@/organisms/Card/Alasan';
import AlasanKuliah from '@/organisms/AlasanKuliah';
import NavBar from "@/organisms/NavBar/NavBar.Second";
import Footer from '@/organisms/Footer';

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
