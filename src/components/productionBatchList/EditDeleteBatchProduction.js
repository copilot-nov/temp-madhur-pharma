import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
import { DELETE_MODULE_FROM_PRODUCTION_BATCH } from '../../redux/actions/production'
import Confirmation from "../confirmation";
import EditProductionBatch from "./EditProductionBatch";
// import EditOrder from "./EditOrder";

const EditDeleteActionBatchProduction = (props) => {
    let [isOpen, setIsOpen] = useState(false)
    let [openEdit, setOpenEdit] = useState(false)
    // common pass
    const { type, row, url, Id } = props
    // redux method 
    const { DELETE_MODULE_FROM_PRODUCTION_BATCH } = props

    function cancelConfirm() {
        setIsOpen(false)
    }

    const deleteConfirm = () => {
        DELETE_MODULE_FROM_PRODUCTION_BATCH(Id)
        setIsOpen(true)
    }

    return (
        <Fragment>
            <div className="flex justify-start">
                <button
                    onClick={() => { setOpenEdit(true) }}
                    className="flex items-center justify-start px-2 py-2 cursor-pointer text-green-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
                <button
                    onClick={() => { setIsOpen(true) }}
                    className="flex items-center justify-start px-2 py-2 cursor-pointer text-green-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <Confirmation
                isOpen={isOpen}
                cancelConfirm={cancelConfirm}
                btnTitle={'Remove'}
                deleteConfirm={deleteConfirm}
                title={'Remove this user'}
                des={`Delete ${row?.name} !`} />
            <EditProductionBatch Id={Id} openEdit={openEdit} setOpenEdit={setOpenEdit} row={row} />
        </Fragment>

    )
}

export default connect(null,{DELETE_MODULE_FROM_PRODUCTION_BATCH})(EditDeleteActionBatchProduction);
// export default EditDeleteActionBatchProduction
