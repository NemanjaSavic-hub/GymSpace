import { useForm, type FieldValues } from 'react-hook-form';

interface LoginFormData{
  email: string,
  password: string
}

const Login = () => {
      
 const { register, handleSubmit, formState: { errors, dirtyFields }, } = useForm<LoginFormData>();
  const onSubmit = (data : FieldValues) => console.log(data);

  return (
    <>
        
        <div className="flex flex-col justify-center items-center h-full bg-blue-200">
        <h1 className="text-3xl mb-16">Welcome to GymSpace</h1>
        <h2 className="text-2xl mb-2">Log in:</h2>
        <div className="bg-amber-50 p-3 border-2 border-cyan-100 rounded-box">
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset text-xl">
                    <legend className="fieldset-legend ">Enter your email address:</legend>
                    <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className='email' />
                    {errors.email?.type === "required" && <p className="text-xs text-error">Email is required</p>}
                    {errors.email?.type === "pattern" && <p className="text-xs text-error">Enter valid email address</p>}
                </fieldset>
                <fieldset className="fieldset text-xl">
                    <legend className="fieldset-legend">Enter your password:</legend>
                    <input type="password" placeholder="Password" {...register("password", {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d).{5,}$/})} className='password' />
                    {errors.password && <p className="text-xs text-error">Password is required <br></br>Needs to have at least 1 character and 1 number <br></br>Needs to be at least 5 length</p>}
                    <p>{errors.password?.message}</p>
                </fieldset>
        
              <div>
                <button className="btn btn-primary mt-2" type="submit">Log in</button>
              </div>
        
            </form>
        </div>
        <p className="text-xs font-bold pt-2 text-slate-500 hover:text-blue-600 hover:cursor-pointer">You don't an account? Click here to registry</p>
        </div>
    </>
  )
}

export default Login