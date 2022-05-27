import React, { useState } from 'react';
import { ADD_MATERIAL_ADMIN } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import AutoSearch from '../autoComplete';

const defaultState = {
   
}

const MaterialManagment = (props) => {
    const { closeModal,setHandleResponse } = props
    // redux functions 
    const { ADD_MATERIAL_ADMIN,masterDataList } = props
    const [payload, setPayload] = useState(defaultState)
    const [mainclass, setMainClass] = useState(masterDataList[0])
    const [mainSubclass, setMainSubClass] = useState(masterDataList[0])
    const [uom, setUOM] = useState(masterDataList[0])

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload =  payload
        copypayload.class_id = mainclass.id
        copypayload.sub_class_id = mainSubclass.id
        copypayload.uom = uom.data_code
        let istrue = await ADD_MATERIAL_ADMIN(copypayload)
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
                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Code
                                    </p>
                                    <input
                                        required
                                        name='code'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.code}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Capacity
                                    </p>
                                    <input
                                        required
                                        type='number'
                                        name='capacity'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.capacity}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        UOM
                                    </p>
                                    <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={uom} setSelected={setUOM} />
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        SKU
                                    </p>
                                    <input
                                        required
                                        name='sku'
                                        onChange={handleOnChange}
                                        defaultValue={payload?.sku}
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
export default connect(mapStateToProps, { ADD_MATERIAL_ADMIN })(MaterialManagment);