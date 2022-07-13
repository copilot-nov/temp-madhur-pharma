import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';


const AddBatchTextOrImg = (props) => {
    const { open, closeModal, setOpen } = props;

    const handleOnChange = (e) => {
        // let { name, value, type } = e.target
        // setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // let copypayload = payload
        // copypayload.po_id = POID?.po_id
        // copypayload.sku_id = SKU?.id
        // copypayload.product_id = Product?.id
        // copypayload.uom = UOM?.data_code

        // // console.log(copypayload)
        // let istrue = await ADD_PRODUCTION_BATCH(copypayload)
        // if (istrue?.status) {
        //     setPayload(defaultState)
        //     setHandleResponse(istrue)
        //     setOpen(false)
        // } else {
        //     setHandleResponse(istrue)
        // }
    }

    return (
        <div>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="lg:w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="mx-1 border-b border-gray-900 text-lg font-medium text-green-900 sm:px-6 px-2 py-2"
                                    >
                                        Add New Batch CheckList
                                    </Dialog.Title>
                                    <div className="md:col-span-3">
                                        <form
                                            onSubmit={handleSubmit}
                                            action="#" method="POST">
                                            <div className="overflow-hidden">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-2 sm:gap-4">
                                                        <div className="col-span-6 sm:col-span-6">
                                                            <div className='w-full items-start'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Comment
                                                                </p>
                                                                <textarea
                                                                    rows={2}
                                                                    id="comment"
                                                                    required
                                                                    name="comment"
                                                                    onChange={handleOnChange}
                                                                    // defaultValue={payload?.comment}
                                                                    className="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-900"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-span-6 sm:col-span-6">
                                                            <div className='w-full items-start'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Notes
                                                                </p>
                                                                <textarea
                                                                    rows={2}
                                                                    id="notes"
                                                                    required
                                                                    name="notes"
                                                                    // onChange={handleOnChange}
                                                                    // defaultValue={payload?.notes}
                                                                    className="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-900"
                                                                />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button
                                                        onClick={closeModal}
                                                        className="mr-2 inline-flex justify-center py-2 px-8 border border-green-900 shadow-sm text-sm font-medium text-green-900 bg-white hover:bg-green-100 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default connect(null, null)(AddBatchTextOrImg);