import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "X Clone is a clone made using Next Framework and Tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between mx-auto max-w-6xl">
          <div>
            <SideBar />
          </div>
          <div> {children}</div>
          <div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
