import React, { useState, useMemo } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const expensiveComputation = ((num) => { 
        console.log("Expensive computation...");
        for (let i = 0; i < 1000000000; i++) {}
        return num * 2;
    })

    const doubleCount = useMemo(()=>{
        return expensiveComputation(count);
    }, [count]);



    return (<>
        <div className='gap-3 flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className="text-center text-4xl font-extrabold">useMemo</h1>
            <div className="border w-1/4 h-1/4  flex flex-col gap-5 items-center justify-center bg-white shadow-lg rounded-lg">
                <h2 className="text-center text-2xl font-bold">Count:{doubleCount}</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
                <input type="text" className='border' placeholder='Type here' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
        </div>
    </>)
}
export default App;
