import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 bg-purple-800 flex justify-between px-3 items-center text-white'>
        <div className="left font-bold text-2xl"><Link href="/">BitLinks</Link></div>
        <ul className="right flex justify-center gap-4 items-center">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contactus"><li>Contact us</li></Link>

            <li className='flex gap-2 text-black'>
                <Link href="/generate"><button className="rounded font-semibold bg-purple-100 shadow-lg p-2">Try Now</button></Link>
                <Link href="/github"><button className='rounded font-semibold bg-purple-100 shadow-lg p-2'>Github</button></Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar