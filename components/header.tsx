import Image from "next/image";
import logo from "@/public/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";


export default function Header() {
  return (
    <header className="w-full z-30 bg-white  shadow-md">
      <div className="w-full  max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <div>
          <Image src={logo} alt="logo" width={120} height={120}></Image>
        </div>
        <div className="flex-1 flex items-center  gap-2 ml-10">
          <div className="flex w-full max-w-lg gap-2 ">
            <input
              className="bg-gray-100 w-md outline-none  px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-300"
              placeholder="What You looking for?"
            />

            <button className="px-10 py-2 rounded bg-green-700 text-white ">Search</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
         <div>
            <CiHeart size={30} />
          </div>
          <div>
            <LuMessageCircleMore size={25} />
          </div>
          <div>
            {" "}
            <p className="underline flex items-center">
              Abishek pariyar <GoTriangleDown className="ml-1" size={20} />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
