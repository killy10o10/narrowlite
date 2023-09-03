import logo from '/narrowlite.svg';
import backgroundImg from '/loginbg.png'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'flowbite-react';
import {HiX} from 'react-icons/hi'

function Login() {

  const navigate = useNavigate()

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = state;
    if (username.length === 0 && password.length === 0) {
      setMessage('Please provide a username and password!');
    } else if (!password) {
      setMessage('Please provide a password!');
    } else if (!username) {
      setMessage('please provide a username!');
    }
    else {
      setMessage(null)
      navigate('dashboard')
    }

  }

  return (
    <>
        {message && 
      <div className='absolute m-5'>
             <Toast>
             <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
               <HiX className="h-5 w-5" />
             </div>
             <div className="ml-3 text-sm font-normal">
               {message}
             </div>
             <Toast.Toggle />
           </Toast>
      </div>
      }
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
                name='username'
                onChange={handleChange}
                type="text"
                className="input input-bordered input-info w-full"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor='password' className="label py-0 text-sm font-medium text-gray-700">Password</label>
              <input
                id='password'
                name='password'
                onChange={handleChange}
                type="password"
                className="input input-bordered input-info w-full"
                placeholder="Enter your password"
              />
            </div>
            <button onClick={handleLogin} type="submit" className="btn btn-primary w-full mt-3">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
