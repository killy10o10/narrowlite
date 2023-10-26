/* eslint-disable react/prop-types */
import {Modal, Button, Label, Select} from "flowbite-react"

const SubscriptionModal = ({openModal, setOpenModal}) => {
  return (
    <>
      <Modal dismissible show={openModal === 'dismissible'} size="md"  onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Purchase Subscriptions</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form>
              <div className="w-fit" id="select">
                <div className="mb-2 block">
                  <Label htmlFor="months-to-buy" value="Select Months to Buy"/>
                </div>
                <Select id="months-to-buy" required>
                  {
                    [...Array(36)].map((_, index) => {
                      const option = <option key={index} value={index + 1}>{index + 1}</option>;
                      return option;
                    }) 
                  }
                </Select>
              </div>
              <Button size="lg" className="w-full mt-5">Make Payment</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SubscriptionModal
