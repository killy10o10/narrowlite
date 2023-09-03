import logo from '/narrowlite.svg';


function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="bg-white p-8  shadow-md rounded-lg w-96">
        <div className="text-center mb-6">
          <img src={logo} alt="Company Logo" className="w-16 mx-auto" />
          <h1 className="text-2xl font-semibold">NarrowLite</h1>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor='username' className="label py-0 text-gray-700 font-medium text-sm">Username</label>
            <input
              id='username'
              type="text"
              className="input input-bordered input-info w-full max-w-xs"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor='password' className="label py-0 text-sm font-medium text-gray-700">Password</label>
            <input
              id='password'
              type="password"
              className="input input-bordered input-info w-full max-w-xs"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-3"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
