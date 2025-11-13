import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white w-[90vw] flex justify-between items-center absolute top-10 right-[5vw] rounded-full p-4  shadow">
      <div className="logo pl-5 flex gap-2 items-center">
        {/* Logo */}
        <Image loading="eager" width={114} height={114} src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" class="nav-desktop-logo"/>

      </div>
      <div className='w-[60vw] pl-12'>
        <ul className="flex gap-10 text-gray-900">
          <li>Products</li>
          <li>Templates</li>
          <li>Marketplace</li>
          <li>learn</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="login bg-gray-200 hover:bg-gray-300 text-lg text-gray-800 font-semibold px-6 p-4 rounded-lg">Log in</button>
        <button className="signup bg-gray-900 text-white font-semibold p-5 px-8 rounded-full">Sign up free</button>
      </div>
    </nav>
  );
};

export default Navbar;
