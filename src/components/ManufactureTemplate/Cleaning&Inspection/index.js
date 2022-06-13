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

const CleaningAndInspection = (props) => {
    const [select, setSelect] = useState(false)
    // const handleSelectCheckBox =(i) => {
    //     if (i ===1) 
    // }

    return (
        <div className="p-2 overflow-y-scroll" style={{height: "68vh"}}>
            <div className="grid grid-cols-1" >
                {
                    IngredientsList?.map((item, i) => {
                        return (
                            <div className="">
                                <div key={item} className="m-1 flex justify-between items-center text-green-900 hover:shadow p-2 ">
                                    <p className="text-sm"> <span className="mr-2">{i + 1} .</span> {item?.name}</p>
                                    <div className="grid grid-cols-3" style={{width: 950}}>
                                        <div key={1} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? CheckBox : SelectedCheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Previous Product</strong>
                                                </div>
                                            </button>
                                        </div>
                                        <div key={2} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? SelectedCheckBox : CheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Previous Batch</strong>
                                                </div>
                                            </button>
                                        </div>
                                        <div key={3} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? SelectedCheckBox : CheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Previous Inspection Start Time</strong>
                                                </div>
                                            </button>
                                        </div>
                                        <div key={4} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? SelectedCheckBox : CheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Previous Inspection End Time</strong>
                                                </div>
                                            </button>
                                        </div>
                                        <div key={5} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? SelectedCheckBox : CheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Inspected Unit</strong>
                                                </div>
                                            </button>
                                        </div>
                                        <div key={6} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? SelectedCheckBox : CheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Rejected Unit</strong>
                                                </div>
                                            </button>
                                        </div>
                                        <div key={7} className='p-1'>
                                            <button
                                                onClick={() => { setSelect(!select)}}
                                                className="w-full hover:shadow flex items-center gap-2 p-2 mt-2"
                                            >
                                                <img className="w-6 h-6" src={select ? SelectedCheckBox : CheckBox} />
                                                <div className="flex flex-col">
                                                    <strong className=" text-sm font-medium ">Rejection Type </strong>
                                                </div>
                                            </button>
                                        </div>
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

export default CleaningAndInspection;