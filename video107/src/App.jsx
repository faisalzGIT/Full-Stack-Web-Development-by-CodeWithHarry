import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);

  return (
    <>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column',gap:'10px', height:'100vh', width:'100vw'}}>
        <h1>count is {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase 1</button>
        <button onClick={()=>{setCount(count+2)}}>Increase 2</button>
      </div>
    </>
  )
}

export default App
