import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "X Clone is a clone made using Next Framework and Tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between mx-auto max-w-6xl">
            <div className="hidden sm:inline border-r h-screen">
              <SideBar />
            </div>
            <div className="flex-1"> {children}</div>
            <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
                />
              </div>
              <News />
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
