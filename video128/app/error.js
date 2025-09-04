"use client"

export default function ErrorAsteroid() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative overflow-hidden">
            {/* Asteroid */}
            <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-400 rounded-full shadow-2xl animate-bounce">
                    {/* Craters */}
                    <div className="absolute top-8 left-10 w-6 h-6 bg-gray-800 rounded-full opacity-60"></div>
                    <div className="absolute top-20 left-20 w-4 h-4 bg-gray-700 rounded-full opacity-50"></div>
                    <div className="absolute top-16 left-6 w-3 h-3 bg-gray-600 rounded-full opacity-40"></div>
                </div>
            </div>
            {/* Error Message */}
            <h1 className="mt-48 text-5xl font-bold">9103</h1>
            <p className="mt-4 text-xl">Oops! An error asteroid hit this page.</p>
            <a
                href="/"
                className="mt-8 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                Go Home
            </a>
        </div>
    );
}