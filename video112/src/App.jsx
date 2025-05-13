import { useRef, useState } from 'react'

function App() {
    const btn3 = useRef(null);      
    // const [name, setName] = useState("Harry")
    const [form, setForm] = useState({})
    
      const handleChange = (e) => {
        // setName(e.target.value)
        setForm({...form, [e.target.name]:e.target.value})
        console.log(form)
      }
    
return (
    <>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">React Event Handling</h1>
            {/* <div className="mb-4">
                <button onClick={handleClick} className="px-4 py-2 bg-amber-500 text-white rounded-md text-lg hover:bg-amber-600 transition">Click me
                </button>
            </div> */}
            <input type="text" name="email" value={form.email ? form.email : ""} onChange={handleChange} className="mb-2 p-2 border border-gray-300 rounded-md text-sm w-64"placeholder="Enter your email"
            />
            <input type="text" name="phone" value={form.phone ? form.phone : ""} onChange={handleChange} className="p-2 border border-gray-300 rounded-md text-sm w-64"placeholder="Enter your phone"
            />
        {/* <pre className="mt-4 border p-5 px-10">{JSON.stringify(form, null, 2)}</pre> */}
        </div>
    </>
)
}

export default App