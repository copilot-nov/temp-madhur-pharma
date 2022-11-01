import React, { Fragment, useEffect, useState } from 'react';
import { UPDATE_ORDER } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import AutoSearch from '../autoComplete';
import { Dialog, Transition } from '@headlessui/react';
import DetailedFields from './OrderDatailedFileds'
import moment from 'moment';
import EditDetailedFields from './EditDetailedFields';


const defaultState = {
    "order_details": [


    ]

}


const EditOrder = (props) => {
    const { Id, openEdit, setOpenEdit, type, row, UPDATE_ORDER, materialList, productList, orderList, CustomerManagmentList } = props
    const { masterDataList } = props
    let statusList = masterDataList?.filter((item) => item?.type_id === 26)
    let MaterialList = materialList?.filter((item) => item?.sku)
    const [payload, setPayload] = useState(defaultState)
    const [status, setStatus] = useState(statusList)
    const [Material, setMaterial] = useState(MaterialList)
    const [Product, setProduct] = useState(productList)
    const [POID, setPOID] = useState(orderList)
    const [customer, setCustomer] = useState(CustomerManagmentList)
    const [inputList, setInputList] = useState(row?.order_details)


    // row?.order_details.map((item)=> {
    //     inputList.push(item)

    // })
    // console.log(inputList)
    useEffect(() => {
        let newData = inputList
        newData.map((data, i) => {
            productList.map((item) => {
                if (data.product_id === item?.id) {
                    data.product_id = item
                    return data
                } else {
                    return data
                }

            })
        })
        // console.log(newData)
    }, [row?.order_details])
    useEffect(() => {
        let newData = inputList
        newData.map((data, i) => {
            MaterialList.map((item) => {
                if (data.sku_id === item?.id) {
                    data.sku_id = item
                    return data
                } else {
                    return data
                }

            })
        })
        // console.log(newData)
    }, [row?.order_details])

    // let orderDate = moment(row?.order_date).format("yyyy/mm/dd")
    // console.log(inputList)
    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: type === 'number' ? Number(value) : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        if (status !== undefined) {
            copypayload.status = status.data_code
        }
        if (customer !== undefined) {
            copypayload.customer_id = customer.id
        }

        inputList.map((item, i) => {
            copypayload?.order_details.push({
                "id": item?.id,
                "product_id": item?.product_id?.id,
                "sku_id": item?.sku_id?.id,
                "quantity": item?.quantity

            })
        })
     
        let istrue = await UPDATE_ORDER(copypayload, Id)
        if (istrue?.status) {
            setOpenEdit(false)
        }
    }

    return (
        <div>
            <Transition appear show={openEdit} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpenEdit(false)}>
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
                                        Edit Order Deltails
                                    </Dialog.Title>
                                    <div
                                    // style={{ width: '1400px', minWidth: '400px', height: '90vh' }}
                                    >
                                        <div className="md:col-span-2">
                                            <form
                                                onSubmit={handleSubmit}
                                                action="#" method="POST">
                                                <div className="overflow-hidden">
                                                    <div className="px-4 py-5 bg-white sm:p-6">
                                                        <div className="grid grid-cols-6 gap-2 sm:gap-4 mb-4">
                                                            <div className="col-span-4 sm:col-span-2">
                                                                <div className='w-full items-center'>
                                                                    <p className="block text-sm font-medium text-gray-900">
                                                                        PO ID
                                                                    </p>
                                                                    <input
                                                                        name="po_id"
                                                                        onChange={handleOnChange}
                                                                        defaultValue={row?.po_id}
                                                                        className=" w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-span-4 sm:col-span-2">
                                                                <div className='w-full items-center'>
                                                                    <p className="block text-sm font-medium text-gray-900">
                                                                        Select Customer
                                                                    </p>
                                                                    <AutoSearch data={CustomerManagmentList} keyname='name' valuename='id' selected={customer} setSelected={setCustomer} />
                                                                </div>
                                                            </div>
                                                            <div className="col-span-4 sm:col-span-2">
                                                                <div className='w-full items-center'>
                                                                    <p className="block text-sm font-medium text-gray-900">
                                                                        Order date
                                                                    </p>
                                                                    <input
                                                                        type='date'
                                                                        name='order_date'
                                                                        onChange={handleOnChange}
                                                                        defaultValue={row?.order_date}
                                                                        className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-span-4 sm:col-span-2">
                                                                <div className='w-full items-center'>
                                                                    <p className="block text-sm font-medium text-gray-900">
                                                                        Select Status
                                                                    </p>
                                                                    <AutoSearch data={statusList} keyname='label' valuename='id' selected={status} setSelected={setStatus} />
                                                                </div>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-6">
                                                                <div className='w-full items-start'>
                                                                    <p className="block text-sm font-medium text-gray-900">
                                                                        Description
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
                                                        <EditDetailedFields
                                                            setMaterial={setMaterial}
                                                            Material={Material}
                                                            MaterialList={MaterialList}
                                                            setProduct={setProduct}
                                                            Product={Product}
                                                            productList={productList}
                                                            payload={payload}
                                                            setInputList={setInputList}
                                                            inputList={inputList}
                                                            row={row}

                                                        />

                                                    </div>

                                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 mt-10">
                                                        <button
                                                            onClick={() => setOpenEdit(false)}
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
        materialList: state?.AdminReducer.materialList,
        productList: state?.AdminReducer.productList,
        orderList: state?.AdminReducer.orderList,
        CustomerManagmentList: state?.AdminReducer.CustomerManagmentList,
    };
};
export default connect(mapStateToProps, { UPDATE_ORDER })(EditOrder);