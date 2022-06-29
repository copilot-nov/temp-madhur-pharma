import { useState } from "react";
import CheckBox from '../../../../assets/svg/unSelectCheck.svg'
import SelectedCheckBox from '../../../../assets/svg/selectedCheck.svg'
import { ADD_PRODUCTION_PROCESS_INSPECTION } from "../../../../redux/actions/admin";
import { Alert } from "../../../alert";
import { connect } from "react-redux";

const FillingAndPacking = (props) => {
    const { selectedProcessData, selectedMaterial, formulationData, ADD_PRODUCTION_PROCESS_INSPECTION } = props
    const [select, setSelect] = useState([])
    const [handleResponse, setHandleResponse] = useState(null)

    // console.log(select)
    const handleSelect = (value, i) => {
        selectedMaterial.map((data) => {
            if (data?.materialId === i) {
                let copydata = []
                if (select?.includes(value?.name)) {
                    copydata = select?.filter(item => item !== value?.name)
                    setSelect(copydata)

                } else {
                    setSelect([...select, value?.name])
                    // setMaterialId([...materialId, value?.id])

                }
            }
        })

    }
    const handleSubmit = async () => {
        let payload = {
            "prod_proc_id": 0,
            "data": []
        }

        formulationData.filter((data) => {
            payload.prod_proc_id = data.id
            if (data?.process_id === selectedProcessData?.id)
                selectedMaterial.map((item, i) => {
                    let innerPayload = {
                        "material_id": item?.materialId,
                        "text_list": []
                    }
                    select.map((text) => {
                        innerPayload?.text_list.push({
                            "text": text,
                            "notes": "text"
                        })
                    })
                    payload?.data.push(innerPayload)
                })
        })
        // console.log(payload)
        let istrue = await ADD_PRODUCTION_PROCESS_INSPECTION(payload, payload?.prod_proc_id)
        if (istrue?.status) {
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }
    return (
        <div className="p-2 overflow-y-scroll" style={{ height: "68vh" }}>
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            <div className="grid grid-cols-1" >
                {
                    selectedMaterial?.map((item, i) => {
                        return (
                            <div key={i} className="m-1 flex justify-between items-center text-green-900 hover:shadow p-2 ">
                                <p className="text-sm"> <span className="mr-2">{i + 1} .</span> {item?.name}</p>
                                <div className="grid grid-cols-3" style={{ width: 950 }}>
                                    {ProcessList.map((process, index) => {
                                        return (
                                            <div key={index} className='p-1'>
                                                <button
                                                    onClick={() => { handleSelect(process, item?.materialId) }}
                                                    className="w-full flex items-center gap-2 p-2 mt-2"
                                                >
                                                    <img className="w-6 h-6" src={select?.includes(process?.name) ? SelectedCheckBox : CheckBox} alt={process?.name} />
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
                        )
                    })
                }
            </div>
            {selectedMaterial?.length > 0 ?
                <div className="pr-10 py-3 flex justify-end sm:px-6 mt-10">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Save
                    </button>
                </div>
                : ""}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formulationData: state?.AdminReducer.formulationData,
    };
};
export default connect(mapStateToProps, { ADD_PRODUCTION_PROCESS_INSPECTION })(FillingAndPacking);

const ProcessList = [
    { name: "Units given for Packing" },
    { name: 'Units Packed' },
    { name: 'Units Rejected' },
    { name: 'Rejection Type' },
    { name: 'Disposed By' },
]