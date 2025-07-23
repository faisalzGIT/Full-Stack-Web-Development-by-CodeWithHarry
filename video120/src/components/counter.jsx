import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/counter/counterSlice.js'
// import styles from './Counter.module.css'

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
      <div>
        <div style={{ padding: '20px', border: '1px solid black', width: '350px',display:'flex',margin:'auto', gap:'40px', margin: '20px auto', textAlign: 'center' }}>
        <button  aria-label="Decrement value"  onClick={() => dispatch(decrement())}>  Decrement</button>
        <span>{count}</span>
        <button  aria-label="Increment value"  onClick={() => dispatch(increment())}>  Increment</button>
      </div>
    </div>
  );
}