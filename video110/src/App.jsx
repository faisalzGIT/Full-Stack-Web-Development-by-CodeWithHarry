import { useRef, useState } from 'react'

function App() {
    const [showBtn2, setShowBtn2] = useState(false);
    function handleClick() {
        setShowBtn2(!showBtn2);
    }
    



    return (
    <>
        <div className="card bg-gray-950 m-0 p-0 w-[100vw] h-[100vh] flex justify-center items-center ">
            <div className="flex flex-col items-center gap-4">
                {showBtn2 && <button className='border rounded-3xl p-3 border-indigo-300 text-white'>I am BTN2</button>} //this is conditional rendering, this button will only show when showBtn2 is true
                {showBtn2 ? <button className='border rounded-3xl p-3 border-indigo-300 text-white'>I am True</button> : <button className='border rounded-3xl p-3 border-indigo-300 text-white'>I am False</button>}
                <button onClick={handleClick} className='border rounded-3xl p-3 border-indigo-300 text-white'>Toggle</button>
            </div>
        </div>    
    </>
  )
}

export default App
