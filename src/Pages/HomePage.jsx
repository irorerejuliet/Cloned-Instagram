import {Routes, Route} from "react-router-dom"
import LargeNavbar from "../Components/Header/LargeNavbar/LargeNavbar"
import MobileNav from "../Components/MobileNav/MobileNav"
import Feed from "./feed/Feed"

const HomePage = () => {
  return (
    <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
      {/* Sidebar section */}
      <div className="lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 lg:block md:block sm:hidden hidden">
        <LargeNavbar/>
      </div>
      {/* Buttom Navbar dor small screem */}
      <div className="w-full h-auto py-1 px-3 border-t border-t-white fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50">
        <MobileNav/>
      </div>
      {/* Feed and profile routing section */}
      <Routes>
        <Route exact path="/" element={<Feed/>}/>
        {/* Profile section */}
      </Routes>
    </div>
  )
}

export default HomePage
