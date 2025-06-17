import { useState } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const{ register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

    const delay = (d) =>{
        return new Promise((resolve, reject)=>{
            setTimeout((d) =>{
                resolve();
            }, d)
        })
    }
  const onSubmit = async (data) => {
    await delay(2000); // Simulate a network request
    console.log(data);
    if(data.username === "Admin"){
        setError("myForm", { message:"Username Invalid"});
    }
    if(data.username === "Rohan"){
        setError("blocked", { message:"Username already exists"});
    }
  }

  return (
    <>
    {isSubmitting && <p>Submitting...</p>}
<form action="" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: "Username is required", minLength:{value: 5, message: "Username must be atleast 5 characters"}})} placeholder="Enter your username" /> <br /> <hr />
      {errors.username && <p>{errors.username.message} </p>}
      <input {...register("password", { required: "Password is required", maxLength:{value: 8, message: "Password must be atmost 8 characters"}})} placeholder="Enter your password" /> <br />  <hr />
      {errors.password && <p>{errors.password.message} </p>}

      {errors.myForm && <p>{errors.myForm.message}</p>}
      {errors.blocked && <p>{errors.blocked.message}</p>}

      <button disabled={isSubmitting} type='submit'>Submit</button>
</form>
    </>
  )
}

export default App
