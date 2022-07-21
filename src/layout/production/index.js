import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddModal from '../../components/addmodal';
import { Alert } from '../../components/alert';
import Navbar from '../../components/navbar'
import ProductionBatch from '../../components/productionBatchList/AddProductionBatch';
import EditDeleteActionBatchProduction from '../../components/productionBatchList/EditDeleteBatchProduction';
import TextInput from '../../components/searchInput';
// import SelectManagmentType from '../../components/SelectManagmentType';
import TailwindTableCss from '../../components/tailwind-table';
// import { selectModuleColumn } from '../../utility/selectModuleColumn';

let ProductionBatchColumn = [
    {
        name: "Batch Name",
        selector: row => row.batch_code,
        sortable: true,
    },
    {
        name: "PO ID",
        width: '130px',
        selector: row => row.po_id,
        sortable: true,
    },
    {
        name: "Product Name",
        selector: row => row.product_id,
        sortable: true,
    },
    {
        name: "Quantity",
        selector: row => `${row.plan_quantity}  ${row.uom}`,
        sortable: true,
    },
    {
        name: "SKU",
        width: '130px',
        selector: row => row.sku_id,
        sortable: true,
    },
    {
        name: "Units",
        width: '130px',
        selector: row => row.units,
        sortable: true,
    },
    {
        name: "Status",
        selector: row => row.status,
        sortable: true,
    },
    {
        name: "Start Date",
        width: '130px',
        selector: row => moment(row.plan_startdate).format('DD/MM/YYYY'),
        sortable: true,
    },
    {
        name: "Created by",
        width: '130px',
        selector: row => row.created_by,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <EditDeleteActionBatchProduction type="order" url={`/order/master/${row?.id}`} row={row} Id={row?.id} />
        )
    },
]


const Productionlayout = (props) => {
    const { productionBatchList } = props
    const [open, setOpen] = useState(false)
    const [handleResponse, setHandleResponse] = useState(null)


    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
        // setHandleResponse(null)
    }

    return (
        <div>
            <Navbar current={"/production"} />
            <div className="grid grid-cols-6 gap-6 sm:mx-6 mx-2 mt-8">
                <div className="col-span-6 sm:col-span-3">
                    {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
                    <div className='flex items-center justify-start'>
                        <div className="sm:w-80 w-full">
                            <input
                                type="text"
                                placeholder="Search bar"
                                className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 w-full h-10 px-2 py-1"
                            />
                        </div>
                        <div>
                            <button
                                onClick={openModal}
                                className='flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <ProductionBatch open={open} closeModal={closeModal} setOpen={setOpen} handleResponse={handleResponse} setHandleResponse={setHandleResponse} />
                    </div>
                </div>
            </div>
            <div className='sm:mx-6 mx-2 mt-6 shadow'>
                <TailwindTableCss columns={ProductionBatchColumn} data={productionBatchList} />
            </div>
            {/* <AlertMsgComponent /> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productionBatchList: state?.ProductionReducer.productionBatchList,

    };
};

export default connect(mapStateToProps, null)(Productionlayout);
