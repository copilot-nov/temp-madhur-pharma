import { useState } from "react";
import { connect } from "react-redux";
import { ADD_PRODUCTION_GUIDELINES } from "../../redux/actions/admin";
import { Alert } from "../alert";


const Guidlines = (props) => {
    const { selectedProcessData, ADD_PRODUCTION_GUIDELINES, formulationData } = props
    const [numberOfList, setNumberOfList] = useState(1)
    const [inputList, setInputList] = useState([{ text: "", key: Math.floor(Math.random(9) * 1000000) }])
    const [handleResponse, setHandleResponse] = useState(null)


    const handleOnChange = (e, i) => {
        let newInputList = inputList
        newInputList[i][e.target.name] = e.target.value
        setInputList([...newInputList])
    }
    const handleMinusButton = (i) => {
        let newInputList = inputList
        newInputList = newInputList?.filter((item) => item.key !== i.key)
        setInputList(newInputList)
        setNumberOfList(numberOfList - 1)
    }
    const handlePlusButton = () => {
        setInputList([...inputList, { text: "", key: Math.floor(Math.random(9) * 1000000) }])
        setNumberOfList(numberOfList + 1)
    }

    const handleSubmit = async () => {
        let payload = {
            "data": []
        }
        formulationData.filter((data) => {
            if (data?.process_id === selectedProcessData?.id)
                inputList.map((item, i) => {
                    payload?.data.push({
                        "prod_proc_id": data?.id,
                        "text": inputList[i].text,
                        "sequence": i + 1,
                        "notes": "test"
                    })
                })
        })
        let istrue = await ADD_PRODUCTION_GUIDELINES(payload)
        if (istrue?.status) {
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div className="p-4">
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            {
                inputList.map((item, i) => {
                    return (
                        <div key={i} >
                            <div className="flex justify-between items-center">
                                <div className='w-full items-center'>
                                    <p className="block text-sm font-medium text-gray-900">
                                        Enter Guidelines
                                    </p>
                                    <input
                                        value={item?.text}
                                        onChange={(e) => handleOnChange(e, i)}
                                        required
                                        name='text'
                                        className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
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
    return {
        formulationData: state?.AdminReducer.formulationData,

    };
};
export default connect(mapStateToProps, { ADD_PRODUCTION_GUIDELINES })(Guidlines);

