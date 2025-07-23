import './App.css'
import Navbar from './components/navbar.jsx'
import Counter from './components/counter.jsx'

export default function App() {
  return (
    <>
    <h1>Redux - First time </h1>
      <Navbar contact={"9876545678"} />
      <Counter />
    </>
  );
}