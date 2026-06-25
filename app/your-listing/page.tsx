import Link from "next/link";
import data from "../data";
import Image from "next/image";
export default function Listing() {
  return (
    <div className="bg-gray-100 px-5 py-5 h-full">
      <div className=" w-228 shadow-sm flex  my-4 p-3  rounded-xl bg-white h-35">
        <div>
          <h1 className="text-xl px-5 pt-3 font-bold">
            Do you want to post your food listing?{" "}
          </h1>
          <div className="bg-green-700 ml-5    w-205 text-center px-5 py-3 text-white rounded-lg  mt-6">
            <div>
              {" "}
              <Link href="/">Create New Listing</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-228 p-5 w-220 bg-white shadow-sm  rounded-xl">
        <div className="">
          <h1 className="font-bold text-xl">Your Listing</h1>
          <p>Update your listing </p>
        </div>
        <div>
          {data.slice(0, 4).map((listing, index) => (
            <div className="flex p-5 shadow-sm rounded-xl my-5 bg-gray-50 " key={index}>
              <div>
                <Image
                  src={listing.image}
                  alt={listing.name}
                  width={50}
                  height={60}
                  className="w-40 h-40 object-cover rounded-lg  mr-10"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg">{listing.name}</h1>
                <p>${listing.price}</p>
                <p className="text-gray-700">Active</p>
                <p className="text-sm text-gray-500">You can mark it sold, Update or delete the listing</p>
                <div className="">
                    <button className="px-5 py-3 rounded-lg text-green-700 shadow-sm bg-white m-3">Mark as sold</button>
                    <button className="px-5 py-3 text-red-700 rounded-lg shadow-sm bg-white m-3">Delete Listing</button>
                    <button className="px-5 py-3 rounded-lg shadow-sm bg-white m-3">Edit Listing</button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
