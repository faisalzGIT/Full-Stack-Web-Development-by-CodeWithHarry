import React from "react";
import Navbar from "./components/navbar";   


function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
                <h1 className="text-4xl font-bold mb-4">Welcome to React</h1>
                <p className="text-lg mb-2">
                    To get started, edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to reload.
                </p>
                <p className="text-lg">
                    Learn React by visiting{" "}
                    <a
                        href="https://reactjs.org"
                        className="text-blue-500 hover:underline"
                    >
                        reactjs.org
                    </a>
                </p>
            </div>
        </>
    );
}

export default App;
