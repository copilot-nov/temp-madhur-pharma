import CheckBox from '../../assets/svg/unSelectCheck.svg'
import SelectedCheckBox from '../../assets/svg/selectedCheck.svg'
import { useState } from 'react'
import { connect } from 'react-redux'
import { ADD_PRODUCTION_PROCESS } from '../../redux/actions/admin'
import { Alert } from '../alert'

const defaultState = {
    "data": []
}

const ProcessMaster = (props) => {
    const { select, handleSelect, processMasterList, processId, ADD_PRODUCTION_PROCESS} = props
    const { manufacturingTemplateList } = props?.AdminReducer
    const [handleResponse, setHandleResponse] = useState(null)
    // console.log(select)
    const handleSubmit = async () => {
        let payload = {
            "data": []
        }
        const formulationData = manufacturingTemplateList.at(-1)
        processId?.map((id) => {
            payload?.data.push({
                "process_id": id,
                "formulation_id": formulationData?.id,
                "notes": "test"
            })
        })
        let istrue = await ADD_PRODUCTION_PROCESS(payload)
        if (istrue?.status) {
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }




    }
    return (
        <div>
            <div className="shadow-lg p-2 rounded h-96">
                {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
                <div className='ml-4'>
                    <p className="text-xl text-green-900">
                        Select Processes
                    </p>
                </div>
                <div className="grid grid-cols-4">
                    {
                        processMasterList?.map((item) => {
                            return item?.name !== 'Product Formulation' && (
                                <div key={item?.id} className='p-1'>
                                    <button onClick={() => { handleSelect(item) }} className="w-full hover:shadow flex items-center gap-2 p-2 mt-2">
                                        <img className="w-6 h-6" src={select?.includes(item?.name) ? SelectedCheckBox : CheckBox} alt={item?.name} />
                                        <div className="flex flex-col">
                                            <strong className=" text-sm font-medium ">{item?.name}</strong>
                                        </div>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pr-10 py-3 flex justify-end sm:px-6 mt-10">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        AdminReducer: state?.AdminReducer,
    };
};
export default connect(mapStateToProps, {ADD_PRODUCTION_PROCESS})(ProcessMaster);
