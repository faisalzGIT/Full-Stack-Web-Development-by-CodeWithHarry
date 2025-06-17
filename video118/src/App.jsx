import React, { useState, useCallback } from "react";
import Button  from "./components/Button";

function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8 w-80 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Count: <span className="text-blue-600">{count}</span></h2>
                <Button increment={increment} />
                <input type="text" placeholder="type something..." className="border border-gray-300 rounded p-2 mb-4 w-full" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    );  
}

export default Counter;