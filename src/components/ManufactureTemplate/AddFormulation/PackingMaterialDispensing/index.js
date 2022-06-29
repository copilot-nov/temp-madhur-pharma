import { useMemo, useState } from "react";
import { connect } from "react-redux";
import { Alert } from '../../../../components/alert';
import { ADD_PRODUCTION_PROCESS_MATERIAL } from "../../../../redux/actions/admin";
// import ProductManufacturing from "../ProductManufacturing";
import SelectPackingProcess from "./SelectPackingProcess";


const PackingMaterialsDispensing = (props) => {
    const { subTab, selectedProcessData, formulationData, ADD_PRODUCTION_PROCESS_MATERIAL, selectedMaterial, setSelectedMaterial } = props
    const [select, setSelect] = useState([])
    const [materialId, setMaterialId] = useState([])
    const [handleResponse, setHandleResponse] = useState(null)


    // console.log(materialId)

    const handleSubmit = async () => {
        let payload = {
            "data": []
        }
        let selectedMaterialData= [

        ]
        formulationData.filter((data) => {
            if (data?.process_id === selectedProcessData?.id)
                select.map((item, i) => {
                    selectedMaterialData.push({name:item, materialId: materialId[i] })
                    payload?.data.push({
                        "prod_proc_id": data?.id,
                        "sku_id": materialId[i],
                        "notes": "test"
                    })
                })
        })
        setSelectedMaterial(selectedMaterialData)
        // console.log(payload)
        let istrue = await ADD_PRODUCTION_PROCESS_MATERIAL (payload)
        if (istrue?.status) {
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div className="p-2">
            <div className="m-1 flex justify-center text-green-900 w-full ">
                <SelectPackingProcess select={select} setSelect={setSelect}  setMaterialId={setMaterialId} materialId={materialId}/>
            </div>
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            <div className="grid grid-cols-3">

                {
                    select?.map((item, i) => {
                        return (
                            <div key={item} className="m-1 flex justify-between items-center text-green-900 w-full hover:shadow p-2">
                                <p className="text-sm"> <span className="mr-2">[{i + 1}.]</span> {item}</p>
                            </div>
                        )
                    })
                }
            </div>
            {select?.length > 0 ?
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
            <br />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formulationData: state?.AdminReducer.formulationData,

    };
};
export default connect(mapStateToProps, {ADD_PRODUCTION_PROCESS_MATERIAL})(PackingMaterialsDispensing);