import React, { Fragment, useState } from 'react';
import { UPDATE_PRODUCT } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import AutoSearch from '../autoComplete';
import { Dialog, Transition } from '@headlessui/react';

const defaultState = {
    "name": "",
    "description": "",
    "code": "",
    "class_id": 0,
    "sub_class_id": 0,
    "customer_id": 0,
    "hsn_code": "",
    "notes": "",
    "iconpic": ""
}


const EditProduct = (props) => {
    const { setOpenEdit, setHandleResponse, openEdit, titleModal, Id, type, row} = props
    // redux functions 
    const { UPDATE_PRODUCT, masterDataList } = props
    const [payload, setPayload] = useState(defaultState)
    const [mainclass, setMainClass] = useState(masterDataList[0])
    const [mainSubclass, setMainSubClass] = useState(masterDataList[0])
    const [code, setCode] = useState(masterDataList[0])

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        copypayload.class_id = mainclass.id
        copypayload.sub_class_id = mainSubclass.id
        // copypayload.code = mainSubclass.data_code
        let istrue = await UPDATE_PRODUCT(copypayload, Id)
        if (istrue?.status) {
            setPayload(defaultState)
            setHandleResponse(istrue)
            setOpenEdit(false)
        } else {
            setHandleResponse(istrue)
        }
    }


    return (
        <div >
            <Transition appear show={openEdit} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {setOpenEdit(false)}}>
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
                                        Edit Product Info
                                    </Dialog.Title>
                                    <div className="md:col-span-2">
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
                                                                    defaultValue={row?.name}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Customer Id
                                                                </p>
                                                                <input
                                                                    required
                                                                    type='number'
                                                                    name='customer_id'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.customer_id}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Code
                                                                </p>
                                                                <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={code} setSelected={setCode} />

                                                                {/* <input
                                                                    required
                                                                    type='text'
                                                                    name='code'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={payload?.code}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                /> */}
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    HSN Code
                                                                </p>
                                                                <input
                                                                    required
                                                                    type='text'
                                                                    name='hsn_code'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.hsn_code}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Class
                                                                </p>
                                                                <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={mainclass} setSelected={setMainClass} />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Sub Class
                                                                </p>
                                                                <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={mainSubclass} setSelected={setMainSubClass} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button
                                                        onClick={() => {setOpenEdit(false)}}
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

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        masterDataList: state?.AdminReducer.masterDataList,
    };
};
export default connect(mapStateToProps, { UPDATE_PRODUCT })(EditProduct);