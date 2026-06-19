import Link from "next/link";
import data from "../data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";



export default function Home() {
  return (
    <>
         <div className="">
            <h1 className="text-2xl p-5 uppercase font-bold text-green-700">A marketplace for homemade food</h1>
        <h1 className="pl-5 text-lg">Latest Listing you may like</h1>
      </div>
      <div className="justify-center  flex flex-wrap gap-10">
        {data.map((data,index)=>(
            <div  key={index} className=" rounded overflow-hidden bg-white shadow-md">
                <Image
                src={data.image}
                alt={data.name} 
                width={250}  
                height={200}         
                className="w-65 h-45"/>
                                <h1 className="font-bold capitalize py-2 px-5">{data.name}</h1>

               
                <p className="text-black/60 px-5 text-sm">{data.address}</p>
 <div className="flex items-center justify-between w-full">
                    <h1 className="px-5 py-3">${data.price}</h1>

                <div className="pr-5"><CiHeart size={25}/></div>
                </div>
            </div>
        ))}
      </div>
    </>
  );
}
