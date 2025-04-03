
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { TbFreezeRow } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";




const LargeNavbar = () => {
    const sideBarItems = [
      {
        name: "Home",
        link: "/Home",
        icon: <TiHome size={25} />,
        id: 1,
      },
      {
        name: "Search",
        link: "/search",
        icon: <IoSearchOutline size={25} />,
        id: 2,
      },
      {
        name: "Explore",
        link: "/Explore",
        icon: <MdOutlineExplore size={25} />,
        id: 3,
      },
      {
        name: "Reels",
        link: "/Reels",
        icon: <TbFreezeRow size={25} />,
        id: 4,
      },
      {
        name: "Messages",
        link: "/Messages",
        icon: <BsMessenger size={20} />,
        id: 5,
      },
      {
        name: "Notifications",
        link: "/Notifications",
        icon: <IoIosHeartEmpty size={25} />,
        id: 6,
      },
      {
        name: "Create",
        link: "/Create",
        icon: <MdCreateNewFolder size={25} />,
        id: 7,
      },
    ];
  return (
    <div className="w-full h-full relative">
      <Link className="mb-10 px-2 lg:block md:hidden  sm:hidden hidden">
        <img src="/images/Logo.png" alt="logo" className="invert w-[150px]" />
      </Link>
      <Link className="mb-10 px-2 lg:hidden md:block  sm:block block">
        <img
          src="/images/instagramLogo.avif"
          alt="logo"
          className="invert w-[150px]"
        />
      </Link>
      <div className="w-full h-auto flex items-start flex-col gap-y-2">
        {/* Loop other navlinks */}
        {sideBarItems.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            {item.icon}
            <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
              {item.name}
            </p>
          </Link>
        ))}
        {/* profile section */}
        <Link
          to="/profile"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
        >
          <img
            src="/images/profilepicture.jpg"
            alt="profile"
            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300"
          />
          <p>Profile</p>
        </Link>
      </div>
      {/* Threads and More Nav */}
      <div className="w-full h-auto absolute bottom-0 left-0 px-0">
        <Link
          to="/threads"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
        >
          <FaThreads size={25} />
          <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
            Threads
          </p>
        </Link>
        <Link
          to="/more"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
        >
          <IoMdMenu size={25} />
          <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
            More
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LargeNavbar

  