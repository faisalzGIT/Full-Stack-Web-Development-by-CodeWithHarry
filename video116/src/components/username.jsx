import { useContext } from "react"
import { counterContext } from "../contexts/context.js";

function userName(){
    const Jeff = useContext(counterContext).Jeff;
    return (
        <div>
            <h1 className="mb-10 text-2xl font-bold text-white bg-red-800 px-3 py-2 rounded-2xl">{Jeff}</h1>
        </div>
    )
}
export default userName