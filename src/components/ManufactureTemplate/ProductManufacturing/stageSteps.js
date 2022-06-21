import { useState } from "react";

const StageSteps = (props) => {
    const { currentStage, setStagesList, numberOfSelectedStage, stagesList,index } = props

    const [inputList, setInputList] = useState([{ text: "", key: Math.floor(Math.random(9) * 1000000) }])
    // const [finalList, setFinalList] = useState([])


    const handleOnChange = (e, i) => {
        let newInputList = inputList
        newInputList[i][e.target.name] = e.target.value
        setInputList([...newInputList])
        let finalList = stagesList
        if (finalList.length >= index) {
            finalList[index] = {steps: newInputList, stage: currentStage}
        } else {
            finalList.push({steps: newInputList, stage: currentStage})
        }

        setStagesList([...finalList])
        // console.log(finalList)
    }

    const handleMinusButton = (i) => {
        let newInputList = inputList
        newInputList = newInputList?.filter((item) => item.key !== i.key)
        setInputList(newInputList)
    }
    const handlePlusButton = () => {
        setInputList([...inputList, { text: "", key: Math.floor(Math.random(9) * 1000000) }])
    }
    // console.log(inputList)

    return (
        <div className="ml-10 w-100">
            {
                inputList.map((item, i) => {
                    return (
                        <div key={i} className="flex justify-center items-center my-2 w-full">
                            <div className="flex items-center" >
                                <div className="mr-4">
                                    <p className="block text-sm font-medium text-gray-900">
                                        {`Step ${i + 1}`}
                                    </p>
                                </div>
                                <div className='w-100 items-center'>
                                    <input
                                        value={item?.text}
                                        onChange={(e) => handleOnChange(e, i)}
                                        required
                                        name='text'
                                        className=" focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-8 px-2 py-1"
                                        style={{ width: 850 }}

                                    />
                                </div>
                            </div>
                            <div className="ml-6 flex justify-end">
                                <button onClick={handlePlusButton} className="flex justify-center items-center  text-white rounded-full h-8 w-8 bg-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                                <button onClick={() => { handleMinusButton(item) }} className="flex justify-center items-center ml-4 text-white rounded-full h-8 w-8 bg-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default StageSteps;