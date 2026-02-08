import { useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import useAuthContext from '../hooks/useAuthContext';
// import { redirect } from "react-router";

interface LoginFormData{
  email: string,
  password: string
}

const Login = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const onSubmit = (data : FieldValues) => {
    // e.preventDefault();
    login(
      {email: data["email"], password: data["password"]},
      {
        onSuccess(data) {
          // localStorage.setItem("user", data)
          dispatch({type: "LOGIN", user: data})
          navigate("/home");
        },
        onError() {

        }
      }
    )
  }
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isLoading, isError} = useLogin();
  
  // const {error, isLoading}= useUser(loginDetails.email, loginDetails.password, () => navigate("/home"))

  return (
    <>
        
        <div className="flex flex-col justify-center items-center h-full bg-blue-200">
        <h1 className="text-3xl mb-16">Welcome to GymSpace</h1>
        <h2 className="text-2xl mb-2">Log in:</h2>
        <div className="bg-amber-50 p-3 border-2 border-cyan-100 rounded-box">
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset text-xl">
                    <legend className="fieldset-legend ">Enter your email address:</legend>
                    <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className='input' />
                    {errors.email?.type === "required" && <p className="text-xs text-error">Email is required</p>}
                    {errors.email?.type === "pattern" && <p className="text-xs text-error">Enter valid email address</p>}
                </fieldset>
                <fieldset className="fieldset text-xl">
                    <legend className="fieldset-legend">Enter your password:</legend>
                     <div className="join w-full">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d).{5,}$/})} className="input" />
                    <button type="button" className="btn join-item" onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? "Hide" : "Show"}
                    </button>
                    </div>
                    {errors.password && <p className="text-xs text-error">Password is required <br></br>Needs to have at least 1 character and 1 number <br></br>Needs to be at least 5 length</p>}
                </fieldset>
        
              
                <button className="btn btn-primary mt-2" disabled={isLoading} type="submit">{isLoading ? "Loging in...": "Log in"}</button>
                {isError && <p className="text-xs text-error mt-1">Login failed</p>}
        
            </form>
        </div>
        <Link to="/register" className="text-xs font-bold pt-2 text-slate-500 hover:text-blue-600 hover:cursor-pointer">You don't an account? Click here to registry</Link>
        </div>
        {/* {isError && <p className="text-xs text-error">Login failed</p>} */}
        
    </>
  )
}

export default Login