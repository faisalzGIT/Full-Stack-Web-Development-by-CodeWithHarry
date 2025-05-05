import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="m-0 text-lg">My App</h1>
            <ul className="list-none flex m-0 p-0">
                <li className="ml-4">
                    <a href="/" className="text-white no-underline">Home</a>
                </li>
                <li className="ml-4">
                    <a href="/about" className="text-white no-underline">About</a>
                </li>
                <li className="ml-4">
                    <a href="/contact" className="text-white no-underline">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
