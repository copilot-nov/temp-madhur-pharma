import React, { Fragment, useState } from 'react';
import { ADD_USER_BY_ADMIN } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';

const defaultState = {

}

const UserManagment = (props) => {
    const { closeModal, setHandleResponse, isOpen, titleModal, setIsOpen } = props
    // redux functions 
    const { ADD_USER_BY_ADMIN } = props
    const [payload, setPayload] = useState(defaultState)

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        let istrue = await ADD_USER_BY_ADMIN(copypayload)
        if (istrue?.status) {
            setPayload(defaultState)
            setHandleResponse(istrue)
            setIsOpen(false)
            // console.log(payload)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
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
                                        {titleModal}
                                    </Dialog.Title>
                                    <div className="md:col-span-2">
                                        {/* <div className="sm:mt-2 mt-4"></div> */}
                                        <form onSubmit={handleSubmit} action="#" method="POST">
                                            <div className="overflow-hidden">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-2 sm:gap-4">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Name
                                                                </p>
                                                                <input
                                                                    required
                                                                    name='name'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.name}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Phone
                                                                </p>
                                                                <input
                                                                    max={10}
                                                                    maxLength={10}
                                                                    required
                                                                    name='phone'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.phone}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Email
                                                                </p>
                                                                <input
                                                                    required
                                                                    name='email'
                                                                    type='email'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.email}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900 mr-4">
                                                                    Password
                                                                </p>
                                                                <input

                                                                    required
                                                                    name='password'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.password}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Department
                                                                </p>
                                                                <input
                                                                    required
                                                                    name='department'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.department}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Designation
                                                                </p>
                                                                <input
                                                                    required
                                                                    name='designation'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.designation}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Employee Id
                                                                </p>
                                                                <input
                                                                    required
                                                                    name='emp_id'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.emp_id}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Role Id
                                                                </p>
                                                                <select
                                                                    type='number'
                                                                    name='role_id'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.role_id}
                                                                    className="b-white w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                >
                                                                    <option>Select</option>
                                                                    <option value={11}> Admin</option>
                                                                    <option value={12}> Store Manager</option>
                                                                    <option value={13}> Production Manager</option>
                                                                    <option value={14}> Production Operator</option>
                                                                    <option value={15}> QA Manager</option>
                                                                </select>
                                                            </div>
                                                        </div>
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

export default connect(null, { ADD_USER_BY_ADMIN })(UserManagment);