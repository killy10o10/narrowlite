import logo from '/narrowlite.svg';
import backgroundImg from '/loginbg.png'; 

function Login() {
  return (
    <div className="min-h-screen p-2 flex items-center justify-center bg-gray-100">
      {/* Image on the Side */}
      <div className="hidden md:block md:w-1/2 h-screen overflow-hidden">
        <img src={backgroundImg} alt="Background" className="object-cover h-full w-full" />
      </div>
      <div className="bg-white px-4 py-7 shadow-md rounded-lg w-96">
        <div className="text-center mb-6">
          <img src={logo} alt="Company Logo" className="w-16 mx-auto" />
          <h1 className="text-2xl font-semibold">NarrowLite International</h1>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor='username' className="label py-0 text-gray-700 font-medium text-sm">Username</label>
            <input
              id='username'
              type="text"
              className="input input-bordered input-info w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor='password' className="label py-0 text-sm font-medium text-gray-700">Password</label>
            <input
              id='password'
              type="password"
              className="input input-bordered input-info w-full"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
