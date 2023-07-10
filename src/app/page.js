import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar'
import BannerSection from '@/components/BannerSection/BannerSection'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <AnnouncementBar/>
   <NavBar/>
   <BannerSection/>
   </>
  )
}
