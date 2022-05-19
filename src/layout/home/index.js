import React, { useState } from 'react';
import AddModal from '../../components/addmodal';
import Navbar from '../../components/navbar'
import TextInput from '../../components/searchInput';
import SelectManagmentType from '../../components/SelectManagmentType';
import TailwindTableCss from '../../components/tailwind-table';
import { selectModuleColumn } from '../../utility/selectModuleColumn';

const Homelayout = (props) => {
    const { data } = props
    const [selected, setSelected] = useState(selectModuleColumn[1])

    return (
        <div>
            <Navbar />
            <div className='sm:mx-6 mx-2 mt-10'>
                <SelectManagmentType selected={selected} setSelected={setSelected} selectModuleColumn={selectModuleColumn} />
            </div>
            <div className="grid grid-cols-6 gap-6 sm:mx-6 mx-2 mt-8">
                <div className="col-span-6 sm:col-span-3">
                    <div className='flex items-center justify-start'>
                        <TextInput />
                        <AddModal
                            titleModal='Add'
                            classes='flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900'
                            btnTitle={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
            <div className='sm:mx-6 mx-2 mt-6 shadow'>
             
                <TailwindTableCss columns={selected?.columns || selectModuleColumn[1]?.columns} data={data} />
            </div>
            {/* <AlertMsgComponent /> */}
        </div>
    );
};

export default Homelayout;
