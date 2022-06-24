import { connect } from "react-redux";
import AutoSearch from "../autoComplete";

const DetailedFields = (props) => {
    const { MaterialList, productList, inputList, setInputList } = props
    

    const handleSelected = (e,index,key) => {
        let newInputList = inputList
        newInputList[index][key] = e
        setInputList([...newInputList])
    }
    const handleOnChange = (e, i) => {
        // console.log(i)
        let newInputList = inputList
        // console.log(newInputList)
        newInputList[i][e.target.name] = e.target.value
        setInputList([...newInputList])
    }
    const handleMinusButton = (i) => {
        let newInputList = inputList
        newInputList = newInputList?.filter((item) => item.key !== i.key)
        setInputList(newInputList)
    }
    const handlePlusButton = () => {
        setInputList([...inputList, { text: 0,product: {}, material: {}, key: Math.floor(Math.random(9) * 1000000) }])
    }
    // console.log(inputList)


    return (
        <div className="pt-10">
            {
                inputList.map((item, i) => {
                    return (
                        <div key={i} >
                            <div className="flex items-center">
                                {/* <div className="col-span-4 sm:col-span-2"> */}
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Select Product
                                    </p>
                                    <AutoSearch data={productList} keyname='name' valuename='id' selected={item?.product} setSelected={(selectedVale) => handleSelected(selectedVale, i, "product")} />
                                </div>
                                {/* </div> */}
                                {/* <div className="col-span-4 sm:col-span-2"> */}
                                <div className='w-full items-center ml-8'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Select SKU
                                    </p>
                                    <AutoSearch data={MaterialList} keyname='name' valuename='id' selected={item?.material} setSelected={(selectedVale) => handleSelected(selectedVale, i, "material")}/>
                                </div>
                                {/* </div> */}
                                {/* <div className="col-span-4 sm:col-span-2"> */}
                                <div className='w-full items-center ml-8'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Number Of SKU
                                    </p>
                                    <input
                                        type="number"
                                        name='text'
                                        onChange={(e) => handleOnChange(e, i)}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                                {/* </div> */}
                                <div className="ml-6 flex justify-end">
                                    <button onClick={handlePlusButton} className="flex justify-center items-center mt-4 text-white rounded-full h-8 w-8 bg-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleMinusButton(item)} className="flex justify-center items-center ml-4 mt-4 text-white rounded-full h-8 w-8 bg-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            {/* <div className="pr-10 py-3 flex justify-end sm:px-6 mt-10">
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Save
                </button>
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formulationData: state?.AdminReducer.formulationData,

    };
};
export default connect(mapStateToProps, null)(DetailedFields);
