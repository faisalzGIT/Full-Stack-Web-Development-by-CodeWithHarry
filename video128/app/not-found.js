import React from "react";

export default function NotFound() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center font-sans">
            <h1 className="text-8xl font-extrabold m-0">404</h1>
            <p className="text-2xl mt-4 mb-8 opacity-70">Page Not Found</p>
            <a
                href="/"
                className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 no-underline"
            >
                Go Home
            </a>
        </div>
    );
}
