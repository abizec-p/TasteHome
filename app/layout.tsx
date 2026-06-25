import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation";
import Header from "@/components/header";
import Filters from "@/components/filter";


export const metadata: Metadata = {
  title: "TasteHome - Food Marketplace App",
  description: "Name of the app is tastehome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen  h-full ">
        <div>
          <div  className="sticky z-20 top-0 w-full ">
            {" "}
            <Header  />
          </div>
          <div className=" relative flex h-full">
            <div className="fixed z-20  ">
            <NavBar />
            </div>
            <div className=" flex-1 z-10 pl-80 h-full bg-gray-100"> {children}</div>
            <div className="fixed flex-1 h-full z-20 top-20 right-5  ">
              <Filters/>
            </div>
          </div>
        </div>
        <div className="z-30 bg-white">footer</div>
      </body>
    </html>
  );
}
