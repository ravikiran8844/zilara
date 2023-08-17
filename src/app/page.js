import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar'
import BannerSection from '@/components/BannerSection/BannerSection'
import NavBar from '@/components/NavBar/NavBar'
import CarouselSection from '@/components/CarouselSection/CarouselSection'
import Footer from '@/components/Footer/Footer'
import LogoTextSection from '@/components/LogoTextSection/LogoTextSection'

export default function Home() {
  return (
   <>
   <AnnouncementBar/>
   <NavBar/>
   <CarouselSection/>
   <LogoTextSection/>
   <BannerSection/>
   <Footer/>
   </>
  )
}
