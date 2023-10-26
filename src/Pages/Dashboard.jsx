/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { MdOutlineSendToMobile } from "react-icons/md"
import { BiPurchaseTag } from "react-icons/bi"
import { FaSms } from "react-icons/fa"
import { BsBookmarksFill } from "react-icons/bs"

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
      toast.success(`Welcome ${state.username}`);
    }
  };

  useEffect(() => {
    notify();
  }, [showToast]);

  return (
<>
  <div className="min-h-screen flex flex-col items-center bg-cover bg-center relative" style={{ backgroundImage: "url('/illustration.svg')" }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <ToastContainer />
    <div className='flex gap-2 items-center self-center mt-10 z-10'>
      <Avatar rounded />
      <span className='font-bold text-2xl text-white'>{state.username}</span>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto z-10'>
      <div className="text-center">
        <Button color="light" size="xl" className="hover:bg-blue-600 w-full hover:text-white transition-transform transform hover:scale-105">
          <BiPurchaseTag className='text-2xl mr-2' />
          <p className='text-xl'>Purchase Subscriptions</p>
        </Button>
      </div>

      <div className="text-center">
        <Button color="light" size="xl" className="hover:bg-green-600 w-full hover:text-white transition-transform transform hover:scale-105">
          <MdOutlineSendToMobile className='text-2xl mr-2' />
          <p className='text-xl'>Send Ticket</p>
        </Button>
      </div>

      <div className="text-center">
        <Button color="light" size="xl" className="hover:bg-yellow-600 w-full hover:text-white transition-transform transform hover:scale-105">
          <FaSms className='text-2xl mr-2' />
          <p className='text-xl'>SMS Management</p>
        </Button>
      </div>

      <div className="text-center">
        <Button color="light" size="xl" className="hover:bg-indigo-600 w-full hover:text-white transition-transform transform hover:scale-105">
          <BsBookmarksFill className='text-2xl mr-2' />
          <p className='text-xl'>Book a Staff</p>
        </Button>
      </div>
    </div>
  </div>
</>


  );
}

export default Dashboard;
