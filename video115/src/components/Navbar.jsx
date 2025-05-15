
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" bg-purple-900 h-[5vh] text-purple-100 flex justify-start items-center ">
      <NavLink className={(isActive)=>{return isActive? "bg-purple-700 mx-4 text-purple-100 py-0.5 px-1.5 rounded-xl no-underline hover:no-underline focus:no-underline":"mx-4 text-purple-100 no-underline hover:no-underline focus:no-underline py-0.5 px-1.5 rounded-xl "}} to="/" >Home</NavLink>
      <NavLink className={(isActive)=>{return isActive? "bg-purple-700 mx-4 text-purple-100 py-0.5 px-1.5 rounded-xl no-underline hover:no-underline focus:no-underline":"mx-4 text-purple-100 no-underline hover:no-underline focus:no-underline py-0.5 px-1.5 rounded-xl "}} to="/services" >Services</NavLink>
      <NavLink className={(isActive)=>{return isActive? "bg-purple-700 mx-4 text-purple-100 py-0.5 px-1.5 rounded-xl no-underline hover:no-underline focus:no-underline":"mx-4 text-purple-100 no-underline hover:no-underline focus:no-underline py-0.5 px-1.5 rounded-xl "}} to="/about" >About</NavLink>
      <NavLink className={(isActive)=>{return isActive? "bg-purple-700 mx-4 text-purple-100 py-0.5 px-1.5 rounded-xl no-underline hover:no-underline focus:no-underline":"mx-4 text-purple-100 no-underline hover:no-underline focus:no-underline py-0.5 px-1.5 rounded-xl "}} to="/contact" >Contact</NavLink>
      <NavLink className={(isActive)=>{return isActive? "bg-purple-700 mx-4 text-purple-100 py-0.5 px-1.5 rounded-xl no-underline hover:no-underline focus:no-underline":"mx-4 text-purple-100 no-underline hover:no-underline focus:no-underline py-0.5 px-1.5 rounded-xl "}} to="/user/:username" >Username</NavLink>
    </nav>
  )
}

export default Navbar
