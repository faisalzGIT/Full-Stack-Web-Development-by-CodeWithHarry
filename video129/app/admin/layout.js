import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";   
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Admin: CaseBook - See all the cases you have filed",
  description: "A comprehensive overview of all your filed cases.",
};

export default function AdminLayout({ children }) {
  return (
    <>  
        <div>Admin Navbar</div>
        {children}
    </>
      
  );
}
