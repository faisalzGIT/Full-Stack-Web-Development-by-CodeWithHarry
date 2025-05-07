import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function App() {
    const [data, setData] = useState(null);
    const cont = useRef(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            // console.log(res.data);
            setData(res.data);
        })
        .catch(err =>{console.log(err)})
    }, [])// Empty dependency array means it runs once when the component mounts

    return (
        <>
            <div ref={cont} className="containerr grid grid-cols-4 p-5 m-auto w-[95vw] h-[95vh] ">   
                {data ? (
                    data.map((post) => (
                        <div key={post.id} className="w-[21vw] h-[21vh] text-white bg-slate-900 rounded-lg p-3 m-2 hover:bg-slate-700 transition duration-300">
                            <div className="title font-extrabold ">{post.title}</div>
                            <div className="desc font-semibold text-[10px]">{post.body}</div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-2xl font-bold">Loading...</div>
                )}
            </div>
        </>
    );
  
}

export default App
