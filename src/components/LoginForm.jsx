/* eslint-disable react/prop-types */
import { useState } from "react";

function LoginForm({ onLogin }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(state);
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
      <button onClick={handleLogin} type="submit" className="btn btn-primary w-full mt-3">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
