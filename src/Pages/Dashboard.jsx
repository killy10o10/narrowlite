/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { MdOutlineSendToMobile } from "react-icons/md"
import { BiPurchaseTag } from "react-icons/bi"
import { FaSms } from "react-icons/fa"
import { BsBookmarksFill } from "react-icons/bs"
import SubscriptionModal from '../components/SubscriptionModal';

function Dashboard() {
  const location = useLocation();
  const { state } = location;

  const [showToast, setShowToast] = useState(false);
  const [openModal, setOpenModal] = useState(undefined);

  const toggleModal = () => {
    setOpenModal('dismissible')
  }
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
      <div className="min-h-screen  flex flex-col items-center bg-cover bg-center relative -z-0" style={{ backgroundImage: "url('/loginbg.png')" }}>
        <div className="absolute -z-10 inset-0 bg-black opacity-70"></div>
        <SubscriptionModal openModal={openModal} setOpenModal={setOpenModal} />
        <ToastContainer />
        <Card className='mt-10 z-10'>
          <div className='flex gap-2 items-center self-center'>
            <Avatar rounded />
            <span className='font-bold text-xl'>{state.username}</span>
          </div>
          <span><span className='font-bold'>Name of software:</span> Bookings CMS</span>
          <span><span className='font-bold'>Software Expiry Date:</span> 25.05.23</span>
          <span><span className='font-bold'>Number of Brances:</span> 4</span>
          <span><span className='font-bold'>Cost/Branch: GH₵</span> 300</span>
        </Card>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-20 z-10 bg-slate-300 dark:bg-transparent px-4 py-5'>
          <div className="text-center">
            <Button onClick={toggleModal} color="light" size="xl" className="w-full transition-transform transform hover:scale-105">
              <BiPurchaseTag className='text-2xl mr-2' />
              <p className='text-xl'>Purchase Subscriptions</p>
            </Button>
          </div>

          <div className="text-center">
            <Button color="light" size="xl" className="w-full transition-transform transform hover:scale-105">
              <MdOutlineSendToMobile className='text-2xl mr-2' />
              <p className='text-xl'>Send Ticket</p>
            </Button>
          </div>

          <div className="text-center">
            <Button color="light" size="xl" className="w-full transition-transform transform hover:scale-105">
              <FaSms className='text-2xl mr-2' />
              <p className='text-xl'>SMS Management</p>
            </Button>
          </div>

          <div className="text-center">
            <Button color="light" size="xl" className="w-full transition-transform transform hover:scale-105">
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
