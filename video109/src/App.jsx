import { useState, useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0); //
    const btn2 = useRef(); 
    const btn = useRef(); 
    //REFERING TO THE BUTTON, DIRECTLY ACCESSING THE DOM ELEMENT
    //useRef is used to access the DOM element directly, without using useState
    //useRef is used to store a mutable value that does not cause re-render when updated
    //useRef is used to store a reference to a DOM element, so that we can access it directly
    
    function setCountAndClick() {
        setCount((count) => count + 1);
        handleClick();
    }

    function handleClick() {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        let rgb = `rgb(${a}, ${b}, ${c})`;
        console.log(rgb);
        btn.current.style.backgroundColor = rgb;
        btn.current.style.color = 'red';
        btn.current.style.weight = 'bold';
    }
    
    function setCountAndClick2() {
        setCount2((count2) => count2 + 1);
        handleClick2();
    }

    function handleClick2() {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        let rgb = `rgb(${a}, ${b}, ${c})`;
        btn2.current.style.backgroundColor = rgb;
        btn2.current.style.color = 'red';
        btn2.current.style.weight = 'bold';
    }

    const a = useRef(0);
    a.current += 1;

    return (
        <>
            <div className='bg-black text-white h-[100vh] w-[100vw] p-0 m-0'>
                    <div className="card flex flex-col items-center justify-center h-full gap-3">
                        <button className='bg-blue-900 p-5 border rounded-full' onClick={setCountAndClick} ref={btn}>
                        count is {count}
                        </button>
                        <button className='bg-blue-900 p-5 border rounded-full' onClick={setCountAndClick2} ref={btn2}>
                        count is {count2}
                        </button>
                    </div>
            </div>
        </>
    )
}

export default App
