/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";

function LoginForm({ onLogin }) {
  const isLoading = useSelector(state => state.auth.loading);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="username" className="label py-0 text-gray-700 font-medium text-sm">
          Username
        </label>
        <input
          id="username"
          name="username"
          onChange={handleChange}
          type="text"
          className="input input-bordered input-info w-full"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="label py-0 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
          className="input input-bordered input-info w-full"
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleLogin} disabled={isLoading} type="submit" className="btn btn-primary w-full mt-3">
        {isLoading && <span className="loading loading-spinner"></span>}
        { isLoading ? 'Logging In' : 'Log In'}
      </button>
    </form>
  );
}

export default LoginForm;
