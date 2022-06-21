import React, { Fragment, useState } from 'react';
import { ADD_ORDER_ADMIN } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import AutoSearch from '../autoComplete';
import { Dialog, Transition } from '@headlessui/react';
import { ADD_PRODUCTION_BATCH, UPDATE_PRODUCTION_BATCH } from '../../redux/actions/production';

const defaultState = {

}
const ProductionBatch = (props) => {
    const { openEdit, setOpenEdit, materialList, masterDataList, productList, orderList, Id,row,setHandleResponse,handleResponse } = props
    let UOMList = masterDataList?.filter((item) => item?.type_id === 32)
    let statusList = masterDataList?.filter((item) => item?.type_id ===  27)
    const [payload, setPayload] = useState(defaultState)
    const [SKU, setSKU] = useState(materialList)
    const [UOM, setUOM] = useState(UOMList)
    const [Product, setProduct] = useState(productList)
    const [POID, setPOID] = useState(orderList)
    const [status, setStatus] = useState(statusList)
    // console.log(statusList)

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }
    // console.log(SKU)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        copypayload.po_id = POID?.po_id
        copypayload.sku_id = SKU?.id
        copypayload.product_id = Product?.id
        copypayload.uom = UOM?.data_code
        copypayload.status = status?.data_code

        // console.log(copypayload)
        let istrue = await UPDATE_PRODUCTION_BATCH(copypayload, Id)
        if (istrue?.status) {
            setOpenEdit(false)
            // setHandleResponse(istrue)
        } else {
            // setHandleResponse(istrue)
        }
    }

    return (
        <div>
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
                                        Edit Production Batch
                                    </Dialog.Title>
                                    <div className="md:col-span-3">
                                        <form
                                            onSubmit={handleSubmit}
                                            action="#" method="POST">
                                            <div className="overflow-hidden">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-2 sm:gap-4">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Batch Name
                                                                </p>
                                                                <input
                                                                    
                                                                    name='batch_code'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.batch_code}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    PO ID
                                                                </p>
                                                                <AutoSearch data={orderList} keyname='po_id' valuename='id' selected={POID} setSelected={setPOID} />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Product Name
                                                                </p>
                                                                <AutoSearch data={productList} keyname='name' valuename='id' selected={Product} setSelected={setProduct} />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    SKU
                                                                </p>
                                                                <AutoSearch data={materialList} keyname='name' valuename='id' selected={SKU} setSelected={setSKU} />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Quantity
                                                                </p>
                                                                <input
                                                                    
                                                                    type='number'
                                                                    name='plan_quantity'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.plan_quantity}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    UOM
                                                                </p>
                                                                <AutoSearch data={UOMList} keyname='label' valuename='id' selected={UOM} setSelected={setUOM} />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Units
                                                                </p>
                                                                <input
                                                                    
                                                                    type='number'
                                                                    name='units'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.units}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Unit Price
                                                                </p>
                                                                <input
                                                                    
                                                                    type='number'
                                                                    name='unit_price'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.unit_price}
                                                                    className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Start Date
                                                                </p>
                                                                <input
                                                                    
                                                                    type='date'
                                                                    name='plan_startdate'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.plan_startdate}
                                                                    className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    End Date
                                                                </p>
                                                                <input
                                                                    
                                                                    type='date'
                                                                    name='plan_enddate'
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.plan_enddate}
                                                                    className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Status
                                                                </p>
                                                                <AutoSearch data={statusList} keyname='label' valuename='id' selected={status} setSelected={setStatus} />
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
                                                                    
                                                                    name="description"
                                                                    onChange={handleOnChange}
                                                                    defaultValue={row?.description}
                                                                    className="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-900"
                                                                />
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
        materialList: state?.AdminReducer.materialList,
        masterDataList: state?.AdminReducer.masterDataList,
        productList: state?.AdminReducer.productList,
        orderList: state?.AdminReducer.orderList,
    };
};
export default connect(mapStateToProps, { ADD_PRODUCTION_BATCH })(ProductionBatch);