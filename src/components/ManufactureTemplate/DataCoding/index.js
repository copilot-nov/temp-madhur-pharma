import { useState } from "react";
import CheckBox from '../../../assets/svg/unSelectCheck.svg'
import SelectedCheckBox from '../../../assets/svg/selectedCheck.svg'

const IngredientsList = [
    { id: 1, name: 'Cyclopentasiloxane' },
    { id: 2, name: 'Dimethiconol' },
    { id: 3, name: 'Polydimethylsiloxane' },
    { id: 4, name: 'Squalene Oil' },
    { id: 5, name: 'Argania Spinosa Kernel Oil' },
    { id: 6, name: 'Baobab Oil' },
    { id: 7, name: 'Vitamin E-Acetate' },
    { id: 8, name: 'Geogaard' },
    { id: 9, name: 'Aqua Tonus Fragrance' },
]

const ProcessList = [
    {name: "Batch No."}, 
    {name: 'Manufacture Date'}, 
    {name: 'Expirary Date'}, 
    {name: 'MRP Rs.'}
]

const DataCoding = (props) => {
    // const [select, setSelect] = useState(false)
    const [selected, setSelcted] = useState([])

    const handleSelect = (value) => {
        let copydata = []
        if (selected?.includes(value)) {
            copydata = selected?.filter(item => item !== value)
            setSelcted(copydata)
        } else {
            setSelcted([...selected, value])
        }
    }
    return (
        <div className="p-2 overflow-y-scroll" style={{ height: "68vh" }}>
            <div className="grid grid-cols-1" >
                {
                    IngredientsList?.map((item, i) => {
                        return (
                            <div className="">
                                <div key={item} className="m-1 flex justify-between items-center text-green-900 hover:shadow p-2 ">
                                    <p className="text-sm"> <span className="mr-2">{i + 1} .</span> {item?.name}</p>
                                    <div className="grid grid-cols-4" style={{ width: 950 }}>
                                        {ProcessList.map((process) => {
                                            return (
                                                <div key={process?.name} className='p-1'>
                                                    <button
                                                        onClick={() => { handleSelect(process?.name) }}
                                                        className="w-full flex items-center gap-2 p-2 mt-2"
                                                    >
                                                        <img className="w-6 h-6" src={selected.includes(process?.name) ? SelectedCheckBox : CheckBox} alt={process?.name} />
                                                        <div className="flex flex-col">
                                                            <strong className=" text-sm font-medium ">{process?.name}</strong>
                                                        </div>
                                                    </button>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataCoding;