import { Fragment, useMemo, useState } from "react";
import SelectIngredient from "./selectingredient";
import { Alert } from '../../../components/alert'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const Ingredient = (props) => {
    const { subTab } = props
    const [select, setSelect] = useState([])
    const [selected, setSelected] = useState(Stages[0])
    const [numberOfStage, setNumberOfStage] = useState(0)
    const [ingredientPayload, setIngredientPayload] = useState([])

    const handleQty = async (e) => {
        let { name, value } = e.target
        let copydata = await ingredientPayload?.filter((item) => item?.name !== name)
        copydata.push({ name: name, qty: Number(value) })
        await setIngredientPayload(copydata)
    }

    useMemo(() => {
        let copydata = ingredientPayload?.filter((item) => !select.includes(item?.name))
        setIngredientPayload(copydata)
    }, [select])

    const totalQty = useMemo(() => {
        let qty = 0
        for (let i of ingredientPayload) {
            qty = qty + i.qty
        }
        return qty
    }, [ingredientPayload])

    return (
        <div className="p-2">
            {subTab === "Product Manufacturing" ?
                <div>
                    <div className='sm:ml-6 mx-2 mt-2 mb-6'>
                        <div className="sm:w-72 w-full">
                            <Listbox style={{ zIndex: 10 }} value={selected} onChange={setSelected}>
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
                            Stages?.map((item, i) => {
                                return (
                                    <div key={item} className="m-1 flex justify-between items-center text-green-900 hover:shadow p-2">
                                        <p > <span className="mr-2">{i + 1} . </span> {item}</p>
                                        <textarea
                                            onChange={handleQty}
                                            name={item}
                                            placeholder='Discription'
                                            type='text'
                                            style={{ width: "80%" }}
                                            className="focus:outline-none focus-visible:border-gray-500 border border-gray-500 h-10 px-2"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                   
                </div>
                :
                <div>
                    <div className="m-1 flex justify-center text-green-900 w-full shadow p-2">
                        <SelectIngredient select={select} setSelect={setSelect} />
                    </div>
                    <div className="grid grid-cols-3">

                        {
                            select?.map((item, i) => {
                                return (
                                    <div key={item} className="m-1 flex justify-between items-center text-green-900 w-full hover:shadow p-2">
                                        <p className="text-sm"> <span className="mr-2">[{i + 1}.]</span> {item}</p>
                                        <input
                                            onChange={handleQty}
                                            name={item}
                                            placeholder='QTY.'
                                            type={'number'}
                                            style={{ width: 100, height: '2rem' }}
                                            className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br />
                    {totalQty > 100 && <Alert type='error' msg={'invalid  !'} />}
                </div>
            }


        </div>
    )
}

export default Ingredient;

const Stages = ["Stage-01", "Stage-02", "Stage-03", "Stage-04", "Stage-05", "Stage-06", "Stage-07", "Stage-08", "Stage-09", "Stage-10"]