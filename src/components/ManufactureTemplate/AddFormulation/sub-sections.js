

import { useState } from 'react'
import Guidlines from './Guidlines'
import Checklist from './Checklist'
import Ingredients from './Ingredients'
import PackingMaterialsDispensing from './PackingMaterialDispensing'
import ProductManufacturing from './ProductManufacturing'
import CleaningAndInspection from './Cleaning&Inspection'
import DataCoding from './DataCoding'
import FillingAndPacking from './FillingAndPacking'

const SubSection = (props) => {
    const { subTab, selectedProcessData, setSelectedMaterial,selectedMaterial} = props
    const [selectedTab, setSelectedTab] = useState('Guidlines')
    

    return (
        <div className='w-full' style={{height: "70vh"}} >
            <div className="flex shadow">
                <button onClick={() => { setSelectedTab('Guidlines') }} className={`${selectedTab === 'Guidlines' ? 'border-2 border-green-900' : ''}  text-green-900 px-4 py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}>
                    Guidelines
                </button>
                <button onClick={() => { setSelectedTab('Checklist') }} className={`${selectedTab === 'Checklist' ? 'border-2 border-green-900' : ''}  text-green-900 px-4 py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}>
                    Checklist
                </button>
                <button onClick={() => { setSelectedTab(subTab) }} className={`${selectedTab === subTab ? 'border-2 border-green-900' : ''}  text-green-900 px-4 py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}>
                    {subTab === "Product Unloading" || subTab === "Weighing" || subTab === "Dispatch" ? "" : subTab}
                </button>
            </div>
            <div className='shadow mt-4 '>
                {selectedTab === 'Guidlines' && <Guidlines selectedProcessData={selectedProcessData} />}
                {selectedTab === 'Checklist' && <Checklist selectedProcessData={selectedProcessData} />}
                {selectedTab === 'Packing Material Dispensing' && <PackingMaterialsDispensing selectedProcessData={selectedProcessData} setSelectedMaterial={setSelectedMaterial} selectedMaterial={selectedMaterial} />}
                {selectedTab === 'Cleaning & Inspection' && <CleaningAndInspection selectedMaterial={selectedMaterial} selectedProcessData={selectedProcessData} />}
                {selectedTab === 'Data Coding' && <DataCoding selectedMaterial={selectedMaterial} selectedProcessData={selectedProcessData} />}
                {selectedTab === 'Filling & Packing' && <FillingAndPacking selectedMaterial={selectedMaterial} selectedProcessData={selectedProcessData}/>}
                {selectedTab === "Product Manufacturing" && <ProductManufacturing subTab={subTab} selectedProcessData={selectedProcessData} />}
                {selectedTab === "Ingredient Dispensing" && <Ingredients subTab={subTab} selectedProcessData={selectedProcessData} />}

            </div>

        </div>
    )
}



export default SubSection;