import React from "react";

const Button = React.memo(({increment})=>{
    console.log("Button rendered");
    return (
        <button onClick={increment} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" >
                    Increment
                </button>
    )
});
export default Button;