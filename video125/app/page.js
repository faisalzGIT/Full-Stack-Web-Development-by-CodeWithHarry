"use client"
import { submitAction } from "@actions/form";
import { useRef } from 'react' 

export default function Home() {
  const ref = useRef();
  return <>
    <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}} className="text-center m-10">
        <div className="flex flex-col gap-4">
            <div className="flex gap-10">
                <label htmlFor="name">Name:</label>
                <input className="text-yellow-950 border border-gray-300 p-2 rounded bg-amber-100" type="text" name="name" id="namee" />
            </div>
            <div className="flex gap-10">
                <label htmlFor="addr">Address:</label>
                <input className="text-yellow-950 border border-gray-300 p-2 rounded bg-amber-100" type="address" name="addr" id="addrr" />
            </div>
            <button className="w-40 bg-blue-500 text-white p-2 rounded" type="submit">Submit</button>
        </div>
    </form>
  </>
}
