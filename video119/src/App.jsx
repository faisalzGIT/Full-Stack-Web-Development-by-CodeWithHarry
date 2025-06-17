import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)
  const{ register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
    {isSubmitting && <p>Submitting...</p>}
<form action="" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: "Username is required" })} placeholder="Enter your username" /> <br /> <hr />
      {errors.username && <p>{errors.username.message} </p>}
      <input {...register("password", { required: "Password is required" })} placeholder="Enter your password" /> <br />  <hr />
      {errors.password && <p>{errors.password.message} </p>}

      <button disabled={isSubmitting} type='submit'>Submit</button>
</form>
    </>
  )
}

export default App
