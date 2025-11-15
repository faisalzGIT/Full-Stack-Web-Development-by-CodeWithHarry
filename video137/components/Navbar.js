"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const showNavbar = ["/", "/generate"].includes(pathname);

    return (<>
    {showNavbar &&
        <nav className="bg-gray-100 w-[90vw] flex justify-between items-center fixed top-10 right-[5vw] rounded-full p-4  shadow">
            <div className="logo pl-5 flex gap-2 items-center">
                {/* Logo */}
                <Link href={"/"}><Image loading="eager" width={114} height={114} src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className="nav-desktop-logo" /></Link>

            </div>
            <div className='w-[60vw] pl-12'>
                <ul className="flex gap-10 text-[17px] text-[#112e0a]">
                    <Link href="/"><li>Products</li></Link>
                    <Link href="/"><li>Templates</li></Link>
                    <Link href="/"><li>Marketplace</li></Link>
                    <Link href="/"><li>Learn</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                </ul>
            </div>

            <div className="flex gap-3">
                <button className="login bg-gray-200 hover:bg-gray-300 text-lg text-gray-800 font-semibold px-6 p-4 rounded-lg">Log in</button>
                <button className="signup bg-gray-900 text-white font-semibold p-5 px-8 rounded-full">Sign up free</button>
            </div>
        </nav>
    }
    </>);
};

export default Navbar;
