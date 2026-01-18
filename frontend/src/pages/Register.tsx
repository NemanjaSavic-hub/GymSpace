
function Register() {
  return (
    
    <>
      <div className="flex flex-col justify-center items-center h-full bg-blue-200">
        <h1 className="text-3xl font-bold mb-10">Register your account</h1>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Your details</legend>
          <label className="label">Firstname</label>
          <input type="text" className="input" placeholder="Firstname" />
          <label className="label">Lastname</label>
          <input type="text" className="input" placeholder="Lastname" />
          <label className="label">Username</label>
          <input type="text" className="input" placeholder="Username" />
          <label className="label">Email</label>
          <input type="text" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="text" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Register