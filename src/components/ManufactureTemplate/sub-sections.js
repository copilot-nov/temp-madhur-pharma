

import { useState } from 'react'
import Guidlines from './Guidlines'
import Checklist from './Checklist'
import Ingredients from './Ingredients'

const SubSection = (props) => {
    const [selectedTab, setSelectedTab] = useState('Guidlines')

    return (<div className='w-full'>
        <div className="flex shadow">
            <button onClick={() => { setSelectedTab('Guidlines') }} className={`${selectedTab === 'Guidlines' ? 'border-2 border-green-900' : ''}  text-green-900 px-4 py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}>
                Guidlines
            </button>
            <button onClick={() => { setSelectedTab('Checklist') }} className={`${selectedTab === 'Checklist' ? 'border-2 border-green-900' : ''}  text-green-900 px-4 py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}>
                Enter Checklist
            </button>
            <button onClick={() => { setSelectedTab('Ingredients') }} className={`${selectedTab === 'Ingredients' ? 'border-2 border-green-900' : ''}  text-green-900 px-4 py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}>
                Ingredients
            </button>
        </div>
        <div className='shadow mt-10'>
            {selectedTab === 'Guidlines' && <Guidlines />}
            {selectedTab === 'Checklist' && <Checklist />}
            {selectedTab === 'Ingredients' && <Ingredients />}
        </div>

    </div>)
}



export default SubSection;