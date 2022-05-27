import React, { useState } from 'react';
import { ADD_CUSTOMER_ADMIN } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import AutoSearch from '../autoComplete';

const defaultState = {

}

const CustomerManagment = (props) => {
    const { closeModal, setHandleResponse } = props
    const { ADD_CUSTOMER_ADMIN, masterDataList } = props
    const [mainclass, setMainClass] = useState(masterDataList[0])
    const [mainSubclass, setMainSubClass] = useState(masterDataList[0])
    // redux functions 
    const [payload, setPayload] = useState(defaultState)

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        copypayload.class_id = mainclass.id
        copypayload.sub_class_id = mainSubclass.id
        let istrue = await ADD_CUSTOMER_ADMIN(copypayload)
        // setPayload(defaultState)
        setHandleResponse(istrue)
    }
    console.log(mainclass)

    return (
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
                                        defaultValue={payload?.name}
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
                                    <p className="block text-sm font-medium text-gray-900 mr-4">
                                        Contact Person
                                    </p>
                                    <input

                                        required
                                        name='contact_person'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.contact_person}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>

                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Industry
                                    </p>
                                    <input
                                        type='number'
                                        name='industry'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.industry}
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
                                    {/* <input
                                        type='number'
                                        name='class_id'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.class_id}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    /> */}
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Sub Class
                                    </p>
                                    <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={mainSubclass} setSelected={setMainSubClass} />

                                    {/* <input
                                        type='number'
                                        name='sub_class_id'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.sub_class_id}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    /> */}
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Pincode
                                    </p>
                                    <input
                                        // max={6}
                                        // maxLength={6}
                                        name='pincode'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.pincode}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        City
                                    </p>
                                    <input
                                        type='text'
                                        name='city'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.city}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
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
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        masterDataList: state?.AdminReducer.masterDataList,
    };
};
export default connect(mapStateToProps, { ADD_CUSTOMER_ADMIN })(CustomerManagment);