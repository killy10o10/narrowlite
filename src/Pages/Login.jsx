import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";

import backgroundImg from '/loginbg.png';
import logo from '/narrowlite.svg';
import { signIn } from "../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogin = async (formData) => {
    const { username, password } = formData;
    if (username.length === 0 && password.length === 0) {
      toast.error("Please provide a username and password!");
    } else if (!password) {
      toast.error("Please provide a password!");
    } else if (!username) {
      toast.error("Please provide a username!");
    } else {
      const actionResult = await dispatch(signIn(formData));
      try {
        if(actionResult.error) {
          toast.error("wrong username or password!");
        }
        else {
          const userData = actionResult.payload;
          navigate('dashboard', { state: {userData, username} });
        }
      } catch (error) {
        toast.warning(error)
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen p-2 flex items-center justify-center bg-gray-100">
        <div className="hidden md:block md:w-1/2 h-screen overflow-hidden">
          <img src={backgroundImg} alt="Background" className="object-cover h-full w-full" />
        </div>
        <div className="bg-white px-4 py-7 shadow-md rounded-lg w-96">
          <div className="text-center mb-6">
            <img src={logo} alt="Company Logo" className="w-16 mx-auto" />
            <h1 className="text-2xl font-semibold">NarrowLite International</h1>
          </div>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </>
  );
}

export default Login;
