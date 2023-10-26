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
      <div className="min-h-screen p-2 flex flex-col items-center bg-gray-100">
        <ToastContainer />
        <div className='flex gap-2 items-center self-center mt-10'>
          <Avatar rounded />
          <span className='font-bold text-2xl text-black'>{state.username}</span>
        </div>

        <div className='grid md:grid-cols-3 gap-4 my-auto'>
          <Button color="dark" size="xl"><BiPurchaseTag className='text-2xl mr-2'/> <p className='text-xl'>Purchase Subscriptions</p></Button>
          <Button color="dark" size="xl" className="flex items-center"><MdOutlineSendToMobile className='text-2xl mr-2' /> <p className='text-xl'>Send Ticket</p></Button>
          <Button color="dark" size="xl" className="flex items-center"><FaSms className='text-2xl mr-2' /> <p className='text-xl'>SMS Management</p></Button>
          <Button color="dark" size="xl" className="flex items-center"><BsBookmarksFill className='text-2xl mr-2' /> <p className='text-xl'>Book a Staff</p></Button>
        </div>
      </div>
    </>

  );
}

export default Dashboard;
