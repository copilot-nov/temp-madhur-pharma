import CheckBox from '../../assets/svg/unSelectCheck.svg'
import SelectedCheckBox from '../../assets/svg/selectedCheck.svg'

const ProcessMaster = ({ select, handleSelect, processMasterList }) => {
    return (
        <div className="shadow-lg p-2 rounded h-96">
            <div className='ml-4'>
                <p className="text-xl text-green-900">
                    Select Processes
                </p>
            </div>
            <div className="grid grid-cols-4">
                {
                    processMasterList?.map((item) => {
                        return item !== 'Product Formulation' && (
                            <div key={item} className='p-1'>
                                <button onClick={() => { handleSelect(item) }} className="w-full hover:shadow flex items-center gap-2 p-2 mt-2">
                                    <img className="w-6 h-6" src={select?.includes(item) ? SelectedCheckBox : CheckBox} alt={item} />
                                    <div className="flex flex-col">
                                        <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">{item}</strong>
                                    </div>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProcessMaster;
