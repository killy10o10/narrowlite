/* eslint-disable react/prop-types */
import {Modal, Button, Label, Select, Radio, TextInput} from "flowbite-react"
import { useState } from "react";

const SubscriptionModal = ({openModal, setOpenModal}) => {

  const [formData, setFormData] = useState({
    monthsToBuy: 1,
    paymentService: "",
    phoneNumber: "",
    costPerMonth: 300,
    branches: 4
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    setOpenModal(undefined)
  }

  const totalSubscribtionCost = formData.branches * formData.monthsToBuy * formData.costPerMonth
  return (
    <>
      <Modal popup show={openModal === 'pop-up'}  onClose={() => setOpenModal(undefined)}>
        <Modal.Header className="dark:border-gray-600 p-5 border-b">Purchase Subscriptions</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form>
              <div className="flex justify-between my-5" id="select">
                <div className="w-fit">
                  <div className="mb-2 block">
                    <Label className="font-bold text-lg" htmlFor="months-to-buy" value="Select Months to Buy"/>
                  </div>
                  <Select  name="monthsToBuy" onChange={handleChange} id="months-to-buy" required>
                    {
                      [...Array(36)].map((_, index) => {
                        const option = <option key={index} value={index + 1}>{index + 1}</option>;
                        return option;
                      }) 
                    }
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="font-bold text-lg">Total Subscribtion Cost</Label>
                  <p className="text-lg text-center">GH₵ {totalSubscribtionCost}</p>
                </div>
              </div>
              <h3 className="text-center font-bold text-2xl my-8">Choose Payment Method</h3>
              <div id="payment-method" className="flex flex-col md:flex-row items-center justify-center gap-10 mt-5">
                <div className="flex items-center">
                  <Radio onChange={handleChange} id="mtn"name="paymentService" value="mtn"/>
                  <Label className="h-[124px] flex flex-col items-center justify-center" htmlFor="mtn"><img src="/mtn.svg" alt="mtn mobile money" /> <span className="mt-auto">MTN Mobile Money</span></Label>
                </div>
                <div className="flex items-center">
                <Radio onChange={handleChange} id="vodafone"name="paymentService" value="vodafone"/>
                <Label className="h-[124px] flex flex-col items-center justify-center" htmlFor="vodafone"><img src="/vodafone.svg" alt="vodafone cash" /><span className="mt-auto">Vodafone Cash</span></Label>
                </div>
                <div className="flex items-center">
                  <Radio onChange={handleChange} id="airtel-tigo"name="paymentService" value="airtel-tigo"/>
                  <Label className="h-[125px] flex flex-col items-center justify-center" htmlFor="airtel-tigo"><img src="/airtel-tigo.svg" alt="Airtel Tigo Money" /> <span className="mt-auto">Airtel Tigo Money</span></Label>
                </div>
              </div>
              <div id="total-cost" className="flex items-center justify-center my-12">
                 <Label htmlFor="phone" className="font-bold text-xl flex items-center gap-2">Payment Number: <TextInput id="phone" className="w-fit" name="phoneNumber" onChange={handleChange} placeholder="0543123456" type="tel" /></Label> 
              </div>
              <Button onClick={handleSubmit} type="submit" size="lg" className="w-full mt-5">Process & Pay</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SubscriptionModal
