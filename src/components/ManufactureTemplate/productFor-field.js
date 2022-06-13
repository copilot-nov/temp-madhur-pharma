import { useState } from "react";
import { connect } from "react-redux";
import { ADD_PRODUCT_FORMULATION } from "../../redux/actions/admin";
import AutoSearch from "../autoComplete";
import { Alert } from "../alert";


const defaultState = {
    "name": "",
    "description": "",
    "product_id": 0,
    "license_no": "",
    "notes": "",
    "iconpic": "",
    
}



const ProductFormulationField = (props) => {
    const { productList, ADD_PRODUCT_FORMULATION } = props
    const [productname, setProductname] = useState(productList[0])
    const [payload, setPayload] = useState(defaultState)
    const [handleResponse, setHandleResponse] = useState(null)
    // console.log(productname)
    // const [disable, setDisable] = useState(false)

    const handleOnChange = (e) => {
        let { name, value, type } = e.target
        setPayload({ ...payload, [name]: value })
    }
    // console.log(payload)
    const handleSubmit = async (e) => {
        e.preventDefault()
        let copypayload = payload
        copypayload.product_id = productname.id
        copypayload.notes = "Testing"
        copypayload.iconpic = "img"
        let istrue = await ADD_PRODUCT_FORMULATION(copypayload)
        // console.log(istrue)
        if (istrue?.status) {
            setPayload(defaultState)
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div className="shadow-lg p-2 rounded h-64">
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            <div className="grid grid-cols-3">
                <div className='m-2 w-96 items-center'>
                    <p className="block text-sm font-medium text-gray-900">
                        Select Product
                    </p>
                    <AutoSearch data={productList} keyname='name' valuename='id' selected={productname} setSelected={setProductname} handleOnChange={handleOnChange} />
                </div>
                <div className='m-2 w-full items-center'>
                    <p className="block text-sm font-medium text-gray-900">
                        Formulation Name
                    </p>
                    <input
                        onChange={handleOnChange}
                        required
                        type="text"
                        name='name'
                        className="w-96 focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2"
                    />
                </div>
                <div className='m-2 w-full items-center'>
                    <p className="block text-sm font-medium text-gray-900">
                        License no.
                    </p>
                    <input
                        onChange={handleOnChange}
                        required
                        type="number"
                        name='license_no'
                        className="w-96 focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                    />
                </div>
            </div>
            <div className='m-2 w-full items-start pr-20'>
                <p className="block text-sm font-medium text-gray-900">
                    Description
                </p>
                <textarea
                    rows={1}
                    onChange={handleOnChange}
                    type="text"
                    id="description"
                    required
                    name="description"
                    className="w-full p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block sm:text-sm border border-gray-900"
                />
            </div>
            <div className="pr-10 py-3 flex justify-end sm:px-6 mt-10">

                <button
                    onClick={handleSubmit}
                    type="submit"
                    className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Save
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        productList: state?.AdminReducer.productList,
    };
};
export default connect(mapStateToProps, {ADD_PRODUCT_FORMULATION})(ProductFormulationField);