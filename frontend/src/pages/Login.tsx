import { useForm, type FieldValues } from 'react-hook-form';


const Login = () => {
      
 const { register, handleSubmit, formState: { errors }, control } = useForm();
  const onSubmit = (data : FieldValues) => console.log(data);
  console.log(errors);

  return (
    <>
        
        <div className="flex flex-col justify-center items-center h-full bg-blue-200">
        <h1 className="text-3xl mb-16">Welcome to GymSpace</h1>
        <h2 className="text-2xl">Log in:</h2>
        <div className="bg-amber-50 p-3 border-2 border-cyan-100 rounded-box">
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset text-xl">
                    <legend className="fieldset-legend ">Enter your email address:</legend>
                    <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className='email' />
                    {/* <p className="label">Optional</p> */}
                </fieldset>
                <fieldset className="fieldset text-xl">
                    <legend className="fieldset-legend">Enter your password:</legend>
                    <input type="password" placeholder="Password" {...register("Password", {required: true})} className='password' />
                    {/* <p className="label">Optional</p> */}
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