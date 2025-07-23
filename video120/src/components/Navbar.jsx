import { useSelector } from 'react-redux'


export default function Navbar({contact}) {
    
  const count = useSelector(state => state.counter.value)
  return (<>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ul style={{listStyle: 'none', display: 'flex', gap: '20px', padding: '10px', border: '1px solid black', width: '500px', justifyContent: 'space-between'}}>
        <li>Home</li>
        <li>About</li>
        <li>{contact}</li>
        <li>Counter: {count}</li>
      </ul>
    </div>
</>  )
}


