import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"
import StageSteps from "./stageSteps"

const ProductManufacturing = (props) => {
    const { subTab } = props
    const [selected, setSelected] = useState(Stages[0])
    const [numberOfSelectedStage, setNumberOfSelectedStage] = useState([])

    const handleSelectedValue = (e) => {
        setNumberOfSelectedStage(Stages)
        setSelected(e)
        let findIndex = Stages.findIndex((item) =>  item === e)
        setNumberOfSelectedStage(Stages.slice(0,findIndex+1))
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
            <div className="grid grid-cols-1">

                {
                    numberOfSelectedStage?.map((item, i) => {
                        return (
                            <div key={item} className="m-1 flex items-center text-green-900 w-full hover:shadow">
                                <p className="ml-2"> <span className="mr-2">{i + 1} . </span>{`Stage- ${item}`} </p>
                                <StageSteps/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductManufacturing

const Stages = [1,2,3,4,5,6,7,8,9,10]
