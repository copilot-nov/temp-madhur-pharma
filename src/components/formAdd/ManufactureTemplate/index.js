import { useState } from "react";
// import ProcessMaster from "./process-master";
import ManufactureTemplateTabs from "./tabs";


const processMasterList = [
    'Product Formulation',
    'Ingredient Dispensing',
    'Product Manufacturing',
    'Product Unloading',
    'Packing Material Dispensing',
    'Cleaning & Inspection',
    'Data Coding',
    'Filling & Packing',
    'Weighing',
    'Dispatch'
]
const ManufactureTemplate = () => {
    const [select, setSelcted] = useState([])

    const handleSelect = (value) => {
        let copydata = []
        if (select?.includes(value)) {
            copydata = select?.filter(item => item !== value)
            setSelcted(copydata)
        } else {
            setSelcted([...select, value])
        }
    }

    const getNext = () => {
        let index = processMasterList.indexOf(select)
        console.log(index)
    }

    return (
        <div style={{ width: '1200px', minWidth: '400px', height: '90vh' }}>
            <ManufactureTemplateTabs processMasterList={processMasterList} select={select} tabsName={select} handleSelect={handleSelect} />

            {select?.length > 0 && <div className="bottom-8 right-8 right fixed flex justify-end">
                <button className="mx-2 bg-gray-300 px-6 py-2 text-gray-900 rounded hover:bg-gray-100">Back</button>
                <button onClick={getNext} className="bg-green-900 px-6 py-2 text-white rounded hover:bg-green-800">Next</button>
            </div>}

        </div>
    )
}

export default ManufactureTemplate;