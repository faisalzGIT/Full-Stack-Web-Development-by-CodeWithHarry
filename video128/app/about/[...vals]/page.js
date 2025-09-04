// "use client"
import React from "react";

export default function AboutPage({ params }) {
    console.log(params)
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
                <p className="text-gray-600 mb-6">
                    Welcome to our About page! We are passionate about building amazing web applications using modern technologies like React and Tailwind CSS.
                </p>
                {params?.vals && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Dynamic Params:</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            {/* {params.vals.map((val, idx) => (
                                <li key={idx}>{val}</li>
                            ))} */}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}