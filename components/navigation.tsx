import { link } from "fs";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

export default function NavBar() {
  const links = [
    { name: "Home", href: "/", icon: <FaHome size={25} /> },
    {
      name: "Your Listing",
      href: "/your-listing",
      icon: <IoMdListBox size={25} />,
    },
    {
      name: "Notification",
      href: "/notification",
      icon: <IoIosNotifications size={25} />,
    },
    { name: "Inbox", href: "/inbox", icon: <LuMessageCircleMore size={25} /> },
    { name: "Favourites", href: "/favourite", icon: <CiHeart size={25} /> },
  ];
  return (
    <div>
      <div className="flex flex-col pt-5 px-1 h-screen bg-white   w-80 shadow-[4px_0_10px_rgb(0,0,0,.1)]">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className=" hover:bg-gray-100 rounded-xl flex gap-2 items-center mx-2 my-2 px-5 py-2 "
          >
            <div className="bg-gray-200 p-2 rounded-full">{link.icon}</div>
            <div>{link.name}</div>
          </Link>
        ))}
        <div className=" flex justify-center bg-green-100 hover:bg-green-200 text-green-700 rounded-xl flex gap-2 items-center mx-2 my-2 px-5 py-2 ">
          <Link href="/">Add New Listing</Link>
        </div>
      </div>
    </div>
  );
}
