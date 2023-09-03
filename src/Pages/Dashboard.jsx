/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Dashboard() {
  const location = useLocation();
  const { state } = location;

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state) {
      setShowToast(true);
    }
  }, [state]);

  const notify = () => {
    if (showToast) {
      toast.success(`Welcome ${state}`);
    }
  };

  useEffect(() => {
    notify();
  }, [showToast]);

  return (
    <>
      <div className="min-h-screen p-2 flex items-center justify-center bg-gray-100">
        <ToastContainer />
        <div className="bg-white p-8 shadow-md rounded-lg w-96">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Two-Factor Authentication</h1>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">SMS Code</label>
              <input
                type="text"
                className="input input-bordered input-info w-full"
                placeholder="Enter the code from your SMS"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full">
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
