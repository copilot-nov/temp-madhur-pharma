import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"
import { connect } from "react-redux"
import { ADD_PRODUCTION_PROCESS_STAGES } from "../../../redux/actions/admin"
import { Alert } from "../../alert"
import StageSteps from "./stageSteps"

const ProductManufacturing = (props) => {
    const { subTab, formulationData, selectedProcessData, ADD_PRODUCTION_PROCESS_STAGES } = props
    const [selected, setSelected] = useState(Stages[0])
    const [numberOfSelectedStage, setNumberOfSelectedStage] = useState([])
    const [handleResponse, setHandleResponse] = useState(null)
    const [stagesList, setStagesList] = useState([])
    // const [mainList, setMainList] = useState([])


    // console.log(stagesList)
    // console.log(formulationData)
    // console.log(selectedProcessData)

    const handleSelectedValue = (e) => {
        setNumberOfSelectedStage(Stages)
        setSelected(e)
        let findIndex = Stages.findIndex((item) => item === e)
        setNumberOfSelectedStage(Stages.slice(0, findIndex + 1))
    }


    const handleSubmit = async () => {
        let finalList = []
        let payload = {
            "prod_proc_id": 0,
            "data": []
        }
        formulationData.filter((data) => {
            payload.prod_proc_id = data?.id
            if (data?.process_id === selectedProcessData?.id)
                numberOfSelectedStage.map((item, index) => {
                    // console.log(stagesList)
                    let innerPayload = {
                        "stage": `${item}`,
                        "notes": "test",
                        "stage_step_list": []
                    }
                    stagesList.map((list) => {
                        // console.log(list ,"hgvasgdj")
                        if (list?.stage === item) {
                            list?.steps.map((text, i) => {
                                innerPayload?.stage_step_list.push({
                                    "text": text?.text,
                                    "notes": "text"
                                })
                            })
                        }
                    })
                    payload?.data.push(innerPayload)

                })


        })
        console.log(payload)

        let istrue = await ADD_PRODUCTION_PROCESS_STAGES(payload)
        if (istrue?.status) {
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div>
            <div className='sm:ml-6 mx-2 mt-2 mb-6'>
                <div className="sm:w-72 w-full">
                    <Listbox style={{ zIndex: 10 }} value={selected} onChange={handleSelectedValue}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-pointer bg-white py-2 pl-3 pr-10 text-left border border-gray-700 focus:outline-none focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <SelectorIcon
                                        className="h-5 w-5 text-gray-900"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {Stages?.map((stage) => (
                                        <Listbox.Option
                                            key={stage}
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-green-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={stage}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {stage}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            <div className="grid grid-cols-1">

                {
                    numberOfSelectedStage?.map((item, i) => {
                        return (
                            <div key={item} className="m-1 flex items-center text-green-900 w-full hover:shadow">
                                <p className="ml-2"> <span className="mr-2">{i + 1} . </span>{`Stage- ${item}`} </p>
                                <StageSteps numberOfSelectedStage={numberOfSelectedStage} setStagesList={setStagesList} stagesList={stagesList} currentStage={item} index={i} />
                            </div>
                        )
                    })
                }
            </div>
            {numberOfSelectedStage?.length > 0 ?
                <div className="pr-10 py-3 flex justify-end sm:px-6 mt-10">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Save
                    </button>
                </div>
                : ""}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formulationData: state?.AdminReducer.formulationData,

    };
};
export default connect(mapStateToProps, {ADD_PRODUCTION_PROCESS_STAGES})(ProductManufacturing);

const Stages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
