import { useState } from "react"
import Button from "./components/button.jsx"
import UserName from "./components/username.jsx"
import { counterContext } from "./contexts/context.js"
import { useContext } from "react"      


function App() {
    const [count, setCount] = useState(0);
    const Jeff = "Mohammad Faisal";

  return (
    <>
    <counterContext.Provider value={{count, setCount, Jeff}}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <UserName />
        <div className="bg-gray-800 w-1/3 h-1/2 p-5 rounded-lg shadow-lg">
            <Button />
            <div className="flex flex-col items-center justify-center h-full">  
                <div className="count text-5xl font-bold text-white">{count}</div>
                <button className="bg-purple-100 w-16 mt-4 py-1 rounded-full hover:bg-purple-300" onClick={()=>{setCount(count+1)}}>Add</button>

            </div>
        </div>
      </div>
    </counterContext.Provider>
    </>
  )
}

export default App
