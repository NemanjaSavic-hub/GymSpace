import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form"

interface RegisterFormData{
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string
}

function Register() {
  const { register, handleSubmit, formState: {errors}} = useForm<RegisterFormData>();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data : FieldValues) => console.log(data);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full bg-blue-200">
        <h1 className="text-3xl font-bold mb-10">Register your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            
          <legend className="fieldset-legend">Your details</legend>
          <label className="label">Firstname</label>
          <input type="text" className="input" placeholder="Firstname" {...register("firstname", {required: true})}/>
          {errors.firstname?.type === "required" && <p className="text-xs text-error">Firstname is required</p>}

          <label className="label">Lastname</label>
          <input type="text" className="input" placeholder="Lastname" {...register("lastname", {required: true})} />
          {errors.lastname?.type === "required" && <p className="text-xs text-error">Lastname is required</p>}

          <label className="label">Username</label>
          <input type="text" className="input" placeholder="Username" {...register("username", {required: true})}/>
          {errors.username?.type === "required" && <p className="text-xs text-error">Username is required</p>}

          <label className="label">Email</label>
          <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className="input"/>
          {errors.email?.type === "required" && <p className="text-xs text-error">Email is required</p>}
          {errors.email?.type === "pattern" && <p className="text-xs text-error">Enter valid email address</p>}

          <label className="label">Password</label>
          <div className="join w-full">
          <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d).{5,}$/})} className="input" />
          {errors.password && <p className="text-xs text-error">Password is required <br></br>Needs to have at least 1 character and 1 number <br></br>Needs to be at least 5 length</p>}
          <button type="button" className="btn join-item" onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? "Hide" : "Show"}
        </button>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Register