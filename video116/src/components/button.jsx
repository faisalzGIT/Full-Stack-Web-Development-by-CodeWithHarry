import { useContext } from "react";
import { counterContext } from "../contexts/context.js";

function Button() {
    const {count, setCount} = useContext(counterContext);
    return (
        <button
            onClick={() => setCount(count + 1)} className="text-4xl font-extrabold bg-purple-900 hover:bg-violet-800 p-3 text-white w-full h-16 rounded-2xl flex justify-center items-center m-auto">
            Counter
        </button>
    );
}

export default Button;