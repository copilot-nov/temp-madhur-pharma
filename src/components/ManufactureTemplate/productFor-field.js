import { useState } from "react";
import { connect } from "react-redux";
import AutoSearch from "../autoComplete";

const ProductFormulationField = (props) => {
    const { productList } = props
    const [productname, setProductname] = useState(productList[0])

    return (
        <div className="shadow-lg p-2 rounded h-64">
            <div className="grid grid-cols-3">
                <div className='m-2 w-96 items-center'>
                    <p className="block text-sm font-medium text-gray-900">
                        Select Product
                    </p>
                    <AutoSearch data={productList} keyname='name' valuename='id' selected={productname} setSelected={setProductname} />
                </div>
                <div className='m-2 w-full items-center'>
                    <p className="block text-sm font-medium text-gray-900">
                        Formulation Name
                    </p>
                    <input
                        required
                        name='name'
                        className="w-96 focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2"
                    />
                </div>
                <div className='m-2 w-full items-center'>
                    <p className="block text-sm font-medium text-gray-900">
                        License no.
                    </p>
                    <input
                        required
                        name='name'
                        className="w-96 focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                    />
                </div>
            </div>
            <div className='m-2 w-full items-start'>
                <p className="block text-sm font-medium text-gray-900">
                    Description
                </p>
                <textarea
                    rows={1}
                    id="description"
                    required
                    name="description"
                    className="w-full p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block sm:text-sm border border-gray-900"
                />
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
export default connect(mapStateToProps, {})(ProductFormulationField);