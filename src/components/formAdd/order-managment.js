import React, { useState } from 'react';
import { ADD_ORDER_ADMIN } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import AutoSearch from '../autoComplete';

const defaultState = {
   
}


const OrderManagment = (props) => {
    const { closeModal, setHandleResponse } = props
    // redux functions 
    const { ADD_ORDER_ADMIN,masterDataList } = props
    const [payload, setPayload] = useState(defaultState)
    const [status, setStatus] = useState(masterDataList[0])

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        copypayload.status = status.data_code
        let istrue = await ADD_ORDER_ADMIN(copypayload)
        if (istrue?.status) {
            setPayload(defaultState)
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div className="md:col-span-2">
            <form onSubmit={handleSubmit} action="#" method="POST">
                <div className="overflow-hidden">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-2 sm:gap-4">
                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        PO Id
                                    </p>
                                    <input
                                        required
                                        name='po_id'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.po_id}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Order Id
                                    </p>
                                    <input
                                        required
                                        name='po_id'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.po_id}
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
                                        Order date
                                    </p>
                                    <input
                                        required
                                        type='date'
                                        name='order_date'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.order_date}
                                        className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Status
                                    </p>
                                    <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={status} setSelected={setStatus} />
                                    {/* <input
                                        required
                                        type='text'
                                        name='status'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.status}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    /> */}
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <div className='w-full items-start'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        description
                                    </p>
                                    <textarea
                                        rows={2}
                                        id="description"
                                        required
                                        name="description"
                                        onChange={handleOnChange}
                                        defaultValue={payload?.description}
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
                                        onChange={handleOnChange}
                                        defaultValue={payload?.notes}
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
    )
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        masterDataList: state?.AdminReducer.masterDataList,
    };
};
export default connect(mapStateToProps, { ADD_ORDER_ADMIN })(OrderManagment);